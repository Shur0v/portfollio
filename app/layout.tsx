import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shurov | Full Stack Developer & UI/UX Designer Portfolio",
  description: "Portfolio of Shurov, a full stack developer and UI/UX designer building scalable web applications, dashboards, SaaS products, brands, and digital experiences.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body id="body" className="tt-transition tt-magic-cursor tt-smooth-scroll" style={{ margin: 0, "--tt-bg-pattern": "none" } as CSSProperties}>{children}</body></html>;
}
