import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Cascadia_Mono } from "next/font/google";
import "./globals.css";
import { getSiteSnapshot } from "../lib/site-content";
import { LiveContentSync } from "../components/live-content-sync";
import { getContentRevision } from "../lib/content-revision";
import { designUtilities } from "../styles/design-utilities";

const cascadia = Cascadia_Mono({ subsets: ["latin"], variable: "--font-cascadia", display: "swap", adjustFontFallback: false });
const awesome = localFont({ src: [
  { path: "../public/assets/vendor/fontawesome/webfonts/fa-regular-400.woff2", weight: "400", style: "normal" },
  { path: "../public/assets/vendor/fontawesome/webfonts/fa-solid-900.woff2", weight: "900", style: "normal" },
], variable: "--font-awesome-free", display: "block", adjustFontFallback: false });
const brands = localFont({ src: "../public/assets/vendor/fontawesome/webfonts/fa-brands-400.woff2", variable: "--font-awesome-brands", display: "block", adjustFontFallback: false });
const swiper = localFont({ src: "../public/assets/fonts/swiper-icons.woff", variable: "--font-swiper-icons", display: "auto", adjustFontFallback: false });

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const values = (await getSiteSnapshot()).pages.global.content.values;
  return { metadataBase: new URL(process.env.APP_ORIGIN || "http://localhost:3000"), title: values["seo-title"], description: values["seo-description"], icons: { icon: values.favicon }, openGraph: { title: values["seo-title"], description: values["seo-description"], images: [values["social-image"]] } };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const revision = await getContentRevision();
  return <html lang="en" className={`${cascadia.variable} ${awesome.variable} ${brands.variable} ${swiper.variable} ${designUtilities}`}><body id="body" className="tt-transition tt-magic-cursor tt-smooth-scroll tw:m-0 tw:[--tt-bg-pattern:none]">{children}<LiveContentSync revision={revision} /></body></html>;
}
