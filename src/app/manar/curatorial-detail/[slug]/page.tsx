import React from 'react'
import { getLocale } from 'next-intl/server'

import CuratorialDetailClient from './_components/CuratorialDetailClient'
import { getCuratorialDetailBySlug } from '@/services/manar/curatorial/getCuratorialDetailBySlug'

// Use Awaited<> to satisfy checkFields
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const locale = await getLocale()

  const slug = decodeURIComponent((await params).slug)

  const curatorialDetailData = await getCuratorialDetailBySlug({ locale, slug })
  return <CuratorialDetailClient data={curatorialDetailData} />
}
