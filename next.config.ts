import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  ignoreDuringBuilds: true,
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

export default nextConfig;
