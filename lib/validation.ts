import type { Project } from "./project-types";
import { blankProjectLayout, projectLayoutWarnings, validateProjectLayout } from "./project-layouts";

const textField = (data: Record<string, unknown>, key: string, max: number) => {
  if (typeof data[key] !== "string" || data[key].length > max) throw new Error(`Invalid ${key}.`);
  return data[key].trim();
};

export function mediaPath(value: string) {
  return /^\/(?:assets\/[a-zA-Z0-9/_-]+\.(?:jpe?g|png|webp|gif)|media\/[a-f0-9-]+\.(?:jpg|png|webp|gif))$/.test(value);
}

export function validateProject(data: Record<string, unknown>, previous?: Project): Project {
  const title = textField(data, "title", 120);
  const slug = textField(data, "slug", 80);
  const category = textField(data, "category", 30);
  const image = textField(data, "image", 300);
  const heroImage = textField(data, "heroImage", 300);
  const website = textField(data, "website", 500);
  if (!title || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error("Enter a title and a lowercase URL slug.");
  if (!["Branding", "Digital", "Artistic"].includes(category)) throw new Error("Choose a project category.");
  if (image && !mediaPath(image) || heroImage && !mediaPath(heroImage) || data.published === true && !image) throw new Error("Upload a valid cover image before publishing, and a valid hero image if provided.");
  if (website && !/^https?:\/\//.test(website)) throw new Error("Website must start with https:// or http://.");
  if (website) { try { new URL(website); } catch { throw new Error("Invalid website URL."); } }
  const order = Number(data.order);
  if (!Number.isInteger(order) || order < 0 || order > 10000) throw new Error("Order must be a whole number between 0 and 10000.");
  const gallery = data.gallery;
  if (!Array.isArray(gallery) || gallery.length > 20 || gallery.some(value => typeof value !== "string" || !mediaPath(value))) throw new Error("Upload up to 20 valid gallery images.");
  const video = data.video === undefined ? previous?.video || [] : data.video;
  if (!Array.isArray(video) || video.length > 2 || video.some(source => !source || typeof source.src !== "string" || !["video/mp4", "video/webm"].includes(source.type) || !/^\/(?:assets\/vids\/[a-zA-Z0-9_./-]+\.(?:mp4|webm))$/.test(source.src) && !/^https:\/\//.test(source.src) || source.src.includes("..") || /[\s<>\\]/.test(source.src))) throw new Error("Use up to two valid MP4/WebM asset paths or HTTPS video URLs.");
  for (const source of video) if (source.src.startsWith("https://")) { const url = new URL(source.src); if (url.username || url.password) throw new Error("Video URLs cannot contain credentials."); }
  const template = data.template === undefined ? previous?.template || 0 : data.template;
  if (typeof template !== "number" || !Number.isInteger(template) || template < 0 || template > 9) throw new Error("Choose a project layout from 1 to 9, or the legacy simple layout.");
  if (!template && data.layoutContent !== undefined) throw new Error("The simple layout does not accept layout-specific fields.");
  const layoutContent = data.layoutContent !== undefined ? validateProjectLayout(template, data.layoutContent) : previous?.template === template ? previous.layoutContent : template ? blankProjectLayout(template) : undefined;
  const project: Project = {
    id: previous?.id || crypto.randomUUID(), slug, title, category, image, heroImage, website,
    description: textField(data, "description", 10000), client: textField(data, "client", 120),
    year: textField(data, "year", 20), role: textField(data, "role", 120),
    order, portrait: data.portrait === true, published: data.published === true,
    template, video, gallery, ...(layoutContent ? { layoutContent } : {}),
    repeatInGrid: data.repeatInGrid === true,
    additionalCategories: Array.isArray(data.additionalCategories) ? data.additionalCategories.filter(category => ["Branding", "Digital", "Artistic"].includes(category) && category !== data.category) : [],
  };
  if (project.published) {
    const warnings = projectLayoutWarnings(project);
    if (warnings.length) throw new Error(`Complete the selected layout before publishing. ${warnings[0]} Save an incomplete project as a draft, or hide an optional section.`);
  }
  return project;
}
