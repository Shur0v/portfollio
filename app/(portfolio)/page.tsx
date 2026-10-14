import PortfolioHome from "../../components/portfolio-home";
import { getProjects } from "../../lib/projects";

export const dynamic = "force-dynamic";

export default async function Home() {
  return <PortfolioHome projects={await getProjects(true)} />;
}
