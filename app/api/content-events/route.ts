import { database } from "../../../lib/database";
import { subscribeContent } from "../../../lib/content-events";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  let unsubscribe: (() => void) | undefined;
  let heartbeat: ReturnType<typeof setInterval> | undefined;
  let timeout: ReturnType<typeof setTimeout> | undefined;
  let closed = false;
  let controller: ReadableStreamDefaultController<Uint8Array> | undefined;
  let latestRevision: string | undefined;
  const encoder = new TextEncoder();
  function cleanup(closeStream = true) {
    if (closed) return;
    closed = true;
    clearInterval(heartbeat);
    clearTimeout(timeout);
    unsubscribe?.();
    request.signal.removeEventListener("abort", abort);
    if (closeStream && controller) { try { controller.close(); } catch { } }
  }
  function abort() { cleanup(); }
  function send(revision: string | null) {
    if (revision === null) { cleanup(); return; }
    latestRevision = revision;
    if (!closed && controller) controller.enqueue(encoder.encode(`data: ${JSON.stringify({ revision })}\n\n`));
  }
  request.signal.addEventListener("abort", abort, { once: true });
  try {
    if (!request.signal.aborted) unsubscribe = await subscribeContent(send);
    if (closed || request.signal.aborted) {
      unsubscribe?.(); cleanup();
      return new Response(null, { status: 499 });
    }
    const result = await database().query("SELECT revision::text FROM portfolio_content_revision WHERE singleton = true");
    const initial = result.rows[0].revision as string;
    if (!latestRevision || BigInt(initial) > BigInt(latestRevision)) latestRevision = initial;
  } catch {
    cleanup();
    return Response.json({ error: "Live connection unavailable. Retrying automatically." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
  if (closed) { unsubscribe?.(); return new Response(null, { status: 499 }); }
  const stream = new ReadableStream<Uint8Array>({
    start(output) {
      controller = output;
      send(latestRevision!);
      heartbeat = setInterval(() => {
        if (!closed) output.enqueue(encoder.encode(": heartbeat\n\n"));
      }, 15000);
      timeout = setTimeout(abort, 300000);
    },
    cancel() { cleanup(false); },
  });
  return new Response(stream, { headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache, no-store, no-transform", "X-Accel-Buffering": "no", "Connection": "keep-alive" } });
}
