import { expect, test, type Locator, type Page } from "@playwright/test";
import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { Client } from "pg";
import sharp from "sharp";
import seed from "../data/projects.seed.json";

const testImage = { name: "cover.png", mimeType: "image/png", buffer: Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aD1sAAAAASUVORK5CYII=", "base64") };

const adminBase = `/studio/${"a".repeat(64)}`;
const adminLogin = `${adminBase}/login`;
const adminMessages = `${adminBase}/messages`;

test.beforeAll(async () => { testImage.buffer = await sharp({ create: { width: 64, height: 64, channels: 4, background: { r: 40, g: 100, b: 180, alpha: 1 } } }).png().toBuffer(); });

const pageErrors = new WeakMap<Page, string[]>();

async function clickAfterScrolling(page: Page, locator: Locator) {
  await expect.poll(async () => {
    const before = await locator.boundingBox();
    const viewport = page.viewportSize();
    if (!before || !viewport) return false;
    if (before.y < 0 || before.y + before.height > viewport.height) {
      await page.mouse.wheel(0, before.y + before.height / 2 - viewport.height / 2);
      await page.waitForTimeout(500);
      return false;
    }
    await page.waitForTimeout(250);
    const after = await locator.boundingBox();
    if (!before || !after || Math.abs(before.y - after.y) > 1) return false;
    return locator.evaluate(element => {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= innerHeight && element.contains(document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2));
    });
  }, { timeout: 15000, message: "Smooth scrolling must settle before clicking" }).toBe(true);
  await locator.click();
}

test.beforeEach(({ page }) => {
  const errors: string[] = [];
  pageErrors.set(page, errors);
  page.on("pageerror", error => errors.push(`${page.url()} (${page.viewportSize()?.width}px): ${error.message}`));
});

test.afterEach(({ page }) => {
  expect(pageErrors.get(page)).toEqual([]);
});

test("portfolio keeps desktop and mobile geometry and runs animations", async ({ page, context }) => {
  await page.goto("/privacy");
  for (const width of [1440, 768, 390]) {
   for (const theme of ["disabled", "enabled"]) {
    await page.setViewportSize({ width, height: 900 });
    const reference = await context.newPage();
    await reference.setViewportSize({ width, height: 900 });
    await reference.addInitScript(value => localStorage.setItem("tt-dark-mode-on", value), theme);
    await page.evaluate(value => localStorage.setItem("tt-dark-mode-on", value), theme);
    await reference.goto("http://127.0.0.1:3101/");
    await page.goto("/");
    await page.waitForFunction(() => document.querySelector<HTMLScriptElement>('script[src="/assets/js/theme.js"]')?.dataset.loaded === "true");
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(5500);
    await reference.evaluate(() => document.fonts.ready);
    const selectors = ["#page-header", ".ph-caption-title", "#portfolio", ".tt-grid-filter", "#services", "#about", "#faq", "#contact", "#tt-footer"];
    for (const selector of selectors) {
      const measure = (element: Element) => {
        const style = getComputedStyle(element);
        return { width: element.getBoundingClientRect().width, height: element.getBoundingClientRect().height, font: style.fontFamily, size: style.fontSize, color: style.color, padding: style.padding };
      };
      const expected = await reference.locator(selector).first().evaluate(measure);
      const actual = await page.locator(selector).first().evaluate(measure);
      expect(actual.font, `${width}: ${selector} font`).toEqual(expected.font);
      expect(actual.size, `${width}: ${selector} font size`).toEqual(expected.size);
      expect(actual.color, `${width}: ${selector} color`).toEqual(expected.color);
      expect(actual.padding, `${width}: ${selector} padding`).toEqual(expected.padding);
      expect(Math.abs(actual.width - expected.width), `${width}: ${selector} width`).toBeLessThan(2);
      expect(Math.abs(actual.height - expected.height), `${width}: ${selector} height`).toBeLessThan(2);
    }
    expect(await page.locator('.tt-grid-item').count()).toBe(await reference.locator('.tt-grid-item').count());
    await page.screenshot({ path: `test-results/portfolio-${width}-${theme}.png` });
    await reference.screenshot({ path: `test-results/reference-${width}-${theme}.png` });
    for (const section of ["portfolio", "about", "contact"]) {
      await page.evaluate(value => document.querySelector<HTMLAnchorElement>(`a[href="#${value}"]`)?.click(), section);
      await reference.evaluate(value => document.querySelector<HTMLAnchorElement>(`a[href="#${value}"]`)?.click(), section);
      await page.waitForTimeout(2000);
      await page.screenshot({ path: `test-results/section-${section}-${width}-${theme}.png` });
      await reference.screenshot({ path: `test-results/reference-section-${section}-${width}-${theme}.png` });
    }
    await reference.close();
   }
  }
});

