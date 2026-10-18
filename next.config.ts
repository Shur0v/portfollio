import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "Referrer-Policy", value: "no-referrer" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
    ] }];
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/single-project-:id(\\d+).html", destination: "/projects/project-:id", permanent: true },
    ];
  },
  async rewrites() {
    return [{ source: "/mail.php", destination: "/api/contact" }];
  },
};

export default nextConfig;
