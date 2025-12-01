'use client'
import React from 'react'
import { useLocale, useTranslations } from 'next-intl'

import Section from '@/_components/manar/_ui/section/Section'
import ArtworkCard from '@/_components/manar/_ui/cards/artwork-card/ArtworkCard'
import ArtistsAndArtworksHeader from '@/_components/manar/pageHeaders/Artists&Artworks'
import { paths } from '@/navigate/paths'
import ArtworkFilterOptions from './ArtworkFilterOptions.component'
import NoRecordFound from '@/_components/manar/_ui/no-record-found/NoRecordFound'

export default function ArtworksClient({ artworksData }: { artworksData: any }) {
  const locale = useLocale()
  const t = useTranslations('Manar.PageHeaders')
  const rf = useTranslations('Manar.ProgrammeSection.NoRecordFound')

  return (
    <Section className="container pt-8 pb-16">
      {/* Todo: create a header common */}
      <ArtistsAndArtworksHeader artistTitle={t('artists')} artworkTitle={t('artworks')} artistLink={paths.manarArtists()} artworkLink={paths.manarArtworks()} actions={<ArtworkFilterOptions />} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-17">
        {artworksData?.artworks?.map((artwork: any, index: number) => (
          <ArtworkCard key={`${locale}_${index}_${artwork?.artist?.name}`} artworkData={artwork} artist={artwork?.artist?.name || ''} className="bg-cyan-100" height="h-80" />
        ))}
      </div>

      {artworksData?.artworks?.length === 0 && <NoRecordFound title={rf('title')} message={rf('message')} />}
    </Section>
  )
}
