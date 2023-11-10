/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'tailwindui.com',
      'di-uploads-pod9.dealerinspire.com',
    ],
  },
};

module.exports = nextConfig;
