import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { getProject } from "../../../../lib/projects";
import { cache } from "react";
import { getContentRevision } from "../../../../lib/content-revision";
import { getSiteSnapshot } from "../../../../lib/site-content";
import { ProjectDocument } from "../../../../components/project-document";

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
  const values = (await getSiteSnapshot()).pages.global.content.values;
  return { title: `${project.title} | ${values["site-name"]}`, description: project.description.slice(0, 160), openGraph: { title: `${project.title} | ${values["site-name"]}`, description: project.description.slice(0, 160), images: [project.heroImage || project.image] } };
}

export default async function ProjectPage({ params }: Props) {
  const project = await loadProject((await params).slug);
  return <ProjectDocument project={project} />;
}
