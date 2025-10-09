import React from 'react'
import ArtistsClient from './_components/ArtistsClient'
import { getArtists } from '@/services/manar/artists/getArtists'
import { getLocale } from 'next-intl/server'

export default async function Page() {
  const locale = await getLocale()
  const artistData = await getArtists({ locale })

  return <ArtistsClient data={artistData} />
}
