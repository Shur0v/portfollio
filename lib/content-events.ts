import type { PoolClient, Notification } from "pg";
import { database } from "./database";

type Listener = (revision: string | null) => void;
type EventState = { listeners: Set<Listener>; client?: PoolClient; connecting?: Promise<void> };
const globalEvents = globalThis as typeof globalThis & { portfolioEvents?: EventState };
const state = globalEvents.portfolioEvents ||= { listeners: new Set<Listener>() };

function disconnect(client: PoolClient) {
  if (state.client !== client) return;
  state.client = undefined;
  client.removeAllListeners("notification");
  client.release(true);
  for (const listener of [...state.listeners]) listener(null);
}

async function connect() {
  if (state.client) return;
  if (!state.connecting) {
    state.connecting = (async () => {
      const client = await database().connect();
      state.client = client;
      client.on("error", () => disconnect(client));
      client.on("end", () => disconnect(client));
      client.on("notification", (notification: Notification) => {
        if (notification.channel === "portfolio_content_changed" && /^\d+$/.test(notification.payload || "")) {
          for (const listener of [...state.listeners]) listener(notification.payload!);
        }
      });
      try { await client.query("LISTEN portfolio_content_changed"); }
      catch (error) { disconnect(client); throw error; }
    })().finally(() => { state.connecting = undefined; });
  }
  await state.connecting;
}

export async function subscribeContent(listener: Listener) {
  state.listeners.add(listener);
  try { await connect(); }
  catch (error) { state.listeners.delete(listener); throw error; }
  return () => {
    state.listeners.delete(listener);
    if (!state.listeners.size && state.client) {
      const client = state.client;
      state.client = undefined;
      client.removeAllListeners("notification");
      client.release(true);
    }
  };
}
