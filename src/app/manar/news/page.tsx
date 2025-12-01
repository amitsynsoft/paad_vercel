import React from 'react'

import NewsClient from './_components/NewsClient'
import { getLocale } from 'next-intl/server'
import { getNews } from '@/services/manar/news/getNews'
import type { NewsDTO } from '@/dto/manar/NewsPage.dto'
import NoRecordFound from '@/_components/manar/_ui/no-record-found/NoRecordFound'

export default async function Page() {
  const locale = await getLocale()
  const newsData: NewsDTO[] = await getNews({ locale })

  if (!newsData) return <NoRecordFound />
  return <NewsClient data={newsData} />
}
