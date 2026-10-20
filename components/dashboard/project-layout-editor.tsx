"use client";

import { projectLayout } from "../../lib/project-layouts";
import { siteDefinition } from "../../lib/site-content-schema";
import type { SitePageContent } from "../../lib/site-content-types";

type Props = {
  template: number;
  content: SitePageContent;
  onChange: (content: SitePageContent) => void;
  onUpload: (file: File, bindings: string[]) => void;
};

export function ProjectLayoutEditor({ template, content, onChange, onUpload }: Props) {
  const layout = projectLayout(template);
  const definition = siteDefinition(`project-${template}`);
  const setValue = (id: string, value: string) => onChange({ ...content, values: { ...content.values, [id]: value } });
  const captions = definition.sections.find(section => section.id === "extra-labels")?.fields.filter(field => field.label.startsWith("data-caption:")) || [];

  return <section aria-label={`Layout ${template} content`} className="tw:space-y-6 tw:rounded-xl tw:border tw:border-solid tw:border-zinc-700 tw:p-4 tw:sm:p-6">
    <div><h3 className="tw:mb-2 tw:text-xl">Layout {template} · {layout.name}</h3><p className="tw:mb-0 tw:text-sm tw:text-zinc-400">The sections and numbered image placements below follow the real layout in page order. Content belongs only to this project. New layouts start empty; no example project images or text are copied.</p></div>
    {layout.heroFields.map(field => <label key={field.id}>{field.label}<textarea name={`layout.${field.id}`} rows={2} value={content.values[field.id]} maxLength={2000} onChange={event => setValue(field.id, event.target.value)} /></label>)}
    {layout.sections.map((section, sectionIndex) => {
      const images = layout.slots.filter(slot => slot.section === section.id);
      const videos = layout.videos.filter(video => video.section === section.id);
      const hidden = content.hiddenSections.includes(section.id);
      const grid = section.columns === 4 ? "tw:sm:grid-cols-2 tw:xl:grid-cols-4" : section.columns === 3 ? "tw:sm:grid-cols-3" : section.columns === 2 ? "tw:sm:grid-cols-2" : "tw:grid-cols-1";
      return <fieldset key={section.id} data-layout-section={section.id} className="tw:m-0 tw:min-w-0 tw:space-y-4 tw:rounded-lg tw:border tw:border-solid tw:border-zinc-700 tw:p-4">
        <legend className="tw:px-2 tw:font-bold">{sectionIndex + 1}. {section.label}</legend>
        <label><input type="checkbox" checked={!hidden} onChange={event => onChange({ ...content, hiddenSections: event.target.checked ? content.hiddenSections.filter(id => id !== section.id) : [...content.hiddenSections, section.id] })} /> Show {section.label} on the project page</label>
        {hidden && <p className="tw:text-sm tw:text-amber-300">Hidden on the live page. These fields are retained, and missing media here will not block publishing.</p>}
        {!!images.length && <div className={`tw:grid tw:gap-4 ${grid}`}>
          {images.map((slot, index) => {
            const value = content.values[slot.id];
            const aspect = slot.aspect === "portrait" ? "tw:aspect-[4/5]" : slot.aspect === "square" ? "tw:aspect-square" : "tw:aspect-[3/2]";
            const input = `layout-upload-${slot.id}`;
            return <div key={slot.id} className="tw:min-w-0 tw:space-y-2 tw:rounded-lg tw:bg-zinc-900 tw:p-3">
              <div className={`tw:flex tw:items-center tw:justify-center tw:overflow-hidden tw:rounded tw:border tw:border-dashed tw:border-zinc-600 ${aspect}`}>
                {value ? <img src={value} alt={content.values[slot.alt] || `Image placement ${index + 1}`} className="tw:h-full tw:w-full tw:object-cover" /> : <span className="tw:px-3 tw:text-center tw:text-sm tw:text-zinc-400">Image {index + 1}<br />{slot.kind === "poster" ? "Video poster" : `${slot.aspect} placement`}</span>}
              </div>
              <label htmlFor={input}>{section.label} — image {index + 1}{slot.kind === "poster" ? " (video poster)" : ""}</label>
              <input id={input} data-testid={`layout-upload-${slot.id}`} type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={event => { const file = event.target.files?.[0]; if (file) onUpload(file, slot.bindings); event.target.value = ""; }} />
              <p className="tw:mb-0 tw:text-xs tw:text-zinc-400">Original placement: {slot.width} × {slot.height}. Upload a similar ratio. Automatic WebP compression applies; the full-size lightbox uses the same uploaded image.</p>
              {slot.alt && <label>{section.label} — image {index + 1} description<input name={`layout.${slot.alt}`} maxLength={2000} value={content.values[slot.alt]} onChange={event => setValue(slot.alt, event.target.value)} /></label>}
              {value && <button type="button" onClick={() => onChange({ ...content, values: { ...content.values, ...Object.fromEntries(slot.bindings.map(id => [id, ""])) } })}>Clear image {index + 1}</button>}
            </div>;
          })}
        </div>}
        {videos.map((video, index) => <div key={index} className="tw:space-y-3 tw:rounded-lg tw:bg-zinc-900 tw:p-4">
          <h4 className="tw:mb-2">Video placement {index + 1}</h4>
          {video.sources.map(source => <label key={source.id}>{section.label} — {source.type === "video/webm" ? "WebM" : "MP4"} URL<input name={`layout.${source.id}`} maxLength={2048} value={content.values[source.id]} onChange={event => {
            const values = { ...content.values, [source.id]: event.target.value };
            if (video.link) values[video.link] = video.sources.map(item => values[item.id]).find(Boolean) || "";
            onChange({ ...content, values });
          }} /></label>)}
          <p className="tw:mb-0 tw:text-xs tw:text-zinc-400">Enter an HTTPS video URL or an existing /assets/vids/ path. At least one format and a poster are needed to publish this visible video placement. Video-file uploading is not supported.</p>
        </div>)}
        <div className="tw:grid tw:gap-4 tw:sm:grid-cols-2">{section.fields.map(field => <label key={field.id} className={field.type === "textarea" ? "tw:sm:col-span-2" : ""}>{section.label} — {field.label}
          {field.type === "textarea" ? <textarea name={`layout.${field.id}`} rows={4} maxLength={20000} value={content.values[field.id]} onChange={event => setValue(field.id, event.target.value)} /> : <input name={`layout.${field.id}`} maxLength={field.type === "text" ? 2000 : 2048} value={content.values[field.id]} onChange={event => setValue(field.id, event.target.value)} />}
        </label>)}</div>
      </fieldset>;
    })}
    {!!captions.length && <details className="tw:rounded-lg tw:border tw:border-solid tw:border-zinc-700 tw:p-4"><summary>Additional lightbox captions</summary><div className="tw:mt-4 tw:space-y-4">{captions.map((field, index) => <label key={field.id}>Lightbox caption {index + 1}<textarea name={`layout.${field.id}`} value={content.values[field.id]} maxLength={2000} rows={2} onChange={event => setValue(field.id, event.target.value)} /></label>)}</div></details>}
    <p className="tw:mb-0 tw:text-sm tw:text-zinc-400">Previous/next projects are connected automatically to published projects. Branding, navigation, and the footer stay managed in Website content.</p>
  </section>;
}
