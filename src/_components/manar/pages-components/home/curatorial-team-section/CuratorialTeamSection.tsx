'use client'

import React from 'react'

import Section from '@/_components/manar/_ui/section/Section'
import { useLocale } from 'next-intl'
import CuratorialCard from '@/_components/manar/_ui/cards/curatorial-card/CuratorialCard'

export default function CuratorialTeamSection({ data }: { data: any }) {
  const locale = useLocale()
  return (
    <Section>
      <div className="flex justify-between mb-8">
        <h2 className="text-lg text-foreground font-semibold">{data?.title}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        {data?.curators?.map((curator: any, index: number) => (
          <CuratorialCard key={index} curatorialData={curator} />
        ))}
      </div>
    </Section>
  )
}
