"use client";

import { useState, type FormEvent } from "react";
import type { Project } from "../../lib/project-types";

const emptyProject = (): Project => ({ id: "", slug: "", title: "", category: "Digital", image: "", heroImage: "", description: "", client: "", year: String(new Date().getFullYear()), role: "", website: "", portrait: false, published: false, order: 10, template: 0, video: [], gallery: [] });

export function ProjectDashboard({ initialProjects, basePath }: { initialProjects: Project[]; basePath: string }) {
  const [projects, setProjects] = useState(initialProjects);
  const [draft, setDraft] = useState<Project | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");
  const [dirty, setDirty] = useState(false);

  function change<K extends keyof Project>(key: K, value: Project[K]) {
    setDirty(true);
    setDraft(current => current && { ...current, [key]: value });
  }

  function select(project: Project | null) {
    if (dirty && !window.confirm("Discard your unsaved changes?")) return;
    setDraft(project ? { ...project, gallery: project.gallery || [] } : null);
    setDirty(false);
    setError("");
    setMessage("");
  }

  async function save(event: FormEvent) {
    event.preventDefault();
    if (!draft) return;
    setBusy(true); setError(""); setMessage("");
    try {
      const response = await fetch(draft.id ? `/api/projects/${draft.id}` : "/api/projects", { method: draft.id ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(draft) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setProjects(current => [...current.filter(project => project.id !== result.project.id), result.project].sort((left, right) => left.order - right.order));
      setDraft(result.project); setDirty(false);
      setMessage(result.project.published ? "Project saved and published. Connected portfolio pages receive the update immediately." : "Draft saved. It is hidden from the portfolio.");
    } catch (error) { setError(error instanceof Error ? error.message : "Save failed."); }
    finally { setBusy(false); }
  }

  async function upload(files: FileList | null, target: "image" | "heroImage" | "gallery") {
    if (!files?.length) return;
    if (target === "gallery" && files.length + (draft?.gallery?.length || 0) > 20) {
      setError("A project can have up to 20 gallery images.");
      return;
    }
    setBusy(true); setError("");
    try {
      const uploaded: string[] = [];
      for (const file of Array.from(files)) {
        const form = new FormData(); form.set("file", file);
        const response = await fetch("/api/uploads", { method: "POST", body: form });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error);
        uploaded.push(result.url);
      }
      if (target === "gallery") change("gallery", [...(draft?.gallery || []), ...uploaded]);
      else change(target, uploaded[0]);
    } catch (error) { setError(error instanceof Error ? error.message : "Upload failed."); }
    finally { setBusy(false); }
  }

  async function remove(project: Project) {
    if (!window.confirm(`Delete “${project.title}”? This removes it from your portfolio.`)) return;
    setBusy(true); setError("");
    try {
      const response = await fetch(`/api/projects/${project.id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Unable to delete. Please sign in again.");
      setProjects(current => current.filter(item => item.id !== project.id));
      setDraft(null); setDirty(false); setMessage("Project deleted.");
    } catch (error) { setError(error instanceof Error ? error.message : "Delete failed."); }
    finally { setBusy(false); }
  }

  async function logout() {
    if (dirty && !window.confirm("Sign out and discard your unsaved changes?")) return;
    await fetch(`${basePath}/session`, { method: "DELETE" });
    window.location.assign(`${basePath}/login`);
  }

  return <>
    <header className="tw:mb-8 tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-4">
      <div><p className="tw:text-lime-300 tw:text-sm">SHUROV / CONTENT STUDIO</p><h1 className="tw:mb-2 tw:text-3xl">Projects</h1><p className="tw:text-zinc-400">{projects.filter(project => project.published).length} published · {projects.filter(project => !project.published).length} drafts</p></div>
      <div className="tw:flex tw:gap-3"><a className="button" href="/" target="_blank" rel="noreferrer">View portfolio ↗</a><button onClick={logout}>Sign out</button></div>
    </header>
    <div className="tw:grid tw:gap-8 tw:lg:grid-cols-[300px_1fr]">
      <aside>
        <a className="button tw:mb-4 tw:w-full" href={`${basePath}/content`}>Edit website sections</a>
        <button className="tw:w-full tw:mb-4" disabled={busy} onClick={() => select(emptyProject())}>+ New project</button>
        <label>Search projects<input type="search" value={filter} onChange={event => setFilter(event.target.value)} /></label>
        <div className="tw:mt-4 tw:space-y-3">
          {projects.filter(project => project.title.toLowerCase().includes(filter.toLowerCase())).map(project => <button key={project.id} disabled={busy} className="tw:w-full tw:text-left" aria-pressed={draft?.id === project.id} onClick={() => select(project)}>
            <span className="tw:flex tw:items-center tw:gap-3"><img src={project.image} alt="" className="tw:h-12 tw:w-12 tw:rounded tw:object-cover" /><span><strong className="tw:block">{project.title}</strong><span className="tw:text-xs tw:text-zinc-400">{project.category} · {project.published ? "Published" : "Draft"}</span></span></span>
          </button>)}
        </div>
        <a className="button tw:mt-6" href={`${basePath}/messages`}>Contact messages</a>
      </aside>
      <section>
        {error && <p role="alert" className="tw:rounded-lg tw:bg-red-950 tw:p-4 tw:text-red-200">{error}</p>}
        {message && <p role="status" className="tw:rounded-lg tw:bg-green-950 tw:p-4 tw:text-green-200">{message}</p>}
        {!draft ? <div className="tw:rounded-xl tw:border tw:border-solid tw:border-zinc-700 tw:p-8"><h2>Your portfolio, managed here</h2><p>Select a project to edit it, or create a new one. Published projects appear in the existing portfolio grid.</p></div> :
          <form onSubmit={save} className="tw:space-y-6">
            <h2>{draft.id ? "Edit project" : "New project"}</h2>
            <fieldset disabled={busy} className="tw:m-0 tw:space-y-6 tw:border-0 tw:p-0">
              <div className="tw:grid tw:gap-5 tw:sm:grid-cols-2">
                <label>Project title<input required maxLength={120} value={draft.title} onChange={event => { const value = event.target.value; const currentSlug = draft.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); change("title", value); if (!draft.id && (!draft.slug || draft.slug === currentSlug)) change("slug", value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")); }} /></label>
                <label>URL slug<input required pattern="[a-z0-9]+(-[a-z0-9]+)*" maxLength={80} value={draft.slug} onChange={event => change("slug", event.target.value)} /><span className="tw:text-xs tw:text-zinc-400">/projects/{draft.slug || "your-project"}</span></label>
                <label>Category<select value={draft.category} onChange={event => change("category", event.target.value)}>{["Branding", "Digital", "Artistic"].map(category => <option key={category}>{category}</option>)}</select></label>
                <label>Display order<input type="number" min={0} max={10000} required value={draft.order} onChange={event => change("order", Number(event.target.value))} /></label>
              </div>
              <label>Description<textarea rows={6} maxLength={10000} value={draft.description} onChange={event => change("description", event.target.value)} /></label>
              <div className="tw:grid tw:gap-5 tw:sm:grid-cols-2">
                {([['client', 'Client'], ['year', 'Year'], ['role', 'Your role'], ['website', 'Website URL']] as const).map(([field, label]) => <label key={field}>{label}<input type={field === "website" ? "url" : "text"} value={draft[field]} onChange={event => change(field, event.target.value)} /></label>)}
              </div>
              <div className="tw:grid tw:gap-5 tw:sm:grid-cols-2">
                {([['image', 'Cover image'], ['heroImage', 'Hero image (optional)']] as const).map(([field, label]) => <label key={field}>{label}{draft[field] && <img src={draft[field]} alt={label} className="tw:mt-3 tw:h-40 tw:w-full tw:rounded-lg tw:object-cover" />}<input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={event => { void upload(event.target.files, field); event.target.value = ""; }} /><span className="tw:text-xs tw:text-zinc-400">JPG, PNG, WebP or GIF · up to 10 MB input · compressed to WebP (max 2 MB)</span></label>)}
              </div>
              <label>Gallery images (up to 20)<input type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple onChange={event => { void upload(event.target.files, "gallery"); event.target.value = ""; }} /></label>
              <div className="tw:grid tw:gap-5 tw:sm:grid-cols-2">{(["video/mp4", "video/webm"] as const).map(type => <label key={type}>{type === "video/mp4" ? "MP4 video URL (optional)" : "WebM video URL (optional)"}<input value={draft.video.find(source => source.type === type)?.src || ""} onChange={event => change("video", [...draft.video.filter(source => source.type !== type), ...(event.target.value ? [{ type, src: event.target.value }] : [])])} /><span className="tw:text-xs tw:text-zinc-400">Existing /assets/vids/ path or HTTPS URL. Leave both empty to use an image cover.</span></label>)}</div>
              <div className="tw:grid tw:grid-cols-2 tw:gap-3 tw:sm:grid-cols-3">{draft.gallery?.map((image, index) => <div key={image + index}><img src={image} alt={`Gallery ${index + 1}`} className="tw:h-24 tw:w-full tw:object-cover" /><button type="button" onClick={() => change("gallery", draft.gallery!.filter((_, position) => index !== position))}>Remove image {index + 1}</button></div>)}</div>
              {draft.template > 0 && <p className="tw:text-sm tw:text-zinc-400">The original case-study layout and media are preserved. Added gallery images appear below its existing content.</p>}
              <label><input type="checkbox" checked={draft.portrait} onChange={event => change("portrait", event.target.checked)} /> Portrait cover layout</label>
              <label><input type="checkbox" checked={!!draft.repeatInGrid} onChange={event => change("repeatInGrid", event.target.checked)} /> Repeat card later in the grid (original layout)</label>
              <div className="tw:space-y-2"><p>Additional filters</p>{["Branding", "Digital", "Artistic"].filter(category => category !== draft.category).map(category => <label key={category}><input type="checkbox" checked={draft.additionalCategories?.includes(category) || false} onChange={event => change("additionalCategories", event.target.checked ? [...(draft.additionalCategories || []), category] : (draft.additionalCategories || []).filter(value => value !== category))} /> {category}</label>)}</div>
              <label><input type="checkbox" checked={draft.published} onChange={event => change("published", event.target.checked)} /> Published — visible on the portfolio</label>
              <div className="tw:flex tw:flex-wrap tw:gap-3">
                <button type="submit">{busy ? "Saving…" : "Save project"}</button>
                {draft.id && draft.published && <a className="button" target="_blank" rel="noreferrer" href={`/projects/${draft.slug}`}>View project ↗</a>}
                {draft.id && <button type="button" onClick={() => remove(draft)}>Delete project</button>}
              </div>
            </fieldset>
          </form>}
      </section>
    </div>
  </>;
}
