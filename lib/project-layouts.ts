import layouts from "../data/project-layouts.json";
import { defaultSitePage, siteDefinition, validateSitePage } from "./site-content-schema";
import type { SitePageContent } from "./site-content-types";
import type { Project } from "./project-types";

export const projectLayouts = layouts;

export function projectLayout(template: number) {
  const layout = projectLayouts.find(layout => layout.template === template);
  if (!layout) throw new Error("Choose a valid project layout from 1 to 9.");
  return layout;
}

export function blankProjectLayout(template: number, defaults?: SitePageContent): SitePageContent {
  const layout = projectLayout(template);
  const content = defaults ? structuredClone(defaults) : defaultSitePage(`project-${template}`);
  content.hiddenSections = [];
  content.sectionOrder = defaultSitePage(`project-${template}`).sectionOrder;
  const fields = siteDefinition(`project-${template}`).sections.flatMap(section => section.fields);
  const editable = new Set([...layout.sections.flatMap(section => section.fields.map(field => field.id)), ...layout.heroFields.map(field => field.id), ...layout.slots.flatMap(slot => [...slot.bindings, slot.alt]), ...layout.relatedFields.map(field => field.id)]);
  for (const field of fields) {
    if (editable.has(field.id) || field.type === "image" || field.type === "video" && !field.value.includes("/placeholder.") || field.label.startsWith("data-caption:")) content.values[field.id] = "";
  }
  for (const video of layout.videos) {
    for (const source of video.sources) content.values[source.id] = "";
    if (video.link) content.values[video.link] = "";
  }
  return content;
}

export function validateProjectLayout(template: number, value: unknown) {
  projectLayout(template);
  return validateSitePage(`project-${template}`, value, { allowEmptyMedia: true, allowHttpsVideo: true });
}

export function projectLayoutWarnings(project: Project): string[] {
  if (!project.template || !project.layoutContent) return [];
  const layout = projectLayout(project.template);
  const content = project.layoutContent;
  const visible = (section: string) => !content.hiddenSections.includes(section);
  const warnings = layout.slots.filter(slot => visible(slot.section) && !content.values[slot.id]).map(slot => {
    const section = layout.sections.find(section => section.id === slot.section)!;
    const position = layout.slots.filter(item => item.section === slot.section).findIndex(item => item.id === slot.id) + 1;
    return `${section.label}: upload image ${position}${slot.kind === "poster" ? " (video poster)" : ""}.`;
  });
  for (const video of layout.videos) if (visible(video.section) && !video.sources.some(source => content.values[source.id])) warnings.push(`${layout.sections.find(section => section.id === video.section)!.label}: add an MP4 or WebM video URL.`);
  return warnings;
}

export function renderProjectLayout(project: Project, defaults: SitePageContent, published: Project[]) {
  if (!project.layoutContent || !project.template) return { content: defaults, relatedLinks: undefined };
  const layout = projectLayout(project.template);
  const content = structuredClone(project.layoutContent);
  const owned = new Set([...layout.sections.flatMap(section => section.fields.map(field => field.id)), ...layout.heroFields.map(field => field.id), ...layout.slots.flatMap(slot => [...slot.bindings, slot.alt]), ...layout.videos.flatMap(video => [video.link, ...video.sources.map(source => source.id)]), ...layout.relatedFields.map(field => field.id)]);
  for (const field of siteDefinition(`project-${project.template}`).sections.flatMap(section => section.fields)) {
    if (!owned.has(field.id) && field.type !== "image" && field.type !== "video" && !field.label.startsWith("data-caption:")) content.values[field.id] = defaults.values[field.id];
  }
  const ordered = [...published.filter(item => item.id !== project.id), project].sort((left, right) => left.order - right.order || left.id.localeCompare(right.id));
  const position = ordered.findIndex(item => item.id === project.id);
  const neighbors = ordered.length > 1 ? { previous: ordered[(position + ordered.length - 1) % ordered.length], next: ordered[(position + 1) % ordered.length] } : null;
  const categoryPositions = { previous: 0, next: 0 };
  for (const field of layout.relatedFields) {
    const direction = field.direction as "previous" | "next";
    const neighbor = neighbors?.[direction];
    if (!neighbor) { content.values[field.id] = ""; continue; }
    content.values[field.id] = field.role === "image" ? neighbor.image : field.role === "category" ? [neighbor.category, ...(neighbor.additionalCategories || [])][categoryPositions[direction]++] || "" : neighbor.title;
  }
  if (!neighbors && !content.hiddenSections.includes(layout.navigation)) content.hiddenSections.push(layout.navigation);
  for (const field of siteDefinition(`project-${project.template}`).sections.flatMap(section => section.fields)) {
    if (field.type === "image" && !content.values[field.id]) {
      const aspect = layout.slots.find(slot => slot.id === field.id)?.aspect || "landscape";
      content.values[field.id] = `/assets/img/layout-placeholder-${aspect}.svg`;
    }
    if (field.type === "video" && !content.values[field.id]) content.values[field.id] = field.value.endsWith(".webm") ? "/assets/vids/placeholder.webm" : "/assets/vids/placeholder.mp4";
  }
  return { content, relatedLinks: { previous: neighbors ? `/projects/${neighbors.previous.slug}` : "/#portfolio", next: neighbors ? `/projects/${neighbors.next.slug}` : "/#portfolio" } };
}
