import { readFileSync } from 'node:fs';
import { parse } from 'parse5';

const find = (node, predicate) => predicate(node) ? node : (node.childNodes || []).map(child => find(child, predicate)).find(Boolean);
const all = (node, predicate) => [...(predicate(node) ? [node] : []), ...(node.childNodes || []).flatMap(child => all(child, predicate))];
const attr = (node, name) => node.attrs?.find(attribute => attribute.name === name)?.value || '';
const has = (node, name) => attr(node, 'class').split(/\s+/).includes(name);
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
const clean = node => text(node).replace(/\s+/g, ' ').trim();
const root = filename => find(parse(readFileSync(filename, 'utf8')), node => node.tagName === 'body');
const home = root('index.html');
const cards = all(home, node => has(node, 'tt-grid-item'));
const files = {};
const seeds = [];
const replacements = new Map();
const attrNames = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', autoplay: 'autoPlay', playsinline: 'playsInline', readonly: 'readOnly', maxlength: 'maxLength', minlength: 'minLength', colspan: 'colSpan', rowspan: 'rowSpan', frameborder: 'frameBorder', allowfullscreen: 'allowFullScreen', crossorigin: 'crossOrigin', srcset: 'srcSet', 'stroke-width': 'strokeWidth', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin' };
const booleans = new Set(['required', 'disabled', 'muted', 'loop', 'autoplay', 'playsinline', 'checked', 'multiple', 'controls', 'allowfullscreen', 'readonly']);
const voids = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const url = value => value.replace(/^assets\//, '/assets/').replace(/^single-project-(\d+)\.html$/, '/projects/project-$1').replace(/^index\.html/, '/').replace(/^portfolio[^#]*\.html$/, '/#portfolio').replace(/^contact[^#]*\.html$/, '/#contact').replace(/^about[^#]*\.html$/, '/#about').replace(/^landing-page[^#]*\.html$/, '/').replace(/^dummy\.html$/, '/privacy');
function render(node, level = 0) {
  if (replacements.has(node)) return replacements.get(node);
  if (node.nodeName === '#text') return node.value.trim() ? `{${JSON.stringify(node.value.replace(/\s+/g, ' '))}}` : '';
  if (!node.tagName || node.tagName === 'script') return '';
  const props = (node.attrs || []).filter(attribute => attribute.name !== 'selected').map(({name, value}) => {
    if (name === 'style') {
      const styles = Object.fromEntries(value.split(';').filter(part => part.includes(':')).map(part => {
        const separator = part.indexOf(':');
        const key = part.slice(0, separator).trim();
        return [key.startsWith('--') ? key : key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()), part.slice(separator + 1).trim()];
      }));
      return `style={${JSON.stringify(styles)} as CSSProperties}`;
    }
    if (name === 'space') name = 'xmlSpace';
    if (['href', 'src', 'poster', 'data-src'].includes(name)) value = url(value);
    if (booleans.has(name)) return `${attrNames[name] || name}={true}`;
    if (['rows', 'cols', 'tabindex', 'maxlength', 'minlength', 'colspan', 'rowspan'].includes(name)) return `${attrNames[name] || name}={${Number(value)}}`;
    return `${attrNames[name] || name}=${JSON.stringify(value)}`;
  });
  if (node.tagName === 'select') props.push('defaultValue=""');
  const opening = `<${node.tagName}${props.length ? ' ' + props.join(' ') : ''}`;
  if (voids.has(node.tagName)) return opening + ' />';
  const children = (node.childNodes || []).map(child => render(child, level + 1)).filter(Boolean);
  const indent = '  '.repeat(level);
  return opening + '>\n' + children.map(child => indent + '  ' + child).join('\n') + '\n' + indent + `</${node.tagName}>`;
}
for (let index = 1; index <= 9; index++) {
  const body = root(`single-project-${index}.html`);
  const card = cards[index - 1];
  const heading = find(body, node => has(node, 'ph-caption-title'));
  const category = find(body, node => has(node, 'ph-caption-category'));
  const image = find(card, node => node.tagName === 'img');
  const video = find(card, node => node.tagName === 'video');
  const hero = find(body, node => has(node, 'ph-image-inner'));
  const heroImage = hero && find(hero, node => node.tagName === 'img');
  const content = find(body, node => attr(node, 'id') === 'tt-page-content');
  const paragraph = find(content, node => node.tagName === 'p');
  const info = all(body, node => has(node, 'pi-list-cont'));
  const project = { id: `project-${index}`, slug: `project-${index}`, title: clean(heading), category: clean(category), image: url(image ? attr(image, 'src') : attr(video, 'poster')), heroImage: heroImage ? url(attr(heroImage, 'src')) : '', description: paragraph ? clean(paragraph) : '', client: info[0] ? clean(info[0]) : '', year: info[1] ? clean(info[1]) : '', role: info[2] ? clean(info[2]) : '', website: info[3] ? attr(find(info[3], node => node.tagName === 'a') || {}, 'href') : '', portrait: !!find(card, node => has(node, 'tt-pgi-portrait')), published: true, order: index, template: index, video: video ? all(video, node => node.tagName === 'source').map(node => ({src: url(attr(node, 'data-src') || attr(node, 'src')), type: attr(node, 'type')})) : [] };
  project.repeatInGrid = index <= 8;
  project.additionalCategories = all(card, node => has(node, 'tt-pgi-category')).slice(1).map(clean);
  seeds.push(project);
  replacements.set(heading, `<h1 className=${JSON.stringify(attr(heading, 'class'))}>{project.title}</h1>`);
  replacements.set(category, '<a href="/#portfolio" className="ph-caption-category">{project.category}</a>');
  if (paragraph) replacements.set(paragraph, '<p>{project.description}</p>');
  if (heroImage) replacements.set(heroImage, '<img src={project.heroImage || project.image} alt={project.title} />');
  for (const [position, field] of ['client', 'year', 'role'].entries()) if (info[position]) replacements.set(info[position], `<div className="pi-list-cont">{project.${field}}</div>`);
  if (info[3]) replacements.set(info[3], '<div className="pi-list-cont"><a href={project.website || "#"} target="_blank" rel="noopener noreferrer">Visit site<span className="pi-list-icon"><i className="fas fa-arrow-right" /></span></a></div>');
  const renderedContent = render(content);
  replacements.set(content, renderedContent.replace(/<\/div>$/, '<ProjectGallery project={project} /></div>'));
  files[`components/projects/project-${index}.tsx`] = `import type { CSSProperties } from "react";\nimport type { Project } from "../../lib/project-types";\nimport { ProjectGallery } from "../project-gallery";\n\nexport default function Project${index}({ project }: { project: Project }) {\n  return (${render(find(body, node => node.tagName === 'main'))});\n}\n`;
  if (index === 1) {
    replacements.set(content, `<div id="tt-page-content"><div className="tt-section padding-top-xlg-120"><div className="tt-section-inner tt-wrap"><div className="tt-row"><div className="tt-col-lg-4 padding-right-md-5-p"><div className="tt-heading margin-bottom-30 tt-anim-fadeinup"><h2 className="tt-heading-title">About the<br /> Project</h2></div></div><div className="tt-col-lg-8"><div className="tt-anim-fadeinup"><p style={{whiteSpace: "pre-line"}}>{project.description}</p></div><div className="tt-project-info-list tt-pil-inline tt-anim-fadeinup margin-top-40"><ul>{[["Client", project.client], ["Year", project.year], ["Role", project.role]].map(([label, value]) => <li key={label}><div className="pi-list-heading">{label}</div><div className="pi-list-cont">{value}</div></li>)}<li><div className="pi-list-heading">Website</div><div className="pi-list-cont">{project.website ? <a href={project.website} target="_blank" rel="noopener noreferrer">Visit site<span className="pi-list-icon"><i className="fas fa-arrow-right" /></span></a> : "—"}</div></li></ul></div></div></div></div></div><ProjectGallery project={project} /></div>`);
    files['components/projects/uploaded-project.tsx'] = `import type { CSSProperties } from "react";\nimport type { Project } from "../../lib/project-types";\nimport { ProjectGallery } from "../project-gallery";\n\nexport default function UploadedProject({ project }: { project: Project }) {\n  return (${render(find(body, node => node.tagName === 'main'))});\n}\n`;
  }
}
const grid = find(home, node => has(node, 'tt-grid-list'));
replacements.set(grid, '<ProjectGrid projects={projects} />');
files['components/portfolio-home.tsx'] = `import type { CSSProperties } from "react";\nimport type { Project } from "../lib/project-types";\nimport { ProjectGrid } from "./project-grid";\n\nexport default function PortfolioHome({ projects }: { projects: Project[] }) {\n  return (${render(find(home, node => node.tagName === 'main'))});\n}\n`;
files['data/projects.seed.json'] = JSON.stringify(seeds, null, 2) + '\n';
console.log('*** Begin Patch\n' + Object.entries(files).filter(([filename]) => !process.argv.includes('--data-only') || filename === 'data/projects.seed.json').map(([filename, source]) => `*** Add File: ${filename}\n${source.trimEnd().split('\n').map(line => '+' + line).join('\n')}`).join('\n') + '\n*** End Patch');
