import type { Project } from "./project-types";
import { database, transaction } from "./database";

export async function getProjects(publishedOnly = false) {
  const result = await database().query<{ payload: Project }>(`SELECT ${publishedOnly ? "payload - 'layoutContent'" : "payload"} AS payload FROM portfolio_projects ${publishedOnly ? "WHERE published = true" : ""} ORDER BY display_order, id`);
  return result.rows.map(row => row.payload);
}

export async function getProject(slug: string) {
  const result = await database().query<{ payload: Project }>(
    "SELECT payload FROM portfolio_projects WHERE published = true AND (slug = $1 OR (id = $1 AND $2)) LIMIT 1",
    [slug, /^project-\d+$/.test(slug)],
  );
  return result.rows[0]?.payload;
}

export async function saveProject(project: Project) {
  return transaction(async client => {
    await client.query("SELECT pg_advisory_xact_lock(74510912)");
    const duplicate = await client.query("SELECT id FROM portfolio_projects WHERE (slug = $1 OR id = $1 OR slug = $2) AND id <> $2", [project.slug, project.id]);
    if (duplicate.rowCount) throw new Error("This project URL is already in use.");
    await client.query("INSERT INTO portfolio_projects (id, payload) VALUES ($1, $2::jsonb) ON CONFLICT (id) DO UPDATE SET payload = EXCLUDED.payload, updated_at = now()", [project.id, JSON.stringify(project)]);
    return project;
  });
}

export async function deleteProject(id: string) {
  await database().query("DELETE FROM portfolio_projects WHERE id = $1", [id]);
}
