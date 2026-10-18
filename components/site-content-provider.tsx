"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { SiteSnapshot } from "../lib/site-content-types";

const SiteContext = createContext<SiteSnapshot | null>(null);

export function SiteContentProvider({ snapshot, children }: { snapshot: SiteSnapshot; children: ReactNode }) {
  return <SiteContext.Provider value={snapshot}>{children}</SiteContext.Provider>;
}

export function useSiteContent(id: string) {
  const snapshot = useContext(SiteContext);
  if (!snapshot?.pages[id]) throw new Error(`Site content is unavailable for ${id}. Run the database migrations.`);
  return snapshot.pages[id].content;
}
