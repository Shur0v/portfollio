import { expect, test, type BrowserContext } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import { Client } from "pg";
import sharp from "sharp";
import { blankProjectLayout, projectLayouts } from "../lib/project-layouts";
import seed from "../data/projects.seed.json";

const base = `/studio/${"a".repeat(64)}`;
const headers = { origin: "http://localhost:3100" };
let cookies: Awaited<ReturnType<BrowserContext["cookies"]>>;
let image: { name: string; mimeType: string; buffer: Buffer };

test.beforeAll(async ({ browser }) => {
  image = { name: "layout-photo.png", mimeType: "image/png", buffer: await sharp({ create: { width: 640, height: 800, channels: 4, background: { r: 45, g: 115, b: 180, alpha: 1 } } }).png().toBuffer() };
  const context = await browser.newContext();
  try {
    const page = await context.newPage();
    await page.goto(`http://localhost:3100${base}/login`);
    await page.getByLabel("Login ID").fill("test-admin");
    await page.getByLabel("Password").fill("test-only-password-2026");
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
    await expect(page).toHaveURL(`http://localhost:3100${base}`);
    cookies = await context.cookies();
  } finally { await context.close(); }
});

test.beforeEach(async ({ context }) => { await context.addCookies(cookies); });

for (const layout of projectLayouts) {
  test(`layout ${layout.template}: empty form, exact image slots, private preview, independent content and publishing`, async ({ page, request, context }) => {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (/hydration|hydrated|Minified React error #(?:418|423|425)/i.test(message.text())) errors.push(message.text()); });
    const title = `Layout ${layout.template} upload verification`;
    const slug = `layout-${layout.template}-upload-verification`;
    let id = "";
    try {
      await page.goto(base);
      await page.getByRole("button", { name: "+ New project" }).click();
      await page.getByLabel("Project layout", { exact: true }).selectOption(String(layout.template));
      const editor = page.getByRole("region", { name: `Layout ${layout.template} content`, exact: true });
      await expect(editor).toBeVisible();
      await expect(editor.locator('[data-testid^="layout-upload-"]')).toHaveCount(layout.slots.length);
      expect(await editor.locator('input:not([type="file"]):not([type="checkbox"]), textarea').evaluateAll(fields => fields.every(field => (field as HTMLInputElement).value === ""))).toBe(true);
      if (layout.template === 5) {
        await expect(editor.locator('[data-layout-section="section-2"] input[type="file"]')).toHaveCount(4);
        await expect(editor.locator('[data-layout-section="section-4"] input[type="file"]')).toHaveCount(4);
      }
      await page.getByLabel("Project title", { exact: true }).fill(title);
      await page.getByLabel("URL slug", { exact: false }).fill(slug);
      await page.getByLabel("Description", { exact: true }).fill(`Independent layout ${layout.template} project description.`);
      await page.getByLabel("Cover image", { exact: false }).setInputFiles(image);
      await expect(page.getByRole("img", { name: "Cover image", exact: true })).toBeVisible();
      await editor.getByTestId(`layout-upload-${layout.slots[0].id}`).setInputFiles(image);
      await expect(editor.getByTestId(`layout-upload-${layout.slots[0].id}`).locator("..").locator("img")).toHaveCount(1);
      await page.getByRole("button", { name: "Save project", exact: true }).click();
      await expect(page.getByRole("status")).toContainText("Draft saved");
      const databaseUrl = await readFile(path.join(process.env.PLAYWRIGHT_STORAGE_DIR!, "database-url"), "utf8");
      const database = new Client({ connectionString: databaseUrl });
      await database.connect();
      let project;
      try {
        project = (await database.query("SELECT payload FROM portfolio_projects WHERE slug = $1", [slug])).rows[0].payload;
      } finally { await database.end(); }
      id = project.id;
      expect(project.template).toBe(layout.template);
      expect(project.layoutContent.values[layout.slots[0].id]).toMatch(/^\/media\/.+\.webp$/);
      for (const binding of layout.slots[0].bindings) expect(project.layoutContent.values[binding]).toBe(project.layoutContent.values[layout.slots[0].id]);
      for (const slot of layout.slots.slice(1)) expect(project.layoutContent.values[slot.id]).toBe("");
      expect((await request.get(`/projects/${slug}`)).status()).toBe(404);
      const preview = await page.request.get(`${base}/preview/${id}`);
      expect(preview.status()).toBe(200);
      expect(await preview.text()).toContain(title);
      const unauthorized = await request.get(`${base}/preview/${id}`);
      expect(await unauthorized.text()).not.toContain(title);
      expect(unauthorized.url()).toContain("/login");
      if (layout.template === 5) {
        const opened = context.waitForEvent("page");
        await page.getByRole("button", { name: "Preview saved project ↗", exact: true }).click();
        const previewPage = await opened;
        try {
          await previewPage.waitForURL(`${base}/preview/${id}`);
          await expect(previewPage.locator(".ph-caption-title")).toHaveText(title);
          await previewPage.waitForFunction(() => document.querySelector<HTMLScriptElement>('script[src="/assets/js/theme.js"]')?.dataset.loaded === "true");
        } finally { await previewPage.close(); }
      }
      const incomplete = await page.request.put(`/api/projects/${id}`, { headers, data: { ...project, published: true } });
      expect(incomplete.status()).toBe(400);
      expect((await incomplete.json()).error).toContain("Complete the selected layout");

      for (const slot of layout.slots) {
        for (const binding of slot.bindings) project.layoutContent.values[binding] = project.image;
        if (slot.alt) project.layoutContent.values[slot.alt] = `Layout ${layout.template} placement ${slot.id}`;
      }
      for (const video of layout.videos) {
        for (const source of video.sources) project.layoutContent.values[source.id] = source.type === "video/webm" ? "/assets/vids/placeholder.webm" : "/assets/vids/placeholder.mp4";
        if (video.link) project.layoutContent.values[video.link] = "/assets/vids/placeholder.mp4";
      }
      const bodyField = layout.sections.flatMap(section => section.fields).find(field => field.type === "text")!;
      const marker = `UNIQUE_LAYOUT_${layout.template}_BODY_ONLY`;
      project.layoutContent.values[bodyField.id] = marker;
      const sharedBefore = await (await page.request.get(`/api/site-content/project-${layout.template}`)).json();
      const published = await page.request.put(`/api/projects/${id}`, { headers, data: { ...project, published: true } });
      expect(published.status(), JSON.stringify(await published.json())).toBe(200);
      const sharedAfter = await (await page.request.get(`/api/site-content/project-${layout.template}`)).json();
      expect(sharedAfter.record).toEqual(sharedBefore.record);
      if (layout.template === 5) {
        const sharedContent = structuredClone(sharedBefore.record.content);
        sharedContent.values["section-1-3"] = "Shared project client label";
        const changed = await page.request.put("/api/site-content/project-5", { headers, data: { version: sharedBefore.record.version, content: sharedContent } });
        expect(changed.status()).toBe(200);
        const current = (await changed.json()).record;
        try {
          const body = await (await request.get(`/projects/${slug}`)).text();
          expect(body).toContain("Shared project client label");
          expect(body).toContain(marker);
        } finally {
          expect((await page.request.put("/api/site-content/project-5", { headers, data: { version: current.version, content: sharedBefore.record.content } })).status()).toBe(200);
        }
      }
      await page.goto(`/projects/${slug}`);
      await expect(page.locator(".ph-caption-title")).toHaveText(title);
      await page.waitForFunction(() => document.querySelector<HTMLScriptElement>('script[src="/assets/js/theme.js"]')?.dataset.loaded === "true");
      await expect(page.getByText(marker, { exact: true }).first()).toHaveText(marker);
      expect(await page.locator(`#tt-page-content img[src="${project.image}"]`).count()).toBeGreaterThanOrEqual(layout.slots.filter(slot => slot.kind === "image").length);
      expect(await (await request.get("/")).text()).not.toContain(marker);

      if (layout.template === 5) {
        const otherContent = structuredClone(project.layoutContent);
        otherContent.values[bodyField.id] = "SECOND_LAYOUT_5_PRIVATE_BODY";
        const second = await page.request.post("/api/projects", { headers, data: { ...project, id: "", slug: "second-layout-five-instance", title: "Second independent layout five", layoutContent: otherContent, published: false } });
        expect(second.status()).toBe(201);
        const other = (await second.json()).project;
        try {
          const firstBody = await (await request.get(`/projects/${slug}`)).text();
          expect(firstBody).toContain(marker);
          expect(firstBody).not.toContain("SECOND_LAYOUT_5_PRIVATE_BODY");
          expect(await (await request.get("/")).text()).not.toContain("SECOND_LAYOUT_5_PRIVATE_BODY");
        } finally { await page.request.delete(`/api/projects/${other.id}`, { headers }); }
        const live = await context.newPage();
        try {
          await live.goto(`/projects/${slug}`);
          await expect(live.getByText(marker, { exact: true })).toHaveText(marker);
          const database = new Client({ connectionString: databaseUrl });
          await database.connect();
          try { await database.query("UPDATE portfolio_projects SET payload = jsonb_set(payload, ARRAY['layoutContent', 'values', $2::text], to_jsonb($3::text)) WHERE id = $1", [id, bodyField.id, "LAYOUT_5_DIRECT_SQL_CORRECTION"]); }
          finally { await database.end(); }
          await expect(live.getByText("LAYOUT_5_DIRECT_SQL_CORRECTION", { exact: true })).toHaveText("LAYOUT_5_DIRECT_SQL_CORRECTION", { timeout: 25000 });
        } finally { await live.close(); }
        const restarted = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "start", "--port", "3102"], { cwd: process.cwd(), windowsHide: true, env: { ...process.env, NODE_ENV: "production", DATABASE_URL: databaseUrl, PORTFOLIO_DATA_DIR: process.env.PLAYWRIGHT_STORAGE_DIR }, stdio: ["ignore", "pipe", "pipe"] });
        restarted.stdout.resume(); restarted.stderr.resume();
        try {
          await expect.poll(async () => { try { return (await request.get(`http://localhost:3102/projects/${slug}`)).status(); } catch { return 0; } }, { timeout: 30000 }).toBe(200);
          expect(await (await request.get(`http://localhost:3102/projects/${slug}`)).text()).toContain("LAYOUT_5_DIRECT_SQL_CORRECTION");
        } finally {
          if (restarted.exitCode === null) {
            const exited = new Promise(resolve => restarted.once("exit", resolve));
            restarted.kill();
            await exited;
          }
        }
      }
      expect(errors).toEqual([]);
    } finally {
      if (id) {
        await page.goto("about:blank");
        await page.request.delete(`/api/projects/${id}`, { headers });
      }
    }
  });
}

