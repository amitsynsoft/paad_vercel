'use client'

import React from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { ArrowLeft } from 'lucide-react'

import Section from '@/_components/manar/_ui/section/Section'
import { paths } from '@/navigate/paths'
import MediaPlayer from '@/_components/manar/media-player/MediaPlayer'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import { ArtistProfile } from '@/_components/manar/pages-components/artist-detail/artist-profile-section/ArtistProfile'
import MapArtistDetail from '@/_components/manar/pages-components/artist-detail/artist-detail-map/MapArtistDetail'
import ArtworkSection from '@/_components/manar/pages-components/artist-detail/artwork-section/ArtworkSection'

export default function ArtistDetailClient({ data }: { data: any }) {
  const locale = useLocale()
  return (
    <div>
      <Section className="pt-8 pb-16 ">
        {/* TODO: hardcoded */}
        <ManarButton as={Link} color="primaryOutlineHover" href={paths.manarArtists()}>
          <ArrowLeft />
          {locale === 'ar' ? 'جميع الفنانين' : 'All Artists'}
        </ManarButton>

        <ArtistProfile
          name={data?.title}
          about={data?.about}
          residence={data?.location?.title}
          tags={data?.tags}
          workPlace={data?.workPlace}
          imageUrl={data?.images?.card?.url}
          description={data?.description}
          backLinkUrl={paths.manarArtists()}
        />
      </Section>

      {/* artworks */}
      {Boolean(data?.artworks?.length) && <ArtworkSection artworkData={data?.artworks} />}

      {/* Map */}
      {Boolean(data?.artworks?.length) && <MapArtistDetail artworks={data?.artworks} />}

      {/* Media */}
      {Boolean(data?.media?.length) && <MediaPlayer />}

      {/* previous artworks */}
      {/* <Section>
        <div className="flex justify-between mb-6">
          <h2 className="text-3xl text-foreground font-semibold">Previous Artworks</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artworks.map((item, index) => (
            <ArtistCard key={index} artistData={item} />
          ))}
        </div>
      </Section> */}
    </div>
  )
}