test("filters, Load More, mobile menu, theme persistence and project transitions", async ({ page }) => {
  await page.goto("/");
  await page.waitForFunction(() => document.querySelector<HTMLScriptElement>('script[src="/assets/js/theme.js"]')?.dataset.loaded === "true");
  await expect(page.locator(".tt-grid-item:visible")).toHaveCount(8);
  await clickAfterScrolling(page, page.locator(".tt-grlm-btn"));
  await expect(page.locator(".tt-grid-item:visible")).toHaveCount(16);
  await clickAfterScrolling(page, page.locator(".tt-grid-filter button[data-filter='.branding']"));
  await expect(page.locator(".tt-grid-item:visible:not(.branding)")).toHaveCount(0);
  await expect(page.locator(".tt-grid-item.branding:visible")).toHaveCount(6);
  await clickAfterScrolling(page, page.locator(".tt-grid-filter button").first());
  await expect(page.locator(".tt-grid-item:visible")).toHaveCount(16);
  await clickAfterScrolling(page, page.locator(".tt-grlm-btn"));
  await expect(page.locator(".tt-grid-item:visible")).toHaveCount(17);
  await expect(page.locator(".tt-grlm-btn")).not.toBeVisible();
  const videoCard = page.locator(".tt-pgi-video").first();
  await videoCard.dispatchEvent("mouseover");
  await videoCard.dispatchEvent("mouseout");
  await page.waitForTimeout(250);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await clickAfterScrolling(page, page.locator(".tt-m-menu-toggle-btn"));
  await expect(page.locator("body")).toHaveClass(/tt-m-menu-open/);
  await expect(page.locator("body")).not.toHaveClass(/tt-m-menu-toggle-no-click/);
  await clickAfterScrolling(page, page.locator(".tt-main-menu-list a[href='#about']"));
  await expect(page.locator("body")).not.toHaveClass(/tt-m-menu-open/);
  await page.evaluate(() => window.scrollTo(0, 0));
  await clickAfterScrolling(page, page.locator(".tt-style-switch"));
  await expect(page.locator("body")).toHaveClass(/tt-dark-mode-on/);
  await page.reload();
  await expect(page.locator("body")).toHaveClass(/tt-dark-mode-on/);
  await clickAfterScrolling(page, page.locator(".tt-pgi-title a").first());
  await expect(page).toHaveURL(/\/projects\/project-1$/);
  await expect(page.locator(".ph-caption-title")).toHaveText("Aero Dog");
  await page.waitForFunction(() => document.querySelector<HTMLScriptElement>('script[src="/assets/js/theme.js"]')?.dataset.loaded === "true");
});

test("all nine case studies render TSX pages", async ({ page }) => {
  for (let index = 1; index <= 9; index++) {
    const response = await page.goto(`/projects/project-${index}`);
    expect(response?.status()).toBe(200);
    await expect(page.locator(".ph-caption-title")).not.toBeEmpty();
    await page.waitForFunction(() => document.querySelector<HTMLScriptElement>('script[src="/assets/js/theme.js"]')?.dataset.loaded === "true");
  }
  const response = await page.goto("/single-project-1.html");
  expect(response?.status()).toBe(200);
  expect(page.url()).toContain("/projects/project-1");
});

