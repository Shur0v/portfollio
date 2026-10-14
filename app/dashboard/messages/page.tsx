import { redirect } from "next/navigation";
import { authenticated } from "../../../lib/auth";
import { getMessages } from "../../../lib/messages";

export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  if (!await authenticated()) redirect("/dashboard/login");
  const messages = await getMessages();
  return <>
    <a href="/dashboard">← Projects</a><h1 className="tw:mt-8 tw:text-3xl">Contact messages</h1>
    {!messages.length && <p>Messages from your portfolio contact form will appear here.</p>}
    <div className="tw:space-y-5">{messages.map(message => <article key={message.id} className="tw:rounded-xl tw:border tw:border-solid tw:border-zinc-700 tw:p-6">
      <h2>{message.subject || "New message"}</h2><p>{message.name} · <a href={`mailto:${message.email}`}>{message.email}</a></p>
      <time dateTime={message.date} className="tw:text-sm tw:text-zinc-400">{new Date(message.date).toLocaleString("en-GB", { timeZone: "Asia/Dhaka" })} (Dhaka)</time>
      <p className="tw:mt-4 tw:whitespace-pre-wrap">{message.message}</p>
    </article>)}</div>
  </>;
}
