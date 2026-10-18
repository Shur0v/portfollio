"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { SiteDefinition, SiteField, SiteItem, SitePageRecord } from "../../lib/site-content-types";

function move<T>(items: T[], index: number, direction: number) {
  const next = [...items];
  const destination = index + direction;
  if (destination < 0 || destination >= next.length) return next;
  [next[index], next[destination]] = [next[destination], next[index]];
  return next;
}

export function SiteContentDashboard({ definitions, initialRecords, basePath, previewLinks }: { definitions: SiteDefinition[]; initialRecords: Record<string, SitePageRecord>; basePath: string; previewLinks: Record<string, string> }) {
  const [records, setRecords] = useState(initialRecords);
  const [pageId, setPageId] = useState("home");
  const [draft, setDraft] = useState(() => structuredClone(initialRecords.home));
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");
  const definition = definitions.find(page => page.id === pageId)!;

  useEffect(() => {
    const warn = (event: BeforeUnloadEvent) => { if (dirty) { event.preventDefault(); event.returnValue = ""; } };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function edit(update: (record: SitePageRecord) => SitePageRecord) { setDraft(update); setDirty(true); setMessage(""); }
  function select(id: string) {
    if (dirty && !window.confirm("Discard your unsaved section changes?")) return;
    setPageId(id); setDraft(structuredClone(records[id])); setDirty(false); setMessage(""); setError(""); setFilter("");
  }
  function changeField(id: string, value: string) {
    edit(current => ({ ...current, content: { ...current.content, values: { ...current.content.values, [id]: value } } }));
  }
  function changeItem(collectionId: string, itemId: string, fieldId: string, value: string) {
    edit(current => ({ ...current, content: { ...current.content, collections: { ...current.content.collections,
      [collectionId]: current.content.collections[collectionId].map(item => item.id === itemId ? { ...item, values: { ...item.values, [fieldId]: value } } : item),
    } } }));
  }
  function setItems(collectionId: string, items: SiteItem[]) {
    edit(current => ({ ...current, content: { ...current.content, collections: { ...current.content.collections, [collectionId]: items } } }));
  }
  async function upload(file: File | undefined, onChange: (value: string) => void) {
    if (!file) return;
    setBusy(true); setError(""); setMessage("");
    try {
      const form = new FormData(); form.set("file", file);
      const response = await fetch("/api/uploads", { method: "POST", body: form });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Upload failed.");
      onChange(result.url);
      setMessage(`Image ready: ${(result.originalBytes / 1024).toFixed(1)} KB original → ${(result.bytes / 1024).toFixed(1)} KB WebP. Save this page to publish it.`);
    } catch (error) { setError(error instanceof Error ? error.message : "Upload failed."); }
    finally { setBusy(false); }
  }
  async function save(event: FormEvent) {
    event.preventDefault(); setBusy(true); setMessage(""); setError("");
    try {
      const response = await fetch(`/api/site-content/${pageId}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ content: draft.content, version: draft.version }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to save page.");
      setDraft(result.record); setRecords(current => ({ ...current, [pageId]: result.record })); setDirty(false);
      setMessage("Saved to PostgreSQL. Open public pages receive the update immediately over the live connection. Active contact forms wait until it is safe to refresh.");
    } catch (error) { setError(error instanceof Error ? error.message : "Save failed."); }
    finally { setBusy(false); }
  }
  async function reload() {
    if (dirty && !window.confirm("Discard your unsaved changes and load the latest saved page?")) return;
    setBusy(true); setError("");
    try {
      const response = await fetch(`/api/site-content/${pageId}`, { cache: "no-store" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to reload.");
      setDraft(result.record); setRecords(current => ({ ...current, [pageId]: result.record })); setDirty(false); setMessage("Loaded the latest saved version.");
    } catch (error) { setError(error instanceof Error ? error.message : "Reload failed."); }
    finally { setBusy(false); }
  }
  function fieldEditor(field: SiteField, value: string, onChange: (value: string) => void, prefix: string) {
    const id = `${prefix}-${field.id}`;
    return <div key={field.id} className="tw:min-w-0 tw:space-y-2">
      <label htmlFor={id}>{field.label}</label>
      {field.type === "textarea" ? <textarea id={id} rows={4} maxLength={20000} value={value} onChange={event => onChange(event.target.value)} /> :
        field.type === "choice" ? <select id={id} value={value} onChange={event => onChange(event.target.value)}>{field.choices?.map(choice => <option key={choice} value={choice}>{choice}</option>)}</select> :
          <input id={id} type="text" maxLength={field.type === "text" ? 2000 : 2048} value={value} onChange={event => onChange(event.target.value)} />}
      {field.type === "image" && <>
        {value && <img src={value} alt="Current image preview" className="tw:mt-2 tw:max-h-36 tw:max-w-full tw:rounded tw:object-contain" />}
        <label htmlFor={`${id}-upload`}>Replace image<input id={`${id}-upload`} type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={event => { void upload(event.target.files?.[0], onChange); event.target.value = ""; }} /></label>
        <p className="tw:text-xs tw:text-zinc-400">Automatically resized, stripped of metadata, and compressed to WebP. Maximum input 10 MB; maximum output 2 MB.</p>
      </>}
      {field.type === "video" && <p className="tw:text-xs tw:text-zinc-400">Use an existing /assets/ video path. Image uploads do not transcode video.</p>}
    </div>;
  }
  const matches = (field: SiteField, value: string) => !filter || `${field.label} ${value}`.toLowerCase().includes(filter.toLowerCase());

  return <>
    <header className="tw:mb-8 tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-4">
      <div><p className="tw:text-sm tw:text-lime-300">SHUROV / CONTENT STUDIO</p><h1 className="tw:text-3xl">Website content</h1><p className="tw:text-zinc-400">Edit every existing text and image without changing the original layout.</p></div>
      <nav className="tw:flex tw:flex-wrap tw:gap-3"><a className="button" href={basePath}>Projects</a><a className="button" href={`${basePath}/messages`}>Inbox</a><a className="button" href={previewLinks[pageId] || "/"} target="_blank" rel="noreferrer">Preview ↗</a></nav>
    </header>
    <div className="tw:grid tw:gap-8 tw:lg:grid-cols-[260px_minmax(0,1fr)]">
      <aside className="tw:space-y-3"><label>Content page<select value={pageId} disabled={busy} onChange={event => select(event.target.value)}>{definitions.map(page => <option key={page.id} value={page.id}>{page.label}</option>)}</select></label>
        <label>Find a field<input type="search" value={filter} onChange={event => setFilter(event.target.value)} /></label>
        <p className="tw:text-sm tw:text-zinc-400">Global branding, navigation and footer changes apply to every template using that field. Project titles and client details remain in Projects.</p>
        <button type="button" disabled={busy} onClick={() => void reload()}>Reload saved content</button>
      </aside>
      <form onSubmit={save} className="tw:min-w-0 tw:space-y-5">
        <div className="tw:sticky tw:top-0 tw:z-10 tw:flex tw:flex-wrap tw:items-center tw:gap-4 tw:rounded-lg tw:bg-zinc-900 tw:p-4"><button type="submit" disabled={busy || !dirty}>{busy ? "Working…" : "Save website content"}</button><span className="tw:text-sm tw:text-zinc-400">{dirty ? "Unsaved changes" : `Saved version ${draft.version}`}</span></div>
        {error && <p role="alert" className="tw:rounded-lg tw:bg-red-950 tw:p-4 tw:text-red-200">{error}</p>}
        {message && <p role="status" className="tw:rounded-lg tw:bg-green-950 tw:p-4 tw:text-green-200">{message}</p>}
        <fieldset disabled={busy} className="tw:m-0 tw:min-w-0 tw:space-y-5 tw:border-0 tw:p-0">
          {!!draft.content.sectionOrder.length && <details className="tw:rounded-xl tw:border tw:border-solid tw:border-zinc-700 tw:p-5"><summary className="tw:cursor-pointer">Section visibility & ordering</summary><div className="tw:mt-5 tw:space-y-3">{draft.content.sectionOrder.map((id, index) => <div key={id} className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-3"><label><input type="checkbox" checked={!draft.content.hiddenSections.includes(id)} onChange={event => edit(current => ({ ...current, content: { ...current.content, hiddenSections: event.target.checked ? current.content.hiddenSections.filter(section => section !== id) : [...current.content.hiddenSections, id] } }))} /> {definition.sections.find(section => section.id === id)?.label || id}</label><div className="tw:flex tw:gap-2"><button type="button" disabled={index === 0} aria-label={`Move ${id} section up`} onClick={() => edit(current => ({ ...current, content: { ...current.content, sectionOrder: move(current.content.sectionOrder, index, -1) } }))}>↑</button><button type="button" disabled={index === draft.content.sectionOrder.length - 1} aria-label={`Move ${id} section down`} onClick={() => edit(current => ({ ...current, content: { ...current.content, sectionOrder: move(current.content.sectionOrder, index, 1) } }))}>↓</button></div></div>)}</div></details>}
          {definition.sections.map(section => {
            const fields = section.fields.filter(field => matches(field, draft.content.values[field.id]));
            const collections = definition.collections.filter(collection => collection.section === section.id);
            if (!fields.length && !collections.length) return null;
            return <details key={`${pageId}-${section.id}`} open={filter ? true : undefined} className="tw:rounded-xl tw:border tw:border-solid tw:border-zinc-700 tw:p-5"><summary className="tw:cursor-pointer tw:font-semibold">{section.label}</summary>
              <div className="tw:mt-6 tw:space-y-6">{fields.map(field => fieldEditor(field, draft.content.values[field.id], value => changeField(field.id, value), pageId))}
                {collections.map(collection => {
                  const items = draft.content.collections[collection.id];
                  return <section key={collection.id} className="tw:space-y-4"><h2 className="tw:text-xl">{collection.label} items ({items.length})</h2>{items.map((item, index) => {
                    const template = collection.templates.find(template => template.id === item.template)!;
                    const visibleFields = template.fields.filter(field => matches(field, item.values[field.id]));
                    if (filter && !visibleFields.length) return null;
                    return <details key={item.id} open={filter ? true : undefined} className="tw:rounded-lg tw:border tw:border-solid tw:border-zinc-800 tw:p-4"><summary className="tw:cursor-pointer">Item {index + 1}: {Object.values(item.values).find(value => value && !value.startsWith("/") && !value.startsWith("http"))?.trim().slice(0, 70) || "Media"}</summary><div className="tw:mt-4 tw:space-y-5">{visibleFields.map(field => fieldEditor(field, item.values[field.id], value => changeItem(collection.id, item.id, field.id, value), `${pageId}-${item.id}`))}
                      <div className="tw:flex tw:flex-wrap tw:gap-2"><button type="button" disabled={index === 0} onClick={() => setItems(collection.id, move(items, index, -1))}>Move up</button><button type="button" disabled={index === items.length - 1} onClick={() => setItems(collection.id, move(items, index, 1))}>Move down</button><button type="button" disabled={items.length >= 60} onClick={() => setItems(collection.id, [...items.slice(0, index + 1), { ...structuredClone(item), id: crypto.randomUUID() }, ...items.slice(index + 1)])}>Duplicate item</button><button type="button" onClick={() => { if (window.confirm("Remove this item? It disappears after you save.")) setItems(collection.id, items.filter(current => current.id !== item.id)); }}>Remove item</button></div>
                    </div></details>;
                  })}<div className="tw:flex tw:flex-wrap tw:gap-2">{collection.templates.map(template => <button key={template.id} type="button" disabled={items.length >= 60} onClick={() => setItems(collection.id, [...items, { id: crypto.randomUUID(), template: template.id, values: Object.fromEntries(template.fields.map(field => [field.id, field.value])) }])}>+ Add item{collection.templates.length > 1 ? ` (${template.label})` : ""}</button>)}</div></section>;
                })}
              </div>
            </details>;
          })}
        </fieldset>
      </form>
    </div>
  </>;
}
