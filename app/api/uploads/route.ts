import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { authorizeMutation } from "../../../lib/auth";
import { dataDirectory } from "../../../lib/storage";
import { readLimitedBody } from "../../../lib/request-body";

export async function POST(request: Request) {
  if (!await authorizeMutation(request)) return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  if (Number(request.headers.get("content-length")) > 11 * 1024 * 1024) return NextResponse.json({ error: "Maximum upload size is 10 MB." }, { status: 413 });
  try {
    const bytes = await readLimitedBody(request, 11 * 1024 * 1024);
    const boundedRequest = new Request(request.url, { method: "POST", headers: request.headers, body: bytes });
    const file = (await boundedRequest.formData()).get("file");
    if (!(file instanceof File) || file.size === 0 || file.size > 10 * 1024 * 1024) throw new Error("Choose an image smaller than 10 MB.");
    const buffer = Buffer.from(await file.arrayBuffer());
    let extension = "";
    if (buffer.subarray(0, 3).equals(Buffer.from([255, 216, 255]))) extension = "jpg";
    else if (buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) extension = "png";
    else if (["GIF87a", "GIF89a"].includes(buffer.toString("ascii", 0, 6))) extension = "gif";
    else if (buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") extension = "webp";
    if (!extension) throw new Error("Only JPG, PNG, GIF, and WebP images are supported.");
    const filename = `${randomUUID()}.${extension}`;
    await mkdir(path.join(dataDirectory, "uploads"), { recursive: true });
    await writeFile(path.join(dataDirectory, "uploads", filename), buffer, { flag: "wx" });
    return NextResponse.json({ url: `/media/${filename}` }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Upload failed." }, { status: 400 });
  }
}
