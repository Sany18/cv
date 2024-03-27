/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH ?? '/cv',
  images: { unoptimized: true },
  output: 'export',
};

export default nextConfig;
