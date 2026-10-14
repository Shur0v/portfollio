import { NextResponse } from "next/server";
import { rateLimited, sameOrigin } from "../../../lib/auth";
import { saveMessage } from "../../../lib/messages";
import { readLimitedBody } from "../../../lib/request-body";

export async function POST(request: Request) {
  if (!sameOrigin(request)) return NextResponse.json({ success: false, message: "Please submit the form from this website." }, { status: 403 });
  if (rateLimited("contact", 30, 60 * 60 * 1000)) return NextResponse.json({ success: false, message: "Too many messages. Please try again later." }, { status: 429 });
  if (Number(request.headers.get("content-length")) > 20000) return NextResponse.json({ success: false, message: "Your message is too long." }, { status: 413 });
  const bytes = await readLimitedBody(request, 20000).catch(() => null);
  if (!bytes) return NextResponse.json({ success: false, message: "Your message is too long." }, { status: 413 });
  const form = new URLSearchParams(bytes.toString("utf8"));
  const name = (form.get("name") || "").trim();
  const email = (form.get("email") || "").trim();
  const subject = (form.get("option") || "").trim();
  const message = (form.get("message") || "").trim();
  if (!name || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !message || message.length > 10000 || subject.length > 120) return NextResponse.json({ success: false, message: "Please check your name, email, and message." });
  await saveMessage({ id: crypto.randomUUID(), date: new Date().toISOString(), name, email, subject, message });
  return NextResponse.json({ success: true, message: "Thank you! Your message has been received. I will get back to you soon." });
}
