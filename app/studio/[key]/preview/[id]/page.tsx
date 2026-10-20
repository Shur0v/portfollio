import { notFound, redirect } from "next/navigation";
import { validAdminKey, adminPath } from "../../../../../lib/admin-path";
import { authenticated } from "../../../../../lib/auth";
import { getProjects } from "../../../../../lib/projects";
import { ProjectDocument } from "../../../../../components/project-document";

export const dynamic = "force-dynamic";
export const metadata = { title: "Private project preview", robots: { index: false, follow: false } };

export default async function ProjectPreview({ params }: { params: Promise<{ key: string; id: string }> }) {
  const { key, id } = await params;
  if (!validAdminKey(key)) notFound();
  if (!await authenticated()) redirect(adminPath(key, "login"));
  const project = (await getProjects()).find(item => item.id === id);
  if (!project) notFound();
  return <><ProjectDocument project={project} /><aside aria-label="Private preview" className="tw:fixed tw:bottom-4 tw:left-4 tw:z-[999999] tw:rounded-lg tw:bg-zinc-900 tw:p-4 tw:text-sm tw:text-white"><strong>Private preview · {project.published ? "Published" : "Draft"}</strong><br /><a href={adminPath(key)}>← Back to project editor</a></aside></>;
}
