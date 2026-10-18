"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LiveContentSync({ revision }: { revision: string }) {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname !== "/" && pathname !== "/privacy" && !pathname.startsWith("/projects/")) return;
    let active = true;
    let pending = false;
    let reloading = false;
    let connected = false;
    let pendingRevision = revision;
    let lastFallback = 0;
    const controller = new AbortController();
    function update(next: string) {
      if (!active || reloading || document.hidden || next === revision) return;
      pendingRevision = next;
      if (document.activeElement?.closest("#tt-contact-form") || Array.from(document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("#tt-contact-form [name]")).some(field => field.value.trim())) return;
      reloading = true;
      try { sessionStorage.setItem("portfolio-live-scroll", JSON.stringify({ path: location.pathname, scroll: window.scrollY })); } catch { }
      location.reload();
    }
    async function check() {
      if (document.hidden || pending || reloading) return;
      pending = true;
      try {
        const response = await fetch("/api/content-version", { cache: "no-store", signal: controller.signal });
        if (!response.ok) return;
        const result = await response.json();
        if (typeof result.revision === "string") update(result.revision);
      } catch { }
      finally { pending = false; }
    }
    const events = new EventSource("/api/content-events");
    events.onopen = () => { connected = true; };
    events.onerror = () => { connected = false; };
    events.onmessage = event => {
      try { const data = JSON.parse(event.data); if (typeof data.revision === "string") update(data.revision); } catch { }
    };
    const timer = setInterval(() => {
      if (pendingRevision !== revision) update(pendingRevision);
      if (!connected && Date.now() - lastFallback >= 5000) { lastFallback = Date.now(); void check(); }
    }, 1000);
    window.addEventListener("focus", check);
    document.addEventListener("visibilitychange", check);
    void check();
    return () => { active = false; controller.abort(); events.close(); clearInterval(timer); window.removeEventListener("focus", check); document.removeEventListener("visibilitychange", check); };
  }, [revision, pathname]);
  return null;
}
