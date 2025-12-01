import React from 'react'
import { getLocale } from 'next-intl/server'

import ArtistsClient from './_components/ArtistsClient.component'
import { getArtists } from '@/services/manar/artists/getArtists'
import { Params, SearchParams } from '@/types/manar'

export default async function Page({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
  const locale = await getLocale()
  const { keywords, locations } = await searchParams

  const artistData = await getArtists({ locale, keywords: keywords as string, location: locations as string })

  return <ArtistsClient data={artistData} />
}
