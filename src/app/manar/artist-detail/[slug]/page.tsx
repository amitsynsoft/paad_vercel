import React from 'react'
import { getLocale } from 'next-intl/server'
import ArtistDetailClient from './_components/ArtistDetailClient'
import { getArtistDetailBySlug } from '@/services/manar/artists/getArtistDetailBySlug'

// Use Awaited<> to satisfy checkFields
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const locale = await getLocale()

  const slug = decodeURIComponent((await params).slug)

  const artistDetailData = await getArtistDetailBySlug({ locale, slug })

  return <ArtistDetailClient data={artistDetailData} />
}
