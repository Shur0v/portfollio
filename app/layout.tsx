import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import "./globals.css";
import { getSiteSnapshot } from "../lib/site-content";
import { LiveContentSync } from "../components/live-content-sync";
import { getContentRevision } from "../lib/content-revision";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const values = (await getSiteSnapshot()).pages.global.content.values;
  return { metadataBase: new URL(process.env.APP_ORIGIN || "http://localhost:3000"), title: values["seo-title"], description: values["seo-description"], icons: { icon: values.favicon }, openGraph: { title: values["seo-title"], description: values["seo-description"], images: [values["social-image"]] } };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const revision = await getContentRevision();
  return <html lang="en"><body id="body" className="tt-transition tt-magic-cursor tt-smooth-scroll" style={{ margin: 0, "--tt-bg-pattern": "none" } as CSSProperties}>{children}<LiveContentSync revision={revision} /></body></html>;
}
