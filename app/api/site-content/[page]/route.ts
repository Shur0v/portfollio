import { NextResponse } from "next/server";
import { authenticated, authorizeMutation } from "../../../../lib/auth";
import { readJson } from "../../../../lib/request-body";
import { ContentConflict, getSiteSnapshot, saveSitePage } from "../../../../lib/site-content";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ page: string }> }) {
  if (!await authenticated()) return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  const record = (await getSiteSnapshot()).pages[(await params).page];
  if (!record) return NextResponse.json({ error: "Content page not found." }, { status: 404 });
  return NextResponse.json({ record }, { headers: { "Cache-Control": "no-store" } });
}

export async function PUT(request: Request, { params }: { params: Promise<{ page: string }> }) {
  if (!await authorizeMutation(request)) return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  try {
    const data = await readJson(request, 512000);
    const record = await saveSitePage((await params).page, data.content, data.version);
    return NextResponse.json({ record }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to save content." }, { status: error instanceof ContentConflict ? 409 : 400 });
  }
}
