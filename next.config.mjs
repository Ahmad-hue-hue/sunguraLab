/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root — there are unrelated lockfiles further up the tree.
  outputFileTracingRoot: import.meta.dirname,
  images: {
    // All imagery is self-hosted under /public/assets — no remote patterns needed.
    // SVG logos/brand marks render via next/image; the optimizer rejects SVG
    // without this flag, so headers and hero glows would stay blank.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
