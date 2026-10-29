import type { NextConfig } from 'next';
import path from 'path';

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://em.realscout.com https://www.realscout.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' https://fonts.gstatic.com data:",
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://em.realscout.com https://www.realscout.com https://photos.cribflyer-proxy.com https://assets.cribflyer-proxy.com",
  "frame-src 'self' https://www.google.com https://maps.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'photos.cribflyer-proxy.com' },
      { protocol: 'https', hostname: 'assets.cribflyer-proxy.com' },
      { protocol: 'https', hostname: 'cribflyer-publicsite.s3.amazonaws.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:slug.html',
        destination: '/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
