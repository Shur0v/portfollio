export async function readLimitedBody(request: Request, limit: number) {
  if (Number(request.headers.get("content-length")) > limit) throw new Error("Request is too large.");
  const reader = request.body?.getReader();
  if (!reader) throw new Error("Request body is missing.");
  const chunks: Uint8Array[] = [];
  let total = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > limit) {
        await reader.cancel();
        throw new Error("Request is too large.");
      }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  return Buffer.concat(chunks);
}

export async function readJson(request: Request, limit = 32000) {
  const value = JSON.parse((await readLimitedBody(request, limit)).toString("utf8"));
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid request.");
  return value as Record<string, unknown>;
}
