import React from 'react'
import { getLocale } from 'next-intl/server'

import FooterClient from './FooterClient/FooterClient.component'
import { getFooterBiennial } from '@/services/biennial/layout/getLayout'

export default async function Footer() {
  const locale = await getLocale()
  const footerData = await getFooterBiennial(locale)

  return <FooterClient data={footerData} />
}
