import { test } from "node:test";
import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import postcss from "postcss";
import { compile } from "@tailwindcss/node";

const root = path.resolve(import.meta.dirname, "..");

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? sourceFiles(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();
}

test("all website pages use TSX with no legacy HTML, CSS stylesheets, or static inline styles", async () => {
  const files = (await Promise.all(["app", "components", "styles", "assets", "public"].map(directory => sourceFiles(path.join(root, directory))))).flat();
  assert.deepEqual(files.filter(filename => filename.endsWith(".html")), []);
  assert.deepEqual(files.filter(filename => filename.endsWith(".css")).map(filename => path.relative(root, filename)), [path.join("app", "globals.css")]);
  assert.deepEqual((await readdir(root)).filter(filename => filename.endsWith(".html")), []);
  for (const filename of files.filter(filename => filename.endsWith(".tsx"))) {
    const code = await readFile(filename, "utf8");
    assert.doesNotMatch(code, /dangerouslySetInnerHTML|style=\{/u, path.relative(root, filename));
    assert.doesNotMatch(code, /assets\/(?:css\/|vendor\/[^/]+\/css\/)/u, path.relative(root, filename));
  }
  for (let variant = 1; variant <= 9; variant++) {
    const code = await readFile(path.join(root, `components/projects/project-${variant}.tsx`), "utf8");
    assert.match(code, /export default function Project/u);
  }
  const stylesheet = postcss.parse(await readFile(path.join(root, "app/globals.css"), "utf8"));
  assert.ok(stylesheet.nodes.every(node => node.type === "atrule" && ["layer", "import", "config", "plugin", "source"].includes(node.name)));
});

test("Tailwind compiles every design utility and preserves all animation keyframes", async () => {
  const utilities = (await sourceFiles(path.join(root, "styles"))).filter(filename => /utilities-\d+\.tsx$/.test(filename));
  const candidates = (await Promise.all(utilities.map(async filename => [...(await readFile(filename, "utf8")).matchAll(/String\.raw`([^`]+)`/gu)].map(match => match[1])))).flat();
  assert.ok(candidates.length > 5000);
  const compiler = await compile(await readFile(path.join(root, "app/globals.css"), "utf8"), { base: path.join(root, "app"), onDependency() {} });
  const css = compiler.build(candidates);
  const escape = value => value.replace(/[^a-zA-Z0-9_\-\u0080-\uffff]/gu, character => `\\${character}`);
  const missing = candidates.filter(candidate => !css.includes(`.${escape(candidate)}`));
  assert.deepEqual(missing.slice(0, 20), [], `${missing.length} Tailwind utilities did not compile`);
  for (const animation of ["fa-beat", "fa-bounce", "fa-fade", "fa-beat-fade", "fa-flip", "fa-shake", "fa-spin", "a", "swiper-preloader-spin", "swipe-line", "pscr_marquee2", "pscr_marquee1", "marquee-ltr-anim", "marquee-rtl-anim"]) {
    assert.ok(css.includes(`@keyframes ${animation}`), `Missing animation: ${animation}`);
  }
});
