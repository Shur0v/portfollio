import { redirect } from "next/navigation";
import { authenticated } from "../../lib/auth";
import { getProjects } from "../../lib/projects";
import { ProjectDashboard } from "../../components/dashboard/project-dashboard";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  if (!await authenticated()) redirect("/dashboard/login");
  return <ProjectDashboard initialProjects={await getProjects()} />;
}
