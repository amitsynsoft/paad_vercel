'use client'
// components/registry.ts
import React from 'react'
import Banner from '@/_components/biennial/pages-components/Banner'
import ProgrammeCarousel from '@/_components/biennial/pages-components/ProgrammeCarousel'
import ArtistCarousel from '@/_components/biennial/pages-components/ArtistCarousel'
import ArtworkCarousel from '@/_components/biennial/pages-components/ArtworkCarousel'
import ContentRender from '@/_components/biennial/pages-components/ContentRender'
import MapView from '@/_components/biennial/pages-components/MapView'

export const HomePageRegistry: Record<string, React.FC<{ data: any }>> = {
  banner: ({ data }) => <Banner data={data} button={false} />,
  'content-render': ContentRender,
  'artwork-carousel': ArtworkCarousel,
  'artist-carousel': ArtistCarousel,
  'programme-carousel': ProgrammeCarousel,
  'map-view': MapView,
}
