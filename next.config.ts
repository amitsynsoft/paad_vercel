import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const config: NextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  experimental: { optimizeCss: false },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resources.dct.gov.ae',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'paad.blob.core.windows.net',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/manar',
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(config)
