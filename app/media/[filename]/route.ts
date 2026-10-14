import { readFile } from "node:fs/promises";
import path from "node:path";
import { dataDirectory } from "../../../lib/storage";

export async function GET(_request: Request, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  if (!/^[a-f0-9-]{36}\.(jpg|png|webp|gif)$/.test(filename)) return new Response("Not found", { status: 404 });
  try {
    const bytes = await readFile(path.join(dataDirectory, "uploads", filename));
    const extension = filename.split(".").pop();
    return new Response(bytes, { headers: { "Content-Type": `image/${extension === "jpg" ? "jpeg" : extension}`, "Cache-Control": "public, max-age=31536000, immutable", "X-Content-Type-Options": "nosniff" } });
  } catch { return new Response("Not found", { status: 404 }); }
}
