import React from 'react'
import ArtworksClient from './_components/ArtworksClient'
import { getArtworks } from '@/services/manar/artworks/getArtworks'
import { getLocale } from 'next-intl/server'

export default async function page() {
  const locale = await getLocale()
  const artworks = await getArtworks({ locale })
  return (
    <>
      <ArtworksClient artworksData={artworks} />
    </>
  )
}
