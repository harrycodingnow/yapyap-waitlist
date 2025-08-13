import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

// CHANGE THIS: repo name only if you're deploying under /REPO
const repoName = 'yapyap-waitlist'; // '' if using USERNAME.github.io (user site)

const nextConfig: NextConfig = {
  output: 'export',          // enables static export
  distDir: 'build',          // export folder
  images: { unoptimized: true }, // GH Pages doesn't have the Next image optimizer
  // These two are only needed when deploying under /REPO
  basePath: isProd && repoName ? `/${repoName}` : undefined,
  assetPrefix: isProd && repoName ? `/${repoName}/` : undefined,
};

export default nextConfig;
