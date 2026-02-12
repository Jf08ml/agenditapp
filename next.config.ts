import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },

  async redirects() {
    return [
      // www → non-www (elimina "Página con redirección" duplicada)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.agenditapp.com" }],
        destination: "https://agenditapp.com/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
