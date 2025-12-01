import React from 'react'
import { getLocale } from 'next-intl/server'

import HeaderClient from './HeaderClient/HeaderClient.component'
import { getHeaderBiennial } from '@/services/biennial/layout/getLayout'

export default async function Header() {
  const locale = await getLocale()
  const headerData = await getHeaderBiennial(locale)

  return <HeaderClient data={headerData} />
}
