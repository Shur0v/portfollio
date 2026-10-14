import { Pool, type PoolClient } from "pg";

const globalDatabase = globalThis as typeof globalThis & { portfolioPool?: Pool };

export function database() {
  if (!process.env.DATABASE_URL) throw new Error("Set DATABASE_URL and run npm run db:setup before starting the portfolio.");
  if (!globalDatabase.portfolioPool) {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
      statement_timeout: 10000,
      application_name: "shurov-portfolio",
    });
    pool.on("error", error => console.error("PostgreSQL connection error:", error.message));
    globalDatabase.portfolioPool = pool;
  }
  return globalDatabase.portfolioPool;
}

export async function transaction<T>(operation: (client: PoolClient) => Promise<T>) {
  const client = await database().connect();
  try {
    await client.query("BEGIN");
    const result = await operation(client);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally { client.release(); }
}
