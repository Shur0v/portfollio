import { createHmac, createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const sessionCookie = "portfolio-session";
export const sessionAge = 60 * 60 * 12;

export function authConfigured() {
  return (process.env.ADMIN_PASSWORD?.length || 0) >= 16 && (process.env.SESSION_SECRET?.length || 0) >= 32;
}

export function matchesPassword(password: string) {
  if (!authConfigured()) return false;
  return timingSafeEqual(createHash("sha256").update(password).digest(), createHash("sha256").update(process.env.ADMIN_PASSWORD!).digest());
}

function signature(payload: string) {
  return createHmac("sha256", process.env.SESSION_SECRET!).update(payload).digest("hex");
}

export function createSession() {
  const payload = `${Date.now() + sessionAge * 1000}.${randomBytes(24).toString("hex")}`;
  return `${payload}.${signature(payload)}`;
}

export async function authenticated() {
  if (!authConfigured()) return false;
  const token = (await cookies()).get(sessionCookie)?.value || "";
  const [expiry, nonce, mac, extra] = token.split(".");
  if (extra || !/^\d+$/.test(expiry || "") || !/^[a-f0-9]{48}$/.test(nonce || "") || !/^[a-f0-9]{64}$/.test(mac || "") || Number(expiry) <= Date.now()) return false;
  return timingSafeEqual(Buffer.from(mac, "hex"), Buffer.from(signature(`${expiry}.${nonce}`), "hex"));
}

export function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const expected = process.env.APP_ORIGIN || new URL(request.url).origin;
  return origin === expected;
}

const attempts = new Map<string, { count: number; expires: number }>();

export function rateLimited(key: string, limit: number, milliseconds: number) {
  const now = Date.now();
  for (const [entry, value] of attempts) if (value.expires <= now) attempts.delete(entry);
  if (attempts.size >= 10000 && !attempts.has(key)) return true;
  const value = attempts.get(key) || { count: 0, expires: now + milliseconds };
  value.count++;
  attempts.set(key, value);
  return value.count > limit;
}

export async function authorizeMutation(request: Request) {
  return sameOrigin(request) && await authenticated();
}
