import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
