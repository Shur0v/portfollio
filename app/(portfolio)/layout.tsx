import type { ReactNode } from "react";

const stylesheets = [
  "https://fonts.googleapis.com/css2?family=Cascadia+Mono:wght@200..700&display=swap",
  "/assets/vendor/fontawesome/css/all.min.css",
  "/assets/vendor/fancybox/css/fancybox.css",
  "/assets/vendor/swiper/css/swiper-bundle.min.css",
  "/assets/css/helper.css",
  "/assets/css/elements.css",
  "/assets/css/theme.css",
  "/assets/css/theme-dark.css",
];

export default async function PortfolioLayout({ children }: { children: ReactNode }) {
  return <>
    {stylesheets.map(href => <link key={href} rel="stylesheet" href={href} precedence="portfolio" />)}
    {children}
  </>;
}
