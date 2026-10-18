import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { getProject, getProjects } from "../../../../lib/projects";
import { cache } from "react";
import { getContentRevision } from "../../../../lib/content-revision";
import Project1 from "../../../../components/projects/project-1";
import Project2 from "../../../../components/projects/project-2";
import Project3 from "../../../../components/projects/project-3";
import Project4 from "../../../../components/projects/project-4";
import Project5 from "../../../../components/projects/project-5";
import Project6 from "../../../../components/projects/project-6";
import Project7 from "../../../../components/projects/project-7";
import Project8 from "../../../../components/projects/project-8";
import Project9 from "../../../../components/projects/project-9";
import UploadedProject from "../../../../components/projects/uploaded-project";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

const loadProject = cache(async (slug: string) => {
  await getContentRevision();
  const project = await getProject(slug);
  if (!project) notFound();
  if (project.slug !== slug) redirect(`/projects/${project.slug}`);
  return project;
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await loadProject((await params).slug);
  return { title: `${project.title} | Shurov`, description: project.description.slice(0, 160) };
}

export default async function ProjectPage({ params }: Props) {
  const project = await loadProject((await params).slug);
  const projectLinks = Object.fromEntries((await getProjects(true)).map(item => [item.id, `/projects/${item.slug}`]));
  const templates = [UploadedProject, Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project8, Project9];
  const Template = templates[project.template] || UploadedProject;
  return <Template project={project} projectLinks={projectLinks} />;
}
