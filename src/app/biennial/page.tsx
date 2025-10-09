import { getLocale } from 'next-intl/server'
import React from 'react'
import { getBiennialHome } from '@/services/biennial/getBiennialHome'
import PageRender from '@/_pageRender'
import { HomePageRegistry } from '@/_registry/biennial/biennialHome.registry'

export default async function page() {
  const locale = await getLocale()
  const biennialHomeData = await getBiennialHome(locale)

  return (
    <div>
      <PageRender data={biennialHomeData} registry={HomePageRegistry} />
    </div>
  )
}
