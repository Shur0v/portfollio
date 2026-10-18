import PortfolioHome from "../../components/portfolio-home";
import { getProjects } from "../../lib/projects";
import { getContentRevision } from "../../lib/content-revision";
import { getSiteSnapshot, pageSiteSnapshot } from "../../lib/site-content";
import { SiteContentProvider } from "../../components/site-content-provider";

export const dynamic = "force-dynamic";

export default async function Home() {
  await getContentRevision();
  return <SiteContentProvider snapshot={pageSiteSnapshot(await getSiteSnapshot(), "home")}><PortfolioHome projects={await getProjects(true)} /></SiteContentProvider>;
}
