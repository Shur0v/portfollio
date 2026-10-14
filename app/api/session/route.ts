import { NextResponse } from "next/server";
import { authConfigured, createSession, matchesPassword, rateLimited, sameOrigin, sessionAge, sessionCookie } from "../../../lib/auth";
import { readJson } from "../../../lib/request-body";

export async function POST(request: Request) {
  if (!sameOrigin(request)) return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
  if (!authConfigured()) return NextResponse.json({ error: "Set ADMIN_PASSWORD and SESSION_SECRET in .env.local first." }, { status: 503 });
  if (rateLimited("login", 15, 15 * 60 * 1000)) return NextResponse.json({ error: "Too many attempts. Try again in 15 minutes." }, { status: 429 });
  const data = await readJson(request, 4096).catch(() => null);
  if (typeof data?.password !== "string" || data.password.length > 1024 || !matchesPassword(data.password)) return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  const response = NextResponse.json({ success: true });
  response.cookies.set(sessionCookie, createSession(), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: sessionAge });
  return response;
}

export async function DELETE(request: Request) {
  if (!sameOrigin(request)) return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
  const response = NextResponse.json({ success: true });
  response.cookies.delete(sessionCookie);
  return response;
}
