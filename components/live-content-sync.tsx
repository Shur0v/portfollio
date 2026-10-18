"use client";

import { useEffect } from "react";

export function LiveContentSync({ revision }: { revision: string }) {
  useEffect(() => {
    let active = true;
    let pending = false;
    let reloading = false;
    const controller = new AbortController();
    async function check() {
      if (document.hidden || pending || reloading) return;
      pending = true;
      try {
        const response = await fetch("/api/content-version", { cache: "no-store", signal: controller.signal });
        if (!response.ok) return;
        const result = await response.json();
        if (active && result.revision !== revision && typeof result.revision === "string") {
          if (document.activeElement?.closest("#tt-contact-form") || Array.from(document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("#tt-contact-form [name]")).some(field => field.value.trim())) return;
          reloading = true;
          sessionStorage.setItem("portfolio-live-scroll", JSON.stringify({ path: location.pathname, scroll: window.scrollY }));
          location.reload();
        }
      } catch { }
      finally { pending = false; }
    }
    const timer = setInterval(check, 10000);
    window.addEventListener("focus", check);
    document.addEventListener("visibilitychange", check);
    void check();
    return () => { active = false; controller.abort(); clearInterval(timer); window.removeEventListener("focus", check); document.removeEventListener("visibilitychange", check); };
  }, [revision]);
  return null;
}
