import { NextResponse } from "next/server";
import { authConfigured, createSession, matchesPassword, matchesUsername, rateLimited, sameOrigin, sessionAge, sessionCookie } from "../../../../lib/auth";
import { validAdminKey } from "../../../../lib/admin-path";
import { readJson } from "../../../../lib/request-body";

type Context = { params: Promise<{ key: string }> };

export async function POST(request: Request, context: Context) {
  if (!validAdminKey((await context.params).key)) return new Response("Not found", { status: 404 });
  if (!sameOrigin(request)) return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
  if (!authConfigured()) return NextResponse.json({ error: "Admin access is not configured." }, { status: 503 });
  if (rateLimited("login", 15, 15 * 60 * 1000)) return NextResponse.json({ error: "Too many attempts. Try again in 15 minutes." }, { status: 429 });
  const data = await readJson(request, 4096).catch(() => null);
  const valid = typeof data?.username === "string" && data.username.length <= 120 && typeof data.password === "string" && data.password.length <= 1024 && matchesUsername(data.username) && matchesPassword(data.password);
  if (!valid) return NextResponse.json({ error: "Incorrect ID or password." }, { status: 401 });
  const response = NextResponse.json({ success: true });
  response.cookies.set(sessionCookie, createSession(), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: sessionAge });
  return response;
}

export async function DELETE(request: Request, context: Context) {
  if (!validAdminKey((await context.params).key)) return new Response("Not found", { status: 404 });
  if (!sameOrigin(request)) return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
  const response = NextResponse.json({ success: true });
  response.cookies.delete(sessionCookie);
  return response;
}
