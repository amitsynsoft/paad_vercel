'use client'

import React from 'react'

import MediaPlayer from '@/_components/manar/media-player/MediaPlayer'
import MapArtistDetail from '@/_components/manar/pages-components/artist-detail/artist-detail-map/MapArtistDetail'
import ArtworkSection from '@/_components/manar/pages-components/artist-detail/artwork-section/ArtworkSection'
import { ArtistProfile } from '@/_components/manar/pages-components/artist-detail/artist-profile-section/ArtistProfile'

export default function ArtistDetailClient({ data }: { data: any }) {
  return (
    <div>
      <ArtistProfile
        name={data?.title}
        about={data?.about}
        residence={data?.location?.title}
        tags={data?.tags}
        workPlace={data?.workPlace}
        imageUrl={data?.images?.card?.url}
        description={data?.description}
        markdown={data?.markdown}
      />

      {/* artworks */}
      {Boolean(data?.artworks?.length) && <ArtworkSection data={data} />}

      {/* Map */}
      {Boolean(data?.artworks?.length) && <MapArtistDetail artworks={data?.artworks} />}

      {/* Media */}
      {Boolean(data?.media?.length) && <MediaPlayer />}
    </div>
  )
}
