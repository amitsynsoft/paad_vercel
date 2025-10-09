import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getLocale } from 'next-intl/server'
import { ABCDiatypeFont } from '@/config/fonts'
import { NextIntlClientProvider } from 'next-intl'
import 'swiper/css'
import './globals.css'
import 'swiper/css/pagination'

import ScrollToTop from '@/_components/_globalUI/ScrollToTop'
import { ProviderHeroUI } from '@/providers/heroui/ProviderHeroUI'
import { DirectionProvider } from '@/context/direction-provider/DirectionProvider.context'
import { ReduxProvider } from '@/providers/redux/ReduxProvider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PAAD AE - Dynamic Theming App',
  description: 'A Next.js application with dynamic theming support for multiple routes',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  return (
    <html className={`antialiased`} lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.variable} ${ABCDiatypeFont.variable} antialiased`} suppressHydrationWarning={true}>
        <ReduxProvider>
          <NextIntlClientProvider locale={locale}>
            <DirectionProvider>
              <ScrollToTop />
              <ProviderHeroUI>{children}</ProviderHeroUI>
            </DirectionProvider>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
