import { readFile, writeFile } from "node:fs/promises";
import { randomBytes } from "node:crypto";
import { homedir } from "node:os";
import path from "node:path";
import pg from "pg";
import { loadEnvironment } from "./database-setup.mjs";
import { startPostgres } from "./portable-postgres.mjs";

loadEnvironment();
const port = 54329;
const directory = path.resolve(process.env.LOCAL_POSTGRES_DIR || path.join(process.env.LOCALAPPDATA || homedir(), "ShurovPortfolio", "postgres"));
const configured = process.env.DATABASE_URL ? new URL(process.env.DATABASE_URL) : null;
if (configured && (configured.hostname !== "127.0.0.1" || configured.port !== String(port) || configured.pathname !== "/portfolio" || configured.username !== "portfolio")) {
  throw new Error("DATABASE_URL points to another server. Start that PostgreSQL server instead; db:local will not replace your configuration.");
}
const password = configured ? decodeURIComponent(configured.password) : randomBytes(32).toString("hex");
const connectionString = configured?.href || `postgresql://portfolio:${password}@127.0.0.1:${port}/portfolio`;
let stop;
try {
  if (!configured) {
    let environment = "";
    try { environment = await readFile(".env.local", "utf8"); }
    catch (error) { if (error.code !== "ENOENT") throw error; }
    const updated = /^DATABASE_URL=.*$/m.test(environment) ? environment.replace(/^DATABASE_URL=.*$/m, `DATABASE_URL=${connectionString}`) : `${environment}\nDATABASE_URL=${connectionString}\n`;
    await writeFile(".env.local", updated, { mode: 0o600 });
  }
  stop = await startPostgres({ directory, port, user: "portfolio", password });
  const client = new pg.Client({ connectionString: connectionString.replace(/\/portfolio$/, "/postgres") });
  await client.connect();
  try {
    const exists = await client.query("SELECT 1 FROM pg_database WHERE datname = $1", ["portfolio"]);
    if (!exists.rowCount) await client.query('CREATE DATABASE "portfolio"');
  } finally { await client.end(); }
  console.log(`PostgreSQL is running on 127.0.0.1:${port}. Database: portfolio.`);
  console.log(`Data directory: ${directory}`);
  console.log("DATABASE_URL is configured in .env.local. Keep this terminal running; in another terminal run npm run db:setup, then npm run dev.");
  let stopping = false;
  const shutdown = async () => {
    if (stopping) return;
    stopping = true;
    try { await stop(); console.log("PostgreSQL stopped safely; data is preserved."); }
    catch (error) { console.error("PostgreSQL shutdown failed:", error.message); }
    process.exit();
  };
  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
  setInterval(() => {}, 60000);
} catch (error) {
  if (stop) await stop();
  console.error("Local PostgreSQL startup failed:", error.message);
  process.exitCode = 1;
}
