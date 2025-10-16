import ArtistCard from '@/_components/manar/_ui/cards/artist-card/ArtistCard'
import Section from '@/_components/manar/_ui/section/Section'
import { useLocale } from 'next-intl'
import React from 'react'

export default function ArtistSection({ artworkData }: { artworkData: any }) {
  const locale = useLocale()
  return (
    <Section>
      {/* Hardcoded */}
      <h2 className="text-lg text-foreground font-semibold mb-4">{locale === 'en' ? 'Artists' : 'الفنانون'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 ">
        <ArtistCard artistData={artworkData?.artist} />
      </div>
    </Section>
  )
}
