import React from 'react'
import { getLocale } from 'next-intl/server'

import ArtistListClient from './_components/artist-list-client/ArtistListClient.component'
import PagesHeader from '@/_components/biennial/pages-header/PagesHeader.component'
import InternalServerError from '@/_components/biennial/pages-components/internal-server-error/InternalServerError.component'
import { getArtistBySlug, getArtists } from '@/services/biennial/artists/getArtists'
import { getLabelsBiennial } from '@/services/biennial/layout/getLayout'
import ArtistDetailModel from './_components/artist-detail-model/ArtistDetailModel'
import { SearchParams } from '@/types/biennial'

type Params = Promise<{ locale: string }>

export default async function page({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
  const query = await searchParams
  const open = !!query?.artistDetail

  const locale = await getLocale()
  const lablesData: any = await getLabelsBiennial(locale)
  const artistsData: any = await getArtists({ locale })

  let artistDetailData: any = null
  if (query?.artistDetail && typeof query?.artistDetail === 'string') {
    artistDetailData = await getArtistBySlug({ locale, slug: query?.artistDetail })
  }

  if (!artistsData) return <InternalServerError />

  return (
    <div>
      <PagesHeader data={artistsData?.banner} />
      <ArtistListClient artists={artistsData?.artists} labels={lablesData?.labels} />
      {query?.artistDetail && <ArtistDetailModel artistDetailData={artistDetailData} open={open} categoryLabel={artistsData?.banner?.title ?? ''} />}
    </div>
  )
}
