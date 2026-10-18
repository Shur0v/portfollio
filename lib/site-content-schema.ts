import seed from "../data/site-content.seed.json";
import type { SiteDefinition, SiteField, SitePageContent } from "./site-content-types";

export const siteDefinitions = seed as SiteDefinition[];

export function siteDefinition(id: string) {
  const definition = siteDefinitions.find(page => page.id === id);
  if (!definition) throw new Error("Unknown content page.");
  return definition;
}

export function defaultSitePage(id: string): SitePageContent {
  const definition = siteDefinition(id);
  return {
    values: Object.fromEntries(definition.sections.flatMap(section => section.fields.map(field => [field.id, field.value]))),
    collections: Object.fromEntries(definition.collections.map(collection => [collection.id, structuredClone(collection.items)])),
    hiddenSections: [],
    sectionOrder: [...definition.sectionOrder],
  };
}

function object(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid content object.");
  return value as Record<string, unknown>;
}

function fieldValue(field: SiteField, input: unknown) {
  if (typeof input !== "string" || input.length > (field.type === "textarea" ? 20000 : field.type === "text" ? 2000 : 2048) || input.includes("\u0000")) throw new Error(`Invalid ${field.label}.`);
  if (field.type === "choice" && !field.choices?.includes(input)) throw new Error(`Choose a valid ${field.label}.`);
  if (field.type === "image" || field.type === "video") {
    const validLocal = /^\/(?:assets\/[a-zA-Z0-9_./-]+\.(?:jpe?g|png|webp|gif|ico|mp4|webm)|media\/[a-f0-9-]+\.webp|favicon\.ico)$/.test(input) && !input.includes("..");
    if (!validLocal) throw new Error(`Upload a valid file for ${field.label}.`);
  }
  if (field.type === "link" && input) {
    if (/[\u0000-\u0020\u007f\\<>]/.test(input) || input.startsWith("//")) throw new Error(`Invalid link: ${field.label}.`);
    if (/^[a-z][a-z0-9+.-]*:/i.test(input)) {
      if (!/^(https?:\/\/|mailto:|tel:)/i.test(input)) throw new Error("Links must use HTTP, HTTPS, mailto, tel, or a local destination.");
      if (/^https?:/i.test(input)) {
        const url = new URL(input);
        if (url.username || url.password) throw new Error("Website links cannot contain credentials.");
      }
    }
  }
  return input;
}

function valuesFor(fields: SiteField[], input: unknown) {
  const values = object(input);
  if (Object.keys(values).some(key => !fields.some(field => field.id === key))) throw new Error("Unknown content field.");
  return Object.fromEntries(fields.map(field => [field.id, fieldValue(field, values[field.id])]));
}

export function validateSitePage(id: string, input: unknown): SitePageContent {
  const definition = siteDefinition(id);
  const data = object(input);
  const values = valuesFor(definition.sections.flatMap(section => section.fields), data.values);
  const collectionsInput = object(data.collections);
  if (Object.keys(collectionsInput).some(key => !definition.collections.some(collection => collection.id === key))) throw new Error("Unknown content collection.");
  const collections = Object.fromEntries(definition.collections.map(collection => {
    const items = collectionsInput[collection.id];
    if (!Array.isArray(items) || items.length > 60) throw new Error("A collection can contain up to 60 items.");
    const seen = new Set<string>();
    return [collection.id, items.map(value => {
      const item = object(value);
      if (typeof item.id !== "string" || !/^[a-zA-Z0-9_-]{1,80}$/.test(item.id) || seen.has(item.id)) throw new Error("Invalid or duplicate item ID.");
      seen.add(item.id);
      const template = collection.templates.find(template => template.id === item.template);
      if (!template) throw new Error("Unknown item layout.");
      return { id: item.id, template: template.id, values: valuesFor(template.fields, item.values) };
    })];
  }));
  const order = data.sectionOrder;
  if (!Array.isArray(order) || order.length !== definition.sectionOrder.length || new Set(order).size !== order.length || order.some(id => !definition.sectionOrder.includes(id))) throw new Error("Invalid section ordering.");
  const hidden = data.hiddenSections;
  if (!Array.isArray(hidden) || hidden.some(id => !definition.sectionOrder.includes(id)) || new Set(hidden).size !== hidden.length) throw new Error("Invalid section visibility.");
  return { values, collections, sectionOrder: order, hiddenSections: hidden };
}
