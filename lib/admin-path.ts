import { createHash, timingSafeEqual } from "node:crypto";

export function validAdminKey(key: string) {
  const expected = process.env.ADMIN_ROUTE_KEY || "";
  if (!/^[a-f0-9]{64}$/.test(expected) || !/^[a-f0-9]{64}$/.test(key)) return false;
  return timingSafeEqual(createHash("sha256").update(key).digest(), createHash("sha256").update(expected).digest());
}

export function adminPath(key: string, destination = "") {
  return `/studio/${key}${destination ? `/${destination}` : ""}`;
}
