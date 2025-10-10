'use client'
import React from 'react'
import Link from 'next/link'

import ExploreMap from '@/_components/manar/Explore-map-artworks/ExploreArtworks'
import { useExploreMapArtworkQuery } from '@/redux/services/auth.api'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import { useLocale } from 'next-intl'

export default function ExploreMapSection({ data }: { data: any }) {
  const locale = useLocale()
  const { data: mapData, isError } = useExploreMapArtworkQuery({ locale, organizationName: 'Manar' })
  console.log(mapData)

  return (
    <section className="container py-16">
      <div className="flex justify-between mb-8">
        <h2 className="text-lg text-foreground font-semibold">{data?.title}</h2>
        <ManarButton
          as={Link}
          // Todo: remove this hard code url
          // href={data?.button.label}
          href="#"
          color="primaryOutlineHover"
        >
          {data?.button?.label}
        </ManarButton>
      </div>

      {mapData && <ExploreMap locationData={mapData} />}
    </section>
  )
}
