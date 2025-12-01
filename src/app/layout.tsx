import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import { ABCDiatypeFont } from '@/config/fonts'
import { NextIntlClientProvider } from 'next-intl'
import 'swiper/css'
import 'swiper/css/pagination'
import './globals.css'

import ScrollToTop from '@/_components/_globalUI/scroll-top/ScrollToTop'
import ProviderBProgressBar from '@/providers/bprogress-bar/ProviderBProgressBar'
import { ProviderHeroUI } from '@/providers/heroui/ProviderHeroUI'
import { DirectionProvider } from '@/context/direction-provider/DirectionProvider.context'
import { ReduxProvider } from '@/providers/redux/ReduxProvider'
import { getDirection } from '@/utils'
import PathnameListener from '@/_components/_globalUI/pathname-listener/PathnameListener.component'

export const metadata: Metadata = {
  title: 'PAAD AE - Manar Abu Dhabi',
  description: 'Manar Abu Dhabi',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  return (
    <html className={`antialiased`} lang={locale} dir={getDirection(locale)}>
      <body className={`${ABCDiatypeFont.variable} antialiased`} suppressHydrationWarning={true}>
        <ReduxProvider>
          <NextIntlClientProvider locale={locale}>
            <PathnameListener />
            <DirectionProvider>
              <ScrollToTop />
              <ProviderHeroUI>
                <ProviderBProgressBar>{children}</ProviderBProgressBar>
              </ProviderHeroUI>
            </DirectionProvider>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
