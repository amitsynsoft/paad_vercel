'use client'
import React from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

import Section from '@/_components/manar/_ui/section/Section'
import SomethingWentWrong from '@/_components/_globalUI/something-went-wrong/SomethingWentWrong'
import MapHomePage from '@/_components/manar/map-home-page/MapHomePage.component'
import SkeletonLoader from '@/_components/manar/_ui/skeleton-loader/SkeletonLoader'
import { paths } from '@/navigate/paths'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import { useExploreMapArtworkQuery } from '@/redux/services/manar/map.api'

export default function ExploreMapSection({ data, hideHeader = false }: { data: any; hideHeader?: boolean }) {
  const locale = useLocale()
  const { data: mapData, isError, isSuccess, isLoading, isFetching, error } = useExploreMapArtworkQuery({ locale, organizationName: 'Manar' })

  return (
    <Section>
      {!hideHeader && (
        <div className="flex justify-between mb-8">
          <h2 className="text-lg text-foreground font-semibold hidden md:block">{data?.title}</h2>
          <h2 className="text-lg text-foreground font-semibold block md:hidden">{locale === 'ar' ? 'التركيبات الفنية' : 'Artworks'}</h2>

          {/* TODO: remove hardcode url */}
          <ManarButton as={Link} href={paths.manarArtworks()} color="primaryOutlineHover">
            {data?.button?.label}
          </ManarButton>
        </div>
      )}

      {(isLoading || isFetching) && <SkeletonLoader className="h-150" />}

      {isSuccess && <MapHomePage locationData={mapData} />}
      {isError && <SomethingWentWrong message={'Api Error: There was an error fetching the data'} isEnableTryAgain={false} />}
    </Section>
  )
}
