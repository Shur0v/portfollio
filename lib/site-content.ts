import { cache } from "react";
import { database, transaction } from "./database";
import { getContentRevision } from "./content-revision";
import { defaultSitePage, siteDefinitions, validateSitePage } from "./site-content-schema";
import type { SitePageContent, SitePageRecord, SiteSnapshot } from "./site-content-types";

export class ContentConflict extends Error {}

export function pageSiteSnapshot(snapshot: SiteSnapshot, id: string): SiteSnapshot {
  if (!snapshot.pages[id]) throw new Error("Content page is unavailable.");
  return { revision: snapshot.revision, pages: { global: snapshot.pages.global, [id]: snapshot.pages[id] } };
}

export const getSiteSnapshot = cache(async (): Promise<SiteSnapshot> => {
  const revision = await getContentRevision();
  const rows = await database().query<{ id: string; version: string; payload: SitePageContent }>("SELECT id, version::text, payload FROM portfolio_site_content");
  const pages = Object.fromEntries(siteDefinitions.map(definition => {
    const row = rows.rows.find(row => row.id === definition.id);
    const defaults = defaultSitePage(definition.id);
    return [definition.id, { id: definition.id, version: row?.version || "0", content: row ? {
      values: { ...defaults.values, ...row.payload.values }, collections: { ...defaults.collections, ...row.payload.collections },
      sectionOrder: row.payload.sectionOrder, hiddenSections: row.payload.hiddenSections,
    } : defaults }];
  }));
  return { revision, pages };
});

export async function saveSitePage(id: string, content: unknown, expectedVersion: unknown): Promise<SitePageRecord> {
  if (typeof expectedVersion !== "string" || !/^\d{1,18}$/.test(expectedVersion)) throw new Error("A valid content version is required.");
  const validated = validateSitePage(id, content);
  return transaction(async client => {
    const result = expectedVersion === "0"
      ? await client.query("INSERT INTO portfolio_site_content (id, payload) VALUES ($1, $2::jsonb) ON CONFLICT DO NOTHING RETURNING version::text", [id, JSON.stringify(validated)])
      : await client.query("UPDATE portfolio_site_content SET payload = $2::jsonb, version = version + 1, updated_at = now() WHERE id = $1 AND version = $3::bigint RETURNING version::text", [id, JSON.stringify(validated), expectedVersion]);
    if (!result.rowCount) throw new ContentConflict("This page changed in another session. Reload it before saving so no edits are overwritten.");
    return { id, version: result.rows[0].version, content: validated };
  });
}
