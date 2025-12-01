'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

import Section from '@/_components/manar/_ui/section/Section'
import BackButton from '@/_components/manar/pageHeaders/BackButton'
import { paths } from '@/navigate/paths'
import NewsDetailSection from '@/_components/manar/pages-components/news-detail/news-detail-section/NewsDetailSection'

export default function NewsDetailClient({ data }: { data: any }) {
  const t = useTranslations('Manar.NewsDetail')
  return (
    <div>
      <Section className="!pt-7 md:!pt-10  md:!pb-16">
        <div className="max-w-[906px] mx-auto">
          {/* harcoded */}
          <BackButton label={t('AllNews')} link={paths.manarNews()} />

          {/* --- News Detail Section --- */}
          <NewsDetailSection newsData={data} />
        </div>
      </Section>
    </div>
  )
}