test("layout switching requires confirmation, preserves common details and clears only layout-specific fields", async ({ page }) => {
  await page.goto(base);
  await page.getByRole("button", { name: "+ New project" }).click();
  await page.getByLabel("Project layout", { exact: true }).selectOption("5");
  await page.getByLabel("Project title", { exact: true }).fill("Keep my common details");
  const field = projectLayouts.find(layout => layout.template === 5)!.sections[0].fields[0];
  await page.locator(`[name="layout.${field.id}"]`).fill("Unsaved layout five heading");
  page.once("dialog", dialog => dialog.dismiss());
  await page.getByLabel("Project layout", { exact: true }).selectOption("6");
  await expect(page.getByLabel("Project layout", { exact: true })).toHaveValue("5");
  await expect(page.locator(`[name="layout.${field.id}"]`)).toHaveValue("Unsaved layout five heading");
  page.once("dialog", dialog => dialog.accept());
  await page.getByLabel("Project layout", { exact: true }).selectOption("6");
  await expect(page.getByLabel("Project layout", { exact: true })).toHaveValue("6");
  await expect(page.getByLabel("Project title", { exact: true })).toHaveValue("Keep my common details");
  const editor = page.getByRole("region", { name: "Layout 6 content", exact: true });
  expect(await editor.locator('input:not([type="file"]):not([type="checkbox"]), textarea').evaluateAll(fields => fields.every(field => (field as HTMLInputElement).value === ""))).toBe(true);
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
    await page.screenshot({ path: `test-results/project-layout-editor-${width}.png`, fullPage: true });
  }
});

