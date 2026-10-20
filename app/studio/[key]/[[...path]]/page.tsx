import { notFound, redirect } from "next/navigation";
import { authenticated, authConfigured } from "../../../../lib/auth";
import { adminPath, validAdminKey } from "../../../../lib/admin-path";
import { getProjects } from "../../../../lib/projects";
import { getMessages } from "../../../../lib/messages";
import { ProjectDashboard } from "../../../../components/dashboard/project-dashboard";
import { LoginForm } from "../../../../components/dashboard/login-form";
import { SiteContentDashboard } from "../../../../components/dashboard/site-content-dashboard";
import { siteDefinitions } from "../../../../lib/site-content-schema";
import { getSiteSnapshot } from "../../../../lib/site-content";

export const dynamic = "force-dynamic";
export const metadata = { title: "Portfolio dashboard", robots: { index: false, follow: false } };

export default async function StudioPage({ params }: { params: Promise<{ key: string; path?: string[] }> }) {
  const { key, path = [] } = await params;
  if (!validAdminKey(key) || path.length > 1 || !["", "login", "messages", "content"].includes(path.join("/"))) notFound();
  const basePath = adminPath(key);
  if (path[0] === "login") {
    if (await authenticated()) redirect(basePath);
    return <main className="dashboard"><div className="tw:mx-auto tw:mt-16 tw:max-w-md"><a href="/">← Portfolio</a><h1 className="tw:mt-8 tw:text-3xl">Portfolio dashboard</h1>{authConfigured() ? <LoginForm basePath={basePath} /> : <p role="status">Admin access is not configured.</p>}</div></main>;
  }
  if (!await authenticated()) redirect(adminPath(key, "login"));
  if (path[0] === "content") {
    const projects = await getProjects();
    const previewLinks = Object.fromEntries(projects.filter(project => project.published && !project.layoutContent).map(project => [`project-${project.template}`, `/projects/${project.slug}`]));
    return <main className="dashboard"><div className="tw:mx-auto tw:max-w-7xl"><SiteContentDashboard definitions={siteDefinitions} initialRecords={(await getSiteSnapshot()).pages} basePath={basePath} previewLinks={{ ...previewLinks, home: "/", global: "/", privacy: "/privacy" }} /></div></main>;
  }
  if (path[0] === "messages") {
    const messages = await getMessages();
    return <main className="dashboard"><div className="tw:mx-auto tw:max-w-6xl"><nav className="tw:flex tw:gap-4"><a href={basePath}>← Projects</a><a href={`${basePath}/content`}>Website content</a></nav><h1 className="tw:mt-8 tw:text-3xl">Contact messages</h1>
      {!messages.length && <p>Messages from your portfolio contact form will appear here.</p>}
      <div className="tw:space-y-5">{messages.map(message => <article key={message.id} className="tw:rounded-xl tw:border tw:border-solid tw:border-zinc-700 tw:p-6">
        <h2>{message.subject || "New message"}</h2><p>{message.name} · <a href={`mailto:${message.email}`}>{message.email}</a></p>
        <time dateTime={message.date} className="tw:text-sm tw:text-zinc-400">{new Date(message.date).toLocaleString("en-GB", { timeZone: "Asia/Dhaka" })} (Dhaka)</time>
        <p className="tw:mt-4 tw:whitespace-pre-wrap">{message.message}</p>
      </article>)}</div>
    </div></main>;
  }
  const snapshot = await getSiteSnapshot();
  const layoutDefaults = Object.fromEntries(Object.entries(snapshot.pages).filter(([id]) => /^project-[1-9]$/.test(id)).map(([id, record]) => [id, record.content]));
  return <main className="dashboard"><div className="tw:mx-auto tw:max-w-6xl"><ProjectDashboard initialProjects={await getProjects()} basePath={basePath} layoutDefaults={layoutDefaults} /></div></main>;
}
