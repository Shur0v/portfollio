import { database } from "../../../lib/database";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await database().query("SELECT revision FROM portfolio_content_revision WHERE singleton = true");
    return Response.json({ status: "ok" }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ status: "unavailable" }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
