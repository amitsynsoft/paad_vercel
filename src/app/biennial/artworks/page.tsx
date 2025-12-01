import React from 'react'
import { getLocale } from 'next-intl/server'

import ArtworkListClient from './_components/artwork-list-client/ArtworkListClient.component'
import PagesHeader from '@/_components/biennial/pages-header/PagesHeader.component'
import InternalServerError from '@/_components/biennial/pages-components/internal-server-error/InternalServerError.component'
import { getArtworkDetailBySlug, getArtworks } from '@/services/biennial/artworks/getArtworks'
import { SearchParams, Params } from '@/types/biennial'
import ArtworkDetailModel from './_components/artwork-detail-model/ArtworkDetailModel'

export default async function page({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
  const locale = await getLocale()
  const artworksData: any = await getArtworks({ locale })

  const query = await searchParams
  const open = !!query?.artworkDetail

  let artworkDetailData: any = null
  if (query?.artworkDetail && typeof query?.artworkDetail === 'string') {
    artworkDetailData = await getArtworkDetailBySlug({ locale, slug: query?.artworkDetail as string })
  }

  if (!artworksData) return <InternalServerError />

  return (
    <div>
      <PagesHeader data={artworksData?.banner} />
      <ArtworkListClient artworks={artworksData.artworks ?? []} />
      {query?.artworkDetail && <ArtworkDetailModel artworkDetailData={artworkDetailData} open={open} categoryLabel={artworksData?.banner?.title ?? ''} />}
    </div>
  )
}
