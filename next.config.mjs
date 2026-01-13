/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable proper error checking for production builds
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable image optimization for better performance
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  // Redirects for deleted routes
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/services/ai-development',
        destination: '/services#ai-chat',
        permanent: true,
      },
      {
        source: '/services/token-optimization',
        destination: '/services#token-optimization',
        permanent: true,
      },
      {
        source: '/services/documentation',
        destination: '/services#documentation',
        permanent: true,
      },
      {
        source: '/services/consulting',
        destination: '/services',
        permanent: true,
      },
    ]
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
