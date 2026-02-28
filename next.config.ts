import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ═══════════ Image Optimization ═══════════ */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "plus.unsplash.com", pathname: "/**" },
    ],
  },

  /* ═══════════ Production Optimizations ═══════════ */
  compress: true,
  poweredByHeader: false,

  /* ═══════════ Strict React ═══════════ */
  reactStrictMode: true,

  /* ═══════════ Custom Headers ═══════════ */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
