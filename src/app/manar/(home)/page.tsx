import React from 'react'
import { getLocale } from 'next-intl/server'

import PageRender from '@/pageRender'
import { HomePageRegistry } from '@/_registry/manar/HomePage.registry'
import { getHomeManarPage } from '@/services/manar/home/getManarHome'

export default async function ManarPage() {
  const locale = await getLocale()
  const homePageData = await getHomeManarPage({ locale })

  return <PageRender registry={HomePageRegistry} data={homePageData} />
}
