/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH ?? '/cv',
  output: 'export',
};

export default nextConfig;
