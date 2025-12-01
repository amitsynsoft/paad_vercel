import React from 'react'
import { getLocale } from 'next-intl/server'

import ProgrammeDetailClient from './_components/ProgrammeDetailClient'
import { getProgrammeDetailBySlug } from '@/services/manar/programme/getProgrammeDetailBySlug'

// Use Awaited<> to satisfy checkFields
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const locale = await getLocale()

  const slug = decodeURIComponent((await params).slug)

  const programmeDetailData = await getProgrammeDetailBySlug({ locale, slug })

  return <ProgrammeDetailClient data={programmeDetailData} />
}
