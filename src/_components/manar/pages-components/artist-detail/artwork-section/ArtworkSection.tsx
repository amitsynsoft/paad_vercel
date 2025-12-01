import React from 'react'
import { useTranslations } from 'next-intl'
import ArtworkCard from '@/_components/manar/_ui/cards/artwork-card/ArtworkCard'
import Section from '@/_components/manar/_ui/section/Section'

export default function ArtworkSection({ data }: { data: any }) {
  const t = useTranslations('Manar.ArtworkSection')
  return (
    <Section>
      <div className="flex justify-between mb-6">
        <h2 className="text-lg text-foreground font-semibold">{t('Artworks')}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.artworks?.map((item: any, index: number) => (
          <ArtworkCard height="h-66 md:h-125" key={index} artworkData={item} artist={data?.title} className="bg-cyan-100" />
        ))}
      </div>
    </Section>
  )
}
