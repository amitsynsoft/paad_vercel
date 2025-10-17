import ArtworkCard from '@/_components/manar/_ui/cards/artwork-card/ArtworkCard'
import Section from '@/_components/manar/_ui/section/Section'
import React from 'react'
import { useLocale } from 'next-intl'

export default function ArtworkSection({ artworkData }: { artworkData: any }) {
  const locale = useLocale()
  return (
    <Section>
      <div className="flex justify-between mb-6">
        {/* TODO: hardcoded */}
        <h2 className="text-lg text-foreground font-semibold">{locale === 'ar' ? 'التركيبات الفنية' : 'Previous artworks'}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {artworkData?.map((item: any, index: number) => (
          <ArtworkCard height="h-66 md:h-125" key={index} artworkData={item} artist={artworkData?.location?.name} className="bg-cyan-100" />
        ))}
      </div>
    </Section>
  )
}
