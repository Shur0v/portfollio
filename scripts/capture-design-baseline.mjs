import { chromium } from "@playwright/test";
import { writeFile } from "node:fs/promises";

const browser = await chromium.launch({ channel: "msedge", headless: true });
const records = [];
const jobs = [];
for (const width of [1440, 768, 390]) for (const theme of ["disabled", "enabled"]) for (const variant of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) jobs.push({ width, theme, variant });
async function worker() {
  while (jobs.length) {
    const { width, theme, variant } = jobs.shift();
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    try {
      await context.addInitScript(value => localStorage.setItem("tt-dark-mode-on", value), theme);
      const page = await context.newPage();
      await page.goto(`http://127.0.0.1:3101/${variant ? `single-project-${variant}.html` : ""}`);
      await page.evaluate(() => Promise.allSettled([...document.images].map(image => { image.loading = "eager"; return image.decode(); })));
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(5500);
      const selectors = variant ? ["#page-header", ".ph-caption-title", "#tt-header", "#tt-footer", ".tt-project-info-list", ".tt-next-project", "#tt-page-content", ".tt-section", ".tt-image"] : ["#page-header", ".ph-caption-title", "#portfolio", ".tt-grid-filter", "#services", "#about", "#faq", "#contact", "#tt-footer"];
      const metrics = await page.evaluate(selectors => Object.fromEntries(selectors.flatMap(selector => {
        const element = document.querySelector(selector);
        if (!element) return [];
        const style = getComputedStyle(element), rect = element.getBoundingClientRect();
        return [[selector, { width: rect.width, height: rect.height, font: style.fontFamily, size: style.fontSize, color: style.color, padding: style.padding }]];
      })), selectors);
      records.push({ width, theme, variant, imagesLoaded: true, metrics });
      console.log(`Captured stable layout ${variant} / ${width} / ${theme}`);
    } finally { await context.close(); }
  }
}
try {
  await Promise.all([worker(), worker()]);
  records.sort((left, right) => left.variant - right.variant || left.width - right.width || left.theme.localeCompare(right.theme));
  await writeFile("node_modules/.cache/tailwind-migration/reference-layout.json", JSON.stringify(records, null, 2));
} finally { await browser.close(); }
