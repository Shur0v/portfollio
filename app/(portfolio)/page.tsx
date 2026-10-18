import PortfolioHome from "../../components/portfolio-home";
import { getProjects } from "../../lib/projects";
import { getContentRevision } from "../../lib/content-revision";

export const dynamic = "force-dynamic";

export default async function Home() {
  await getContentRevision();
  return <PortfolioHome projects={await getProjects(true)} />;
}
