import { getLocale } from 'next-intl/server'

import NewsDetailClient from './_components/NewsDetailClient'
import { getNewsDetailBySlug } from '@/services/manar/news/getNewsDetailBySlug'

// Use Awaited<> to satisfy checkFields
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const locale = await getLocale()

  const slug = decodeURIComponent((await params).slug)

  const newsDetailData = await getNewsDetailBySlug({ locale, slug })

  return <NewsDetailClient data={newsDetailData} />
}
