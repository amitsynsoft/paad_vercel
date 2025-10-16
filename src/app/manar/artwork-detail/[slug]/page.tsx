import React from 'react'
import { getLocale } from 'next-intl/server'
import ArtworkDetail from './_components/ArtworkDetail'
import { getArtworkDetailBySlug } from '@/services/manar/artworks/getArtworkDetailBySlug'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const locale = await getLocale()

  const slug = decodeURIComponent((await params).slug)
  const artworkData = await getArtworkDetailBySlug({ locale, slug })

  return (
    <div className="container mb-12">
      <ArtworkDetail artworkData={artworkData} />
    </div>
  )
}
