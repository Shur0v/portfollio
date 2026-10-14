import pg from "pg";
import { loadEnvironment } from "./database-setup.mjs";

loadEnvironment();
if (!process.env.DATABASE_URL) throw new Error("Set DATABASE_URL in .env.local first.");
const client = new pg.Client({ connectionString: process.env.DATABASE_URL, connectionTimeoutMillis: 5000 });
try {
  await client.connect();
  const result = await client.query("SELECT version(), current_database() AS database, current_setting('server_encoding') AS encoding, (SELECT count(*) FROM portfolio_projects) AS projects, (SELECT count(*) FROM portfolio_messages) AS messages");
  console.log(result.rows[0]);
} catch (error) { console.error("PostgreSQL check failed:", error.message); process.exitCode = 1; }
finally { await client.end(); }