test("layout validation rejects unsafe fields and invalid layouts and permits intentionally hidden optional media", async ({ page }) => {
  const content = blankProjectLayout(5);
  const candidate = { ...seed[4], id: "", title: "Hidden optional sections", slug: "hidden-optional-layout-sections", gallery: [], layoutContent: content, published: false };
  for (const template of [-1, 10, 2.5, "5", null]) {
    expect((await page.request.post("/api/projects", { headers, data: { ...candidate, template } })).status()).toBe(400);
  }
  const unsafe = structuredClone(candidate);
  unsafe.layoutContent.values[projectLayouts[4].slots[0].id] = "javascript:alert(1)";
  expect((await page.request.post("/api/projects", { headers, data: unsafe })).status()).toBe(400);
  const unexpected = structuredClone(candidate);
  unexpected.layoutContent.values["unknown-field"] = "unexpected";
  expect((await page.request.post("/api/projects", { headers, data: unexpected })).status()).toBe(400);
  const hidden = structuredClone(candidate);
  hidden.published = true;
  hidden.layoutContent.hiddenSections = ["section-2", "section-4"];
  const response = await page.request.post("/api/projects", { headers, data: hidden });
  expect(response.status()).toBe(201);
  const { project } = await response.json();
  try {
    const publicPage = await page.request.get(`/projects/${project.slug}`);
    expect(publicPage.status()).toBe(200);
    expect(await publicPage.text()).not.toContain("Our vision was to redefine eyewear photography");
  } finally { await page.request.delete(`/api/projects/${project.id}`, { headers }); }
});

