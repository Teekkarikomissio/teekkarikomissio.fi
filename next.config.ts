import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Include the homepage's 300px cards and their 2x density variant.
    imageSizes: [32, 48, 64, 96, 128, 256, 300, 384, 600],
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
      {
        source: '/config.yml',
        destination: '/admin/config.yml',
      },
    ]
  },
}

export default nextConfig
