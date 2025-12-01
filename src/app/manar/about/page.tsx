import React from 'react'
import { getLocale } from 'next-intl/server'

import PageRender from '@/pageRender'
import { AboutPageRegistry } from '@/_registry/manar/AboutPage.registry'
import { getManarAboutPage } from '@/services/manar/about/getManarAbout'

export default async function page() {
  const locale = await getLocale()
  const aboutPageData = await getManarAboutPage({ locale, slug: 'about-manar' })
  return <PageRender registry={AboutPageRegistry} data={aboutPageData} />
}
