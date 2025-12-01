import React from 'react'
import { useTranslations } from 'next-intl'

import ArtistCard from '@/_components/manar/_ui/cards/artist-card/ArtistCard'
import Section from '@/_components/manar/_ui/section/Section'

export default function ArtistSection({ artworkData }: { artworkData: any }) {
  const t = useTranslations('Manar.ArtistSection')
  return (
    <Section className="!pt-25 md:!pt-32">
      <h2 className="text-lg text-foreground font-semibold mb-4">{t('Artist')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 ">
        <ArtistCard artistData={artworkData?.artist} height="h-136" />
      </div>
    </Section>
  )
}
