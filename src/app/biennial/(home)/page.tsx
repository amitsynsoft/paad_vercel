import React from 'react'
import { getLocale } from 'next-intl/server'

import PageRender from '@/pageRender'
import { getBiennialHome } from '@/services/biennial/home/getBiennialHome'
import { HomePageRegistry } from '@/_registry/biennial/biennialHome.registry'
import InternalServerError from '@/_components/biennial/pages-components/internal-server-error/InternalServerError.component'

export default async function page() {
  const locale = await getLocale()
  const biennialHomeData = await getBiennialHome({ locale })

  if (!biennialHomeData) return <InternalServerError />

  return <PageRender data={biennialHomeData} registry={HomePageRegistry} />
}
