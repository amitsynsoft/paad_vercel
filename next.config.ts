import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const config: NextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '1000logos.net',
      },
      {
        protocol: 'https',
        hostname: 'resources.dct.gov.ae',
      },
      {
        protocol: 'https',
        hostname: 'resources.dctt.gov.ae',
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

  async headers() {
    return [
      {
        source: '/(.*).(png|jpg|jpeg|svg|mp4)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default withNextIntl(config)
