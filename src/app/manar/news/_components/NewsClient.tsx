'use client'

import React from 'react'
import { useLocale } from 'next-intl'

import Section from '@/_components/manar/_ui/section/Section'
import PageHeader from '@/_components/manar/pageHeaders/PageHeader'
import NewsCard from '@/_components/manar/_ui/cards/news-card/NewsCard'
import NoRecordFound from '@/_components/manar/_ui/no-record-found/NoRecordFound'
import { NewsDTO } from '@/dto/manar/NewsPage.dto'

export default function NewsClient({ data }: { data: NewsDTO[] }) {
  const locale = useLocale()

  if (!data) return <NoRecordFound />

  return (
    <Section className="!pt-0 pb-16">
      <PageHeader title={'News'} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-[30px] md:!gap-y-20 md:gap-x-8">
        {data?.map((item: NewsDTO, index: number) => (
          <NewsCard key={index + locale} newsData={item} className="hover:bg-warning" height={'h-101'} />
        ))}
      </div>
    </Section>
  )
}

