const isGh = process.env.GITHUB_PAGES === 'true';
const basePath = isGh ? (process.env.NEXT_PUBLIC_BASE_PATH || '') : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

console.log('[next.config] GITHUB_PAGES=%s basePath=%s', process.env.GITHUB_PAGES, basePath);
export default nextConfig;
