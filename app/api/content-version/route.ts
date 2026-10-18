import { getContentRevision } from "../../../lib/content-revision";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ revision: await getContentRevision() }, { headers: { "Cache-Control": "no-store" } });
}
