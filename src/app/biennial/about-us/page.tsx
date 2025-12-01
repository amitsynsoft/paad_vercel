import React from 'react'
import { getLocale } from 'next-intl/server'

import PageRender from '@/pageRender'
import { AboutPageRegistry } from '@/_registry/biennial/biennialAbout.registry'
import PagesHeader from '@/_components/biennial/pages-header/PagesHeader.component'
import InternalServerError from '@/_components/biennial/pages-components/internal-server-error/InternalServerError.component'
import { getBiennialAbout } from '@/services/biennial/about/getAbout'

export default async function page() {
  const locale = await getLocale()
  const biennialAbout: any = await getBiennialAbout({ locale })

  if (!biennialAbout) return <InternalServerError />

  return (
    <>
      <PagesHeader data={biennialAbout?.components.filter((item: any) => item.component === 'page-banner')[0]} />
      <PageRender data={biennialAbout} registry={AboutPageRegistry} />
    </>
  )
}