test("protected project CRUD, upload, publishing, and contact inbox", async ({ page, request }) => {
  const rejected = await request.post("/api/projects", { data: {}, headers: { origin: "http://localhost:3100" } });
  expect(rejected.status()).toBe(401);
  await page.goto(adminBase);
  await expect(page).toHaveURL(new RegExp(`${adminLogin}$`));
  await page.getByLabel("Login ID").fill("test-admin");
  await page.getByLabel("Password").fill("test-only-password-2026");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page).toHaveURL(new RegExp(`${adminBase}$`));
  const forgedOrigin = await page.request.post("/api/projects", { headers: { origin: "https://unrelated.example" }, data: {} });
  expect(forgedOrigin.status()).toBe(401);
  const invalidUpload = await page.request.post("/api/uploads", { headers: { origin: "http://localhost:3100" }, multipart: { file: { name: "fake.png", mimeType: "image/png", buffer: Buffer.from("<script>invalid</script>") } } });
  expect(invalidUpload.status()).toBe(400);
  for (const data of [null, [], { title: "x".repeat(33000) }]) {
    const invalidProject = await page.request.post("/api/projects", { headers: { origin: "http://localhost:3100", "content-type": "application/json" }, data: JSON.stringify(data) });
    expect(invalidProject.status()).toBe(400);
  }
  const updatedOriginal = { ...seed[0], gallery: [], title: "Edited original project", slug: "edited-original", order: 0 };
  const edit = await page.request.put("/api/projects/project-1", { headers: { origin: "http://localhost:3100" }, data: updatedOriginal });
  expect(edit.status()).toBe(200);
  const editedPage = await request.get("/projects/edited-original");
  expect(editedPage.status()).toBe(200);
  expect(await editedPage.text()).toContain("Edited original project");
  const legacyPage = await request.get("/single-project-1.html");
  expect(legacyPage.status()).toBe(200);
  expect(legacyPage.url()).toContain("/projects/edited-original");
  const restore = await page.request.put("/api/projects/project-1", { headers: { origin: "http://localhost:3100" }, data: { ...seed[0], gallery: [] } });
  expect(restore.status()).toBe(200);
  const collisionProject = { ...seed[0], gallery: [], slug: "concurrent-url-check", published: false };
  const concurrent = await Promise.all([1, 2].map(() => page.request.post("/api/projects", { headers: { origin: "http://localhost:3100" }, data: collisionProject })));
  expect(concurrent.map(response => response.status()).sort()).toEqual([201, 400]);
  const created = await concurrent.find(response => response.status() === 201)!.json();
  expect((await page.request.delete(`/api/projects/${created.project.id}`, { headers: { origin: "http://localhost:3100" } })).status()).toBe(200);
  await page.getByRole("button", { name: "+ New project" }).click();
  await page.getByLabel("Project title").fill("Dashboard integration test");
  await page.getByLabel("URL slug").fill("dashboard-integration-test");
  await page.getByLabel("Description", { exact: true }).fill("A test project with a persistent image upload.");
  await page.getByLabel("Cover image", { exact: false }).setInputFiles(testImage);
  await expect(page.getByRole("img", { name: "Cover image" })).toBeVisible();
  await page.getByLabel("Gallery images (up to 20)").setInputFiles(testImage);
  await expect(page.getByRole("img", { name: "Gallery 1" })).toBeVisible();
  await page.getByLabel("Display order").fill("0");
  await page.getByRole("button", { name: "Save project", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("Draft saved");
  expect((await request.get("/projects/dashboard-integration-test")).status()).toBe(404);
  await page.getByLabel("Published — visible on the portfolio").check();
  await page.getByRole("button", { name: "Save project", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("published");
  expect((await request.get("/projects/dashboard-integration-test")).status()).toBe(200);
  const publicPage = await request.get("/");
  expect((await publicPage.text()).indexOf('href="/projects/dashboard-integration-test"')).toBeLessThan((await publicPage.text()).indexOf('href="/projects/project-1"'));
  const imageUrl = await page.getByRole("img", { name: "Cover image" }).getAttribute("src");
  expect(imageUrl).toMatch(/\.webp$/);
  const media = await request.get(imageUrl!);
  expect(media.headers()["content-type"]).toBe("image/webp");
  expect((await sharp(await media.body()).metadata()).format).toBe("webp");
  const databaseUrl = await readFile(path.join(process.env.PLAYWRIGHT_STORAGE_DIR!, "database-url"), "utf8");
  const database = new Client({ connectionString: databaseUrl });
  await database.connect();
  try {
    const stored = await database.query("SELECT payload, published FROM portfolio_projects WHERE slug = $1", ["dashboard-integration-test"]);
    expect(stored.rows[0].payload.title).toBe("Dashboard integration test");
    expect(stored.rows[0].published).toBe(true);
    expect(stored.rows[0].payload.gallery).toHaveLength(1);
    const version = await database.query("SELECT version()");
    expect(version.rows[0].version).toContain("PostgreSQL");
  } finally { await database.end(); }
  const restarted = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "start", "--port", "3102"], {
    cwd: process.cwd(), windowsHide: true,
    env: { ...process.env, NODE_ENV: "production", PORTFOLIO_DATA_DIR: process.env.PLAYWRIGHT_STORAGE_DIR, DATABASE_URL: databaseUrl },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let serverOutput = "";
  restarted.stdout.on("data", chunk => { serverOutput = (serverOutput + chunk).slice(-4000); });
  restarted.stderr.on("data", chunk => { serverOutput = (serverOutput + chunk).slice(-4000); });
  try {
    await expect.poll(async () => {
      try { return (await request.get("http://localhost:3102/projects/dashboard-integration-test", { timeout: 2000 })).status(); }
      catch { return 0; }
    }, { timeout: 120000, message: "Fresh server must read saved projects and uploads" }).toBe(200);
    expect((await request.get(`http://localhost:3102${imageUrl}`)).status()).toBe(200);
  } catch (error) { throw new Error(`${error}\n${serverOutput}`); }
  finally { restarted.kill(); }
  await page.reload();
  await page.getByRole("button", { name: /Dashboard integration test/ }).click();
  await expect(page.getByLabel("Project title")).toHaveValue("Dashboard integration test");
  const contact = await request.post("/api/contact", { headers: { origin: "http://localhost:3100" }, form: { name: "Test visitor", email: "visitor@example.com", option: "New Project", message: "Dashboard inquiry test." } });
  expect((await contact.json()).success).toBe(true);
  await page.goto(adminMessages);
  await expect(page.getByText("Dashboard inquiry test.")).toBeVisible();
  await page.goto(adminBase);
  await page.getByRole("button", { name: /Dashboard integration test/ }).click();
  page.once("dialog", dialog => dialog.accept());
  await page.getByRole("button", { name: "Delete project", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("deleted");
  expect((await request.get("/projects/dashboard-integration-test")).status()).toBe(404);
});

test("dashboard login, protected routes, responsive editor, and logout", async ({ page }) => {
  await page.goto(adminMessages);
  await expect(page).toHaveURL(new RegExp(`${adminLogin}$`));
  await page.getByLabel("Login ID").fill("test-admin");
  await page.getByLabel("Password").fill("incorrect-password");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.locator("form").getByRole("alert")).toHaveText("Incorrect ID or password.");
  await page.getByLabel("Login ID").fill("test-admin");
  await page.getByLabel("Password").fill("test-only-password-2026");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page).toHaveURL(new RegExp(`${adminBase}$`));
  await page.goto(adminLogin);
  await expect(page).toHaveURL(new RegExp(`${adminBase}$`));
  await page.getByLabel("Search projects").fill("Aero Dog");
  await expect(page.locator("aside button[aria-pressed]")).toHaveCount(1);
  await page.getByRole("button", { name: /Aero Dog/ }).click();
  await expect(page.getByLabel("Project title")).toHaveValue("Aero Dog");
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await expect(page.getByRole("button", { name: "Save project", exact: true })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${width}px dashboard must not overflow horizontally`).toBe(true);
    await page.screenshot({ path: `test-results/dashboard-${width}.png`, fullPage: true });
  }
  await page.getByRole("button", { name: "Sign out", exact: true }).click();
  await expect(page).toHaveURL(new RegExp(`${adminLogin}$`));
  for (const route of [adminBase, adminMessages]) {
    await page.goto(route);
    await expect(page).toHaveURL(new RegExp(`${adminLogin}$`));
  }
  const unauthorized = await page.request.post("/api/projects", { headers: { origin: "http://localhost:3100" }, data: {} });
  expect(unauthorized.status()).toBe(401);
});

test("the original contact form delivers messages to the protected inbox", async ({ page }) => {
  await page.goto("/");
  await page.waitForFunction(() => document.querySelector<HTMLScriptElement>('script[src="/assets/js/theme.js"]')?.dataset.loaded === "true");
  await clickAfterScrolling(page, page.locator('.tt-main-menu-list a[href="#contact"]'));
  await page.getByLabel("What's your name?").fill("Browser visitor");
  await page.getByLabel("What's your email?").fill("browser@example.com");
  await page.getByLabel("What would you like to talk about?").selectOption("New Project");
  await page.getByLabel("Your message").fill("Message submitted through the original portfolio form.");
  await clickAfterScrolling(page, page.locator('label[for="privacy-policy-check"]'));
  await expect(page.locator("#privacy-policy-check")).toBeChecked();
  await clickAfterScrolling(page, page.getByRole("button", { name: "Send Message" }));
  await expect(page.locator(".tt-cfm-success")).toContainText("Your message has been received");
  await page.goto(adminMessages);
  await expect(page).toHaveURL(new RegExp(`${adminLogin}$`));
  await page.getByLabel("Login ID").fill("test-admin");
  await page.getByLabel("Password").fill("test-only-password-2026");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page).toHaveURL(new RegExp(`${adminBase}$`));
  await page.goto(adminMessages);
  await expect(page.getByText("Message submitted through the original portfolio form.")).toBeVisible();
});

test("common login pages are decoys even with the correct credentials", async ({ page, request }) => {
  for (const route of ["/admin", "/admin/login", "/dashboard", "/dashboard/login", "/login", "/wp-admin", "/wp-login.php"]) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    expect(await response!.text()).not.toContain(adminBase);
    await page.getByLabel("Login ID").fill("test-admin");
    await page.getByLabel("Password").fill("test-only-password-2026");
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
    await expect(page.getByRole("img", { name: "Access denied" })).toBeVisible();
    expect(new URL(page.url()).pathname).toBe(route);
    expect((await page.context().cookies()).some(cookie => cookie.name === "portfolio-session")).toBe(false);
  }
  expect((await request.post("/api/session", { data: { username: "test-admin", password: "test-only-password-2026" } })).status()).toBe(404);
  expect((await request.post(`/studio/${"b".repeat(64)}/session`, { data: { username: "test-admin", password: "test-only-password-2026" } })).status()).toBe(404);
  expect((await request.get(`/studio/${"b".repeat(64)}/login`)).status()).toBe(404);
});

test("uploads are resized and compressed and already-open public pages refresh live", async ({ page, request, context }) => {
  await page.goto(adminLogin);
  await page.getByLabel("Login ID").fill("test-admin");
  await page.getByLabel("Password").fill("test-only-password-2026");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page).toHaveURL(new RegExp(`${adminBase}$`));
  const input = await sharp({ create: { width: 3000, height: 2000, channels: 3, background: { r: 80, g: 130, b: 180 } } }).png().toBuffer();
  const upload = await page.request.post("/api/uploads", { headers: { origin: "http://localhost:3100" }, multipart: { file: { name: "large.png", mimeType: "image/png", buffer: input } } });
  expect(upload.status()).toBe(201);
  const result = await upload.json();
  expect(result.url).toMatch(/\.webp$/);
  expect(result.bytes).toBeLessThan(input.length);
  const metadata = await sharp(await (await request.get(result.url)).body()).metadata();
  expect(metadata.width).toBeLessThanOrEqual(1920);
  expect(metadata.height).toBeLessThanOrEqual(1920);
  const malformed = await page.request.post("/api/uploads", { headers: { origin: "http://localhost:3100" }, multipart: { file: { name: "bad.png", mimeType: "image/png", buffer: Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]) } } });
  expect(malformed.status()).toBe(400);
  const publicPage = await context.newPage();
  const errors: string[] = [];
  publicPage.on("pageerror", error => errors.push(error.message));
  try {
    await publicPage.goto("/projects/project-1");
    await expect(publicPage.locator(".ph-caption-title")).toHaveText("Aero Dog");
    const edit = await page.request.put("/api/projects/project-1", { headers: { origin: "http://localhost:3100" }, data: { ...seed[0], gallery: [], title: "Live corrected title", description: "Live corrected description from PostgreSQL.", client: "Live corrected client", year: "2030", role: "Full Stack", website: "https://example.com/live-project", heroImage: result.url } });
    expect(edit.status()).toBe(200);
    await expect(publicPage.locator(".ph-caption-title")).toHaveText("Live corrected title", { timeout: 25000 });
    await expect(publicPage.getByText("Live corrected description from PostgreSQL.", { exact: true })).toHaveText("Live corrected description from PostgreSQL.");
    expect(await publicPage.locator(".ph-image img").first().getAttribute("src")).toBe(result.url);
    await expect(publicPage.locator(".pi-list-cont").filter({ hasText: "Live corrected client" })).toHaveText("Live corrected client");
    await expect(publicPage.locator(".pi-list-cont").filter({ hasText: "2030" })).toHaveText("2030");
    await expect(publicPage.locator(".pi-list-cont").filter({ hasText: "Full Stack" })).toHaveText("Full Stack");
    await expect(publicPage.locator('.pi-list-cont a[href="https://example.com/live-project"]')).toHaveCount(1);
  } finally {
    await publicPage.close();
    await page.request.put("/api/projects/project-1", { headers: { origin: "http://localhost:3100" }, data: { ...seed[0], gallery: [] } });
  }
  expect(errors).toEqual([]);
});
