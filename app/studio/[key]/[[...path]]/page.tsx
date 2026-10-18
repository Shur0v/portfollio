import { notFound, redirect } from "next/navigation";
import { authenticated, authConfigured } from "../../../../lib/auth";
import { adminPath, validAdminKey } from "../../../../lib/admin-path";
import { getProjects } from "../../../../lib/projects";
import { getMessages } from "../../../../lib/messages";
import { ProjectDashboard } from "../../../../components/dashboard/project-dashboard";
import { LoginForm } from "../../../../components/dashboard/login-form";

export const dynamic = "force-dynamic";
export const metadata = { title: "Portfolio dashboard", robots: { index: false, follow: false } };

export default async function StudioPage({ params }: { params: Promise<{ key: string; path?: string[] }> }) {
  const { key, path = [] } = await params;
  if (!validAdminKey(key) || path.length > 1 || !["", "login", "messages"].includes(path.join("/"))) notFound();
  const basePath = adminPath(key);
  if (path[0] === "login") {
    if (await authenticated()) redirect(basePath);
    return <main className="dashboard"><div className="tw:mx-auto tw:mt-16 tw:max-w-md"><a href="/">← Portfolio</a><h1 className="tw:mt-8 tw:text-3xl">Portfolio dashboard</h1>{authConfigured() ? <LoginForm basePath={basePath} /> : <p role="status">Admin access is not configured.</p>}</div></main>;
  }
  if (!await authenticated()) redirect(adminPath(key, "login"));
  if (path[0] === "messages") {
    const messages = await getMessages();
    return <main className="dashboard"><div className="tw:mx-auto tw:max-w-6xl"><a href={basePath}>← Projects</a><h1 className="tw:mt-8 tw:text-3xl">Contact messages</h1>
      {!messages.length && <p>Messages from your portfolio contact form will appear here.</p>}
      <div className="tw:space-y-5">{messages.map(message => <article key={message.id} className="tw:rounded-xl tw:border tw:border-solid tw:border-zinc-700 tw:p-6">
        <h2>{message.subject || "New message"}</h2><p>{message.name} · <a href={`mailto:${message.email}`}>{message.email}</a></p>
        <time dateTime={message.date} className="tw:text-sm tw:text-zinc-400">{new Date(message.date).toLocaleString("en-GB", { timeZone: "Asia/Dhaka" })} (Dhaka)</time>
        <p className="tw:mt-4 tw:whitespace-pre-wrap">{message.message}</p>
      </article>)}</div>
    </div></main>;
  }
  return <main className="dashboard"><div className="tw:mx-auto tw:max-w-6xl"><ProjectDashboard initialProjects={await getProjects()} basePath={basePath} /></div></main>;
}
