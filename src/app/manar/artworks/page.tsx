import React from 'react'
import { getLocale } from 'next-intl/server'

import ArtworksClient from './_components/ArtworksClient'
import NoRecordFound from '@/_components/manar/_ui/no-record-found/NoRecordFound'
import { getArtworks } from '@/services/manar/artworks/getArtworks'
import { Params, SearchParams } from '@/types/manar'

export default async function page({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
  const locale = await getLocale()

  const { keywords, locations, medium } = await searchParams
  const artworks = await getArtworks({ locale, keywords: keywords as string, location: locations as string, medium: medium as string })

  return <ArtworksClient artworksData={artworks} />
}
