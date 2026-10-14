import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Project Dashboard | Shurov", robots: { index: false, follow: false } };

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <main className="dashboard"><div className="tw:mx-auto tw:max-w-6xl">{children}</div></main>;
}
