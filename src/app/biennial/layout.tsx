import React, { Suspense } from 'react'
import { Metadata } from 'next'

import Header from '@/app/biennial/_layout-components/header/header'
import Footer from '@/app/biennial/_layout-components/footer/Footer'
import SkeletonLoader from '@/_components/biennial/_ui/cards/skeleton-loader/SkeletonLoader'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PAAD AE - Biennial',
    icons: {
      icon: '/images/biennial/favicon.ico',
      apple: '/images/biennial/apple-touch-icon.png',
      shortcut: '/images/biennial/favicon.ico',
    },
    description: 'PAAD AE - Biennial',
    keywords: ['Biennial'],
    openGraph: {
      title: 'PAAD AE - Biennial',
      description: 'PAAD AE - Biennial',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      title: 'PAAD AE - Biennial',
      description: 'PAAD AE - Biennial',
      card: 'summary_large_image',
    },
  }
}

export default async function BiennialLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-abcdiatype">
      <Suspense fallback={<SkeletonLoader />}>
        <Header />
      </Suspense>
      <div className="min-h-screen pb-12">{children}</div>
      <Footer />
    </div>
  )
}
