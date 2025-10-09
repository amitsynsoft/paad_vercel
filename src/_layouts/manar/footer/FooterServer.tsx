import React from 'react'
import FooterClient from './FooterClient/FooterClient'
import { getLocale } from 'next-intl/server'
import { getFooterManar } from '@/services/manar/layout/getLayout'

export default async function FooterServer() {
  const locale = await getLocale()
  const footerData = await getFooterManar({ locale })

  return <FooterClient footerData={footerData} />
}
