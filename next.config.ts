// next.config.js
const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd && isGitHubPages ? '/yapyap-waitlist' : '',
  assetPrefix: isProd && isGitHubPages ? '/yapyap-waitlist/' : '',
  trailingSlash: true,
  images: { 
    unoptimized: true // Required for static export
  },
};

module.exports = nextConfig;