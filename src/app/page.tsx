import React from 'react'
import { getLocale } from 'next-intl/server'

import PageRender from '@/_pageRender'
import { getLandingPage } from '@/services/biennial/getLandingPage'
import { LandingRegistry } from '@/_registry/biennial/landing.registry'

export default async function page() {
  const locale = await getLocale()
  const data = await getLandingPage(locale, '/')

  if (!data) {
    return <div className="text-red-500">Failed to load content</div>
  }

  return (
    <div>
      <PageRender data={data} registry={LandingRegistry} />
    </div>
  )
}
