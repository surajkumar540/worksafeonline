import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Disable React Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn2.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.worksafeonline.co.uk",
      },
      {
        protocol: "https",
        hostname: "demo2.wpopal.com",
      },
    ],
  },
};

export default nextConfig;
