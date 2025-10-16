'use client'
import React from 'react'
import { Button } from '@heroui/react'

import Section from '@/_components/manar/_ui/section/Section'
import ArtworkCard from '@/_components/manar/_ui/cards/artwork-card/ArtworkCard'
import ArtistsAndArtworksHeader from '@/_layouts/manar/pageHeaders/Artists&Artworks'
import { paths } from '@/navigate/paths'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import Link from 'next/link'

export default function ArtworksClient({ artworksData }: { artworksData: any }) {
  return (
    <Section className="container pt-8 pb-16">
      {/* Todo: create a header common */}
      <ArtistsAndArtworksHeader
        artistTitle="Artists"
        artworkTitle="Artworks"
        artistLink={paths.manarArtists()}
        artworkLink={paths.manarArtworks()}
        actions={
          <>
            {/* <ManarButton as={Link} color="primaryOutlineHover" href={'#'}>
              Location
            </ManarButton>
            <ManarButton as={Link} color="primaryOutlineHover" href={'#'}>
              Keywords
            </ManarButton> */}
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {artworksData?.artworks?.map((artwork: any, index: number) => (
          <ArtworkCard key={index} artworkData={artwork} className="bg-cyan-100" />
        ))}
      </div>
    </Section>
  )
}