test("layout 5 uploads both four-image rows, publishes and edits through the dashboard form", async ({ page }) => {
  const layout = projectLayouts[4];
  const title = "Complete layout five dashboard upload";
  const slug = "complete-layout-five-dashboard-upload";
  let id = "";
  try {
    await page.goto(base);
    await page.getByRole("button", { name: "+ New project" }).click();
    await page.getByLabel("Project layout", { exact: true }).selectOption("5");
    await page.getByLabel("Project title", { exact: true }).fill(title);
    await page.getByLabel("URL slug", { exact: false }).fill(slug);
    await page.getByLabel("Cover image", { exact: false }).setInputFiles(image);
    await expect(page.getByRole("img", { name: "Cover image", exact: true })).toBeVisible();
    const placements: string[] = [];
    for (const slot of layout.slots) {
      const upload = page.getByTestId(`layout-upload-${slot.id}`);
      await upload.setInputFiles(image);
      const preview = upload.locator("..").locator("img");
      await expect(preview).toHaveCount(1);
      placements.push((await preview.getAttribute("src"))!);
      if (slot.alt) await page.locator(`[name="layout.${slot.alt}"]`).fill(`Uploaded placement ${placements.length}`);
    }
    expect(new Set(placements).size).toBe(8);
    await expect(page.getByLabel("Credits — Credit 1 name", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Credits — Credit 1 role", { exact: true })).toBeVisible();
    for (const width of [1440, 768, 390]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
      await page.locator('[data-layout-section="section-2"]').screenshot({ path: `test-results/layout-five-upload-row-${width}.png` });
    }
    const heading = layout.sections[0].fields[0];
    await page.locator(`[name="layout.${heading.id}"]`).fill("Dashboard-only project heading");
    await page.getByLabel("Published — visible on the portfolio", { exact: true }).check();
    await page.getByRole("button", { name: "Save project", exact: true }).click();
    await expect(page.getByRole("status")).toContainText("Project saved and published");
    const databaseUrl = await readFile(path.join(process.env.PLAYWRIGHT_STORAGE_DIR!, "database-url"), "utf8");
    const database = new Client({ connectionString: databaseUrl });
    await database.connect();
    try {
      const project = (await database.query("SELECT payload FROM portfolio_projects WHERE slug = $1", [slug])).rows[0].payload;
      id = project.id;
      for (const [index, slot] of layout.slots.entries()) for (const binding of slot.bindings) expect(project.layoutContent.values[binding]).toBe(placements[index]);
    } finally { await database.end(); }
    await page.getByRole("button", { name: `${title} Digital · Published`, exact: true }).click();
    for (const [index, slot] of layout.slots.entries()) await expect(page.getByTestId(`layout-upload-${slot.id}`).locator("..").locator("img")).toHaveAttribute("src", placements[index]);
    await page.locator(`[name="layout.${heading.id}"]`).fill("Edited existing layout five heading");
    await page.getByRole("button", { name: "Save project", exact: true }).click();
    await expect(page.getByRole("status")).toContainText("Project saved and published");
    await page.goto(`/projects/${slug}`);
    await expect(page.getByText("Edited existing layout five heading", { exact: true })).toHaveText("Edited existing layout five heading");
    for (const placement of placements) {
      await expect(page.locator(`#tt-page-content img[src="${placement}"]`)).toHaveCount(1);
      await expect(page.locator(`#tt-page-content a[href="${placement}"]`)).toHaveCount(1);
    }
  } finally {
    await page.goto("about:blank");
    if (id) await page.request.delete(`/api/projects/${id}`, { headers });
  }
});
