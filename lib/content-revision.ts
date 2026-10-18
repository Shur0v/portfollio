import { database } from "./database";
import { cache } from "react";

export const getContentRevision = cache(async () => {
  const result = await database().query<{ revision: string }>("SELECT revision::text FROM portfolio_content_revision WHERE singleton = true");
  return result.rows[0].revision;
});
