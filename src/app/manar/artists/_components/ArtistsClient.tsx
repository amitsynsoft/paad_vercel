'use client'

import React from 'react'
import { Button } from '@heroui/react'

import Section from '@/_components/manar/_ui/section/Section'
import ArtistCard from '@/_components/manar/_ui/cards/artist-card/ArtistCard'
import NoRecordFound from '@/_components/manar/_ui/no-record-found/NoRecordFound'
import ArtistsAndArtworksHeader from '@/_layouts/manar/pageHeaders/Artists&Artworks'
import { paths } from '@/navigate/paths'

export default function ArtistsClient({ data }: { data: any }) {
  return (
    <Section className="pt-8 pb-16">
      <ArtistsAndArtworksHeader
        artistTitle="Artists"
        artworkTitle="Artworks"
        artistLink={paths.manarArtists()}
        artworkLink={paths.manarArtworks()}
        actions={
          <>
            <Button variant="bordered" size="md" color="primary" href="/manar/artists" className="rounded-full font-semibold">
              Location
            </Button>
            <Button variant="bordered" size="md" color="primary" href="/manar/artworks" className="rounded-full font-semibold">
              Keywords
            </Button>
          </>
        }
      />

      {!data?.artists?.length && (
        <div className="flex justify-center items-center">
          <NoRecordFound />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">{data?.artists && data.artists.map((item: any, index: number) => <ArtistCard key={index} artistData={item} />)}</div>
    </Section>
  )
}
