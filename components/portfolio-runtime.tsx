"use client";

import { useEffect } from "react";

const scripts = [
  "/assets/vendor/jquery/jquery.min.js", "/assets/vendor/gsap/gsap.min.js",
  "/assets/vendor/gsap/ScrollSmoother.min.js", "/assets/vendor/gsap/ScrollToPlugin.min.js",
  "/assets/vendor/gsap/ScrollTrigger.min.js", "/assets/vendor/gsap/Flip.min.js",
  "/assets/vendor/gsap/SplitText.min.js", "/assets/vendor/fancybox/js/fancybox.umd.js",
  "/assets/vendor/swiper/js/swiper-bundle.min.js", "/assets/js/elements.js", "/assets/js/theme.js",
];
let initialization: Promise<void> | undefined;

export function usePortfolioRuntime() {
  useEffect(() => {
    initialization ??= (async () => {
      document.body.id = "body";
      document.body.classList.add("tt-transition", "tt-magic-cursor", "tt-smooth-scroll");
      document.body.style.setProperty("--tt-bg-pattern", "none");
      for (const src of scripts) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = false;
          script.onload = () => {
            script.dataset.loaded = "true";
            resolve();
          };
          script.onerror = () => reject(new Error(`Unable to load ${src}`));
          document.body.appendChild(script);
        });
      }
      if (document.readyState === "complete") window.dispatchEvent(new Event("load"));
    })();
    initialization.catch(error => {
      console.error(error);
      document.getElementById("tt-page-transition")?.remove();
    });
  }, []);
}
