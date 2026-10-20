import type { Project } from "../lib/project-types";
import { getProjects } from "../lib/projects";
import { getSiteSnapshot, pageSiteSnapshot } from "../lib/site-content";
import { renderProjectLayout } from "../lib/project-layouts";
import { SiteContentProvider } from "./site-content-provider";
import Project1 from "./projects/project-1";
import Project2 from "./projects/project-2";
import Project3 from "./projects/project-3";
import Project4 from "./projects/project-4";
import Project5 from "./projects/project-5";
import Project6 from "./projects/project-6";
import Project7 from "./projects/project-7";
import Project8 from "./projects/project-8";
import Project9 from "./projects/project-9";
import UploadedProject from "./projects/uploaded-project";

export async function ProjectDocument({ project }: { project: Project }) {
  const published = await getProjects(true);
  const projectLinks = Object.fromEntries(published.map(item => [item.id, `/projects/${item.slug}`]));
  const templates = [UploadedProject, Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project8, Project9];
  const Template = templates[project.template] || UploadedProject;
  const pageId = Template === UploadedProject ? "uploaded-project" : `project-${project.template}`;
  const snapshot = pageSiteSnapshot(await getSiteSnapshot(), pageId);
  const rendered = renderProjectLayout(project, snapshot.pages[pageId].content, published);
  snapshot.pages[pageId] = { ...snapshot.pages[pageId], content: rendered.content };
  const prepared = project.layoutContent && !project.image ? { ...project, image: "/assets/img/layout-placeholder-landscape.svg" } : project;
  return <SiteContentProvider snapshot={snapshot}><Template project={prepared} projectLinks={projectLinks} relatedLinks={rendered.relatedLinks} /></SiteContentProvider>;
}
