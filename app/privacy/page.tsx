import { PrivacyContent } from "../../components/privacy-content";
import { SiteContentProvider } from "../../components/site-content-provider";
import { getSiteSnapshot, pageSiteSnapshot } from "../../lib/site-content";

export default async function PrivacyPage() {
  return <SiteContentProvider snapshot={pageSiteSnapshot(await getSiteSnapshot(), "privacy")}><PrivacyContent /></SiteContentProvider>;
}
