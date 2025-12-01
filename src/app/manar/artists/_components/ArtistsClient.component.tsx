'use client'

import React from 'react'
import { useLocale } from 'next-intl'

import Section from '@/_components/manar/_ui/section/Section'
import ArtistFilterOptions from './ArtistFilterOptions.component'
import ArtistCard from '@/_components/manar/_ui/cards/artist-card/ArtistCard'
import NoRecordFound from '@/_components/manar/_ui/no-record-found/NoRecordFound'
import ArtistsAndArtworksHeader from '@/_components/manar/pageHeaders/Artists&Artworks'
import { paths } from '@/navigate/paths'
import { useTranslations } from 'next-intl'

export default function ArtistsClient({ data }: { data: any }) {
  const locale = useLocale()
  const t = useTranslations('Manar.PageHeaders')
  const rf = useTranslations('Manar.ProgrammeSection.NoRecordFound')

  return (
    <Section className="pt-8 pb-16">
      <ArtistsAndArtworksHeader artistTitle={t('artists')} artworkTitle={t('artworks')} artistLink={paths.manarArtists()} artworkLink={paths.manarArtworks()} actions={<ArtistFilterOptions />} />

      {!data?.artists?.length && (
        <div className="flex justify-center items-center">
          <NoRecordFound title={rf('title')} message={rf('message')} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-6 md:gap-y-17 md:gap-x-8">
        {data?.artists && data?.artists.map((item: any, index: number) => <ArtistCard height="h-100" key={`${item?.title}_${index}_${locale}`} artistData={item} />)}
      </div>
    </Section>
  )
}
