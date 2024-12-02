import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true, // Disable image optimization for testing
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn2.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "customiseitnow.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.clothes2order.com",
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
