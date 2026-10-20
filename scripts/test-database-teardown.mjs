import { access, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { stopPostgres } from "./portable-postgres.mjs";

export default async function teardown() {
  const storage = process.env.PLAYWRIGHT_STORAGE_DIR;
  if (!storage) return;
  let directory;
  try { directory = path.resolve(await readFile(path.join(storage, "database-directory"), "utf8")); }
  catch (error) { if (error.code === "ENOENT") return; throw error; }
  if (path.dirname(directory) !== path.resolve(tmpdir()) || !path.basename(directory).startsWith("portfolio-pg-tests-")) throw new Error("Refusing to stop a PostgreSQL directory not created by this test run.");
  try { await access(path.join(directory, "postmaster.pid")); }
  catch (error) { if (error.code === "ENOENT") return; throw error; }
  await stopPostgres(directory);
  try {
    const failure = await readFile(path.join(storage, "server-stream-error"), "utf8");
    throw new Error(failure);
  } catch (error) { if (error.code !== "ENOENT") throw error; }
}
