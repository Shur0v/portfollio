import { spawn } from "node:child_process";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { createServer } from "node:net";
import { randomBytes } from "node:crypto";
import { createRequire } from "node:module";
import path from "node:path";
import pg from "pg";
import { startPostgres } from "./portable-postgres.mjs";
import { setupDatabase } from "./database-setup.mjs";

const require = createRequire(import.meta.url);
const directory = await mkdtemp(path.join(tmpdir(), "portfolio-pg-tests-"));
const listener = createServer();
await new Promise(resolve => listener.listen(0, "127.0.0.1", resolve));
const port = listener.address().port;
await new Promise(resolve => listener.close(resolve));
const password = randomBytes(32).toString("hex");
const connectionString = `postgresql://portfolio:${password}@127.0.0.1:${port}/portfolio_test`;
let stop;
let server;
let stopping = false;
async function shutdown(code = 0) {
  if (stopping) return;
  stopping = true;
  server?.kill();
  try { if (stop) await stop(); }
  catch (error) { console.error("Test PostgreSQL shutdown failed:", error.message); }
  process.exit(code);
}
process.on("SIGINT", () => shutdown());
process.on("SIGTERM", () => shutdown());
try {
  stop = await startPostgres({ directory, port, user: "portfolio", password, temporary: true });
  const client = new pg.Client({ connectionString: connectionString.replace(/\/portfolio_test$/, "/postgres") });
  await client.connect();
  try { await client.query('CREATE DATABASE "portfolio_test"'); }
  finally { await client.end(); }
  await setupDatabase(connectionString, false);
  await mkdir(process.env.PORTFOLIO_DATA_DIR, { recursive: true });
  await writeFile(path.join(process.env.PORTFOLIO_DATA_DIR, "database-url"), connectionString, { mode: 0o600 });
  await writeFile(path.join(process.env.PORTFOLIO_DATA_DIR, "database-directory"), directory);
  server = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "start", "--port", "3100"], {
    env: { ...process.env, DATABASE_URL: connectionString }, windowsHide: true, stdio: "inherit",
  });
  server.on("error", error => { console.error(error.message); shutdown(1); });
  server.on("exit", code => shutdown(code || 0));
} catch (error) { console.error("Test server failed:", error.message); await shutdown(1); }
