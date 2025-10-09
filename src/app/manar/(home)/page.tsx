import React from 'react'
import PageRender from '@/_pageRender'
import { HomePageRegistry } from '@/_registry/manar/HomePage.registry'
import { getHomeManarPage } from '@/services/manar/home/getManarHome'
import { getLocale } from 'next-intl/server'

export default async function ManarPage() {
  const locale = await getLocale()
  const homePageData = await getHomeManarPage({ locale })

  return <PageRender registry={HomePageRegistry} data={homePageData} />
}
