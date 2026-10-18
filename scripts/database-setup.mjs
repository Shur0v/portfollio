import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const root = fileURLToPath(new URL("../", import.meta.url));

export function loadEnvironment() {
  try { process.loadEnvFile(path.join(root, ".env.local")); }
  catch (error) { if (error.code !== "ENOENT") throw error; }
}

async function readJson(filename, fallback) {
  try {
    const value = JSON.parse(await readFile(filename, "utf8"));
    if (!Array.isArray(value)) throw new Error(`Expected an array in ${path.basename(filename)}.`);
    return value;
  } catch (error) {
    if (error.code === "ENOENT") return fallback;
    throw error;
  }
}

export async function setupDatabase(connectionString, legacyDirectory = path.resolve(process.env.PORTFOLIO_DATA_DIR || path.join(root, "storage"))) {
  if (!connectionString) throw new Error("Set DATABASE_URL in .env.local, or run npm run db:local first.");
  const client = new pg.Client({ connectionString, connectionTimeoutMillis: 10000 });
  await client.connect();
  try {
    await client.query("BEGIN");
    await client.query("SELECT pg_advisory_xact_lock(74510911)");
    await client.query("CREATE TABLE IF NOT EXISTS portfolio_migrations (version integer PRIMARY KEY, applied_at timestamptz NOT NULL DEFAULT now())");
    const applied = await client.query("SELECT version FROM portfolio_migrations WHERE version = 1");
    let result = { initialized: false };
    if (!applied.rowCount) {
      await client.query(await readFile(path.join(root, "database/001-initial.sql"), "utf8"));
      const existing = await client.query("SELECT (SELECT count(*) FROM portfolio_projects) + (SELECT count(*) FROM portfolio_messages) AS total");
      if (Number(existing.rows[0].total)) throw new Error("Database contains portfolio data without a migration record. Refusing to overwrite it.");
      const seed = await readJson(path.join(root, "data/projects.seed.json"), []);
      const projects = legacyDirectory ? await readJson(path.join(legacyDirectory, "projects.json"), seed) : seed;
      const messages = legacyDirectory ? await readJson(path.join(legacyDirectory, "messages.json"), []) : [];
      for (const project of projects) {
        await client.query("INSERT INTO portfolio_projects (id, payload) VALUES ($1, $2::jsonb)", [project.id, JSON.stringify(project)]);
      }
      for (const message of messages) {
        await client.query("INSERT INTO portfolio_messages (id, created_at, name, email, subject, message) VALUES ($1, $2, $3, $4, $5, $6)", [message.id, message.date, message.name, message.email, message.subject, message.message]);
      }
      await client.query("INSERT INTO portfolio_migrations (version) VALUES (1)");
      result = { initialized: true, projects: projects.length, messages: messages.length };
    }
    const liveMigration = await client.query("SELECT version FROM portfolio_migrations WHERE version = 2");
    if (!liveMigration.rowCount) {
      await client.query(await readFile(path.join(root, "database/002-live-content.sql"), "utf8"));
      await client.query("INSERT INTO portfolio_migrations (version) VALUES (2)");
    }
    const siteMigration = await client.query("SELECT version FROM portfolio_migrations WHERE version = 3");
    if (!siteMigration.rowCount) {
      await client.query(await readFile(path.join(root, "database/003-site-content.sql"), "utf8"));
      const definitions = JSON.parse(await readFile(path.join(root, "data/site-content.seed.json"), "utf8"));
      for (const definition of definitions) {
        const payload = {
          values: Object.fromEntries(definition.sections.flatMap(section => section.fields.map(field => [field.id, field.value]))),
          collections: Object.fromEntries(definition.collections.map(collection => [collection.id, collection.items])),
          sectionOrder: definition.sectionOrder,
          hiddenSections: [],
        };
        await client.query("INSERT INTO portfolio_site_content (id, payload) VALUES ($1, $2::jsonb)", [definition.id, JSON.stringify(payload)]);
      }
      await client.query("INSERT INTO portfolio_migrations (version) VALUES (3)");
    }
    const versionMigration = await client.query("SELECT version FROM portfolio_migrations WHERE version = 4");
    if (!versionMigration.rowCount) {
      await client.query(await readFile(path.join(root, "database/004-site-version.sql"), "utf8"));
      await client.query("INSERT INTO portfolio_migrations (version) VALUES (4)");
    }
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally { await client.end(); }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  loadEnvironment();
  try { console.log("PostgreSQL schema ready:", await setupDatabase(process.env.DATABASE_URL)); }
  catch (error) { console.error("Database setup failed:", error.message); process.exitCode = 1; }
}
