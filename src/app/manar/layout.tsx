import { Metadata } from 'next'
import React, { Suspense } from 'react'

import HeaderServer from '@/app/manar/_layout-components/header/HeaderServer'
import Footer from '@/app/manar/_layout-components/footer/Footer'
import SkeletonLoader from '@/_components/manar/_ui/skeleton-loader/SkeletonLoader'
import CalendarDrawer from '@/_components/manar/_ui/calender-drawer/CalenderDrawer'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PAAD AE - Manar Abu Dhabi',
    icons: {
      icon: '/images/manar/favicon.ico',
      apple: '/images/manar/apple-touch-icon.png',
      shortcut: '/images/manar/favicon.ico',
    },
    description: 'PAAD AE - Manar Abu Dhabi',
    keywords: ['Manar'],
    openGraph: {
      title: 'PAAD AE - Manar Abu Dhabi',
      description: 'PAAD AE - Manar Abu Dhabi',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      title: 'PAAD AE - Manar Abu Dhabi',
      description: 'PAAD AE - Manar Abu Dhabi',
      card: 'summary_large_image',
    },
  }
}

export default async function ManarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-abcdiatype">
      <Suspense fallback={<SkeletonLoader className="h-16 mb-4" />}>
        <HeaderServer />
      </Suspense>

      <div className="min-h-screen">
        {children}
        <CalendarDrawer />
      </div>

      <Suspense fallback={<SkeletonLoader className="h-16" />}>
        <Footer />
      </Suspense>
    </div>
  )
}
