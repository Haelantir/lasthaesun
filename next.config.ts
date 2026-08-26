import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Canonical URLs for this site end in a slash (`/cars/tires/low-tire-pressure/`).
  // Next then 308-redirects the slashless variant, so one problem keeps exactly one URL.
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
