import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.supabase.co' },
      { protocol: 'https', hostname: '**.supabase.in' },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',           value: 'DENY' },
          { key: 'X-Content-Type-Options',     value: 'nosniff' },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',         value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      // Stripe webhook: allow raw body
      {
        source: '/api/stripe/webhook',
        headers: [{ key: 'Cache-Control', value: 'no-store' }],
      },
    ];
  },

  async rewrites() {
    return {
      beforeFiles: [
        // ── Subdomain routing ──────────────────────────────────────────────
        // Future subdomain (e.g. app.vaspdigital.com) can be routed here.
        // Example: rewrite app subdomain to /app/* internally
        // {
        //   source: '/:path*',
        //   has: [{ type: 'host', value: 'app.vaspdigital.com' }],
        //   destination: '/app/:path*',
        // },
      ],
      afterFiles: [],
      fallback: [],
    };
  },

  async redirects() {
    return [
      { source: '/home',         destination: '/',                    permanent: true },
      { source: '/seo',          destination: '/services/seo',        permanent: true },
      { source: '/google-ads',   destination: '/services/google-ads', permanent: true },
      { source: '/local-seo',    destination: '/services/local-seo',  permanent: true },
      { source: '/link-building',destination: '/services/link-building', permanent: true },
      // Payment alias
      { source: '/payment',      destination: '/services',            permanent: false },
    ];
  },
};

export default nextConfig;
