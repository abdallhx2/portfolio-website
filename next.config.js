/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Optimize for better performance on slow filesystems
    optimizePackageImports: ['lucide-react', '@heroicons/react'],
  },
  // Skip trailing slash to improve loading
  trailingSlash: false,
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optimize compilation
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig