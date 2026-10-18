export type SiteField = {
  id: string;
  label: string;
  type: "text" | "textarea" | "image" | "link" | "video" | "choice";
  value: string;
  choices?: string[];
};

export type SiteItem = { id: string; template: string; values: Record<string, string> };
export type SiteCollection = {
  id: string;
  label: string;
  section: string;
  templates: { id: string; label: string; fields: SiteField[] }[];
  items: SiteItem[];
};
export type SiteDefinition = {
  id: string;
  label: string;
  sections: { id: string; label: string; fields: SiteField[] }[];
  collections: SiteCollection[];
  sectionOrder: string[];
};
export type SitePageContent = {
  values: Record<string, string>;
  collections: Record<string, SiteItem[]>;
  hiddenSections: string[];
  sectionOrder: string[];
};
export type SitePageRecord = { id: string; version: string; content: SitePageContent };
export type SiteSnapshot = { revision: string; pages: Record<string, SitePageRecord> };
