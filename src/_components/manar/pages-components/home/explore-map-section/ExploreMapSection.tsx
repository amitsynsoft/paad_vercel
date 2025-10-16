'use client'
import React from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

import Section from '@/_components/manar/_ui/section/Section'
import MapHomePage from '@/_components/manar/map-home-page/MapHomePage.component'
import { useExploreMapArtworkQuery } from '@/redux/services/map.api'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import { paths } from '@/navigate/paths'

export default function ExploreMapSection({ data }: { data: any }) {
  const locale = useLocale()
  const { data: mapData, isError, isSuccess } = useExploreMapArtworkQuery({ locale, organizationName: 'Manar' })

  return (
    <Section>
      <div className="flex justify-between mb-8">
        <h2 className="text-lg text-foreground font-semibold hidden md:block">{data?.title}</h2>
        <h2 className="text-lg text-foreground font-semibold block md:hidden">{locale === 'ar' ? 'التركيبات الفنية' : 'Artworks'}</h2>

        {/* TODO: remove hardcode url */}
        <ManarButton as={Link} href={paths.manarArtworks()} color="primaryOutlineHover">
          {data?.button?.label}
        </ManarButton>
      </div>

      {isSuccess && <MapHomePage locationData={mapData} />}
      {isError && <p className="text-red-500 text-center text-xl">Error: fetching map data</p>}
    </Section>
  )
}
