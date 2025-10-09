import React from 'react'
import { getLocale } from 'next-intl/server'

import Header from '@/_layouts/biennial/header/header'
import Footer from '@/_layouts/biennial/footer/Footer'
import { getFooterBiennial, getHeaderBiennial } from '@/services/biennial/getLayout'

export default async function BiennialLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  const headerData = await getHeaderBiennial(locale)
  const footerData = await getFooterBiennial(locale)

  return (
    <div>
      <Header data={headerData} />
      <div className="min-h-screen">{children}</div>
      <Footer data={footerData} />
    </div>
  )
}
