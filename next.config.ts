import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ═══════════ Image Optimization ═══════════ */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
    ],
    // Netlify handles image optimization via its CDN
    unoptimized: process.env.NETLIFY === "true",
  },

  /* ═══════════ Production Optimizations ═══════════ */
  compress: true,
  poweredByHeader: false,

  /* ═══════════ Strict React ═══════════ */
  reactStrictMode: true,

  /* ═══════════ Environment-based config ═══════════ */
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_BASE_URL || "https://safetypro.netlify.app",
  },

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
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
