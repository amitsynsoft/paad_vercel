'use client'

import React from 'react'
import { Skeleton } from '@heroui/react'

import SomethingWentWrong from '@/_components/_globalUI/something-went-wrong/SomethingWentWrong'
import ArtworkCard from '@/_components/manar/_ui/cards/artwork-card/ArtworkCard'
import ArtistCard from '@/_components/manar/_ui/cards/artist-card/ArtistCard'
import EventCard from '@/_components/manar/_ui/cards/event-card/EventCard'
import { useTranslations } from 'next-intl'
import { SearchSkeleton } from '@/_components/manar/_ui/searchSkeleton/SearchSkeleton'

interface Props {
  query: string
  searchData: any
  isLoading?: boolean
  isError?: boolean
}

export const SearchResults: React.FC<Props> = ({ query, searchData, isLoading = false, isError = false }) => {
  const t = useTranslations('Manar.search')
  const error = useTranslations('Error')
  const trimmed = query.trim()

  const artworks = searchData?.artwork || []
  const programs = searchData?.programs || []
  const artists = searchData?.artist || []

  const total = artworks.length + programs.length + artists.length

  // ---------- Loading ---------
  if (isLoading) {
    return (
      <div className="w-full mt-4 flex flex-col gap-10">
        {/* <Spinner className="w-20 h-20 mx-auto" /> */}
        <Skeleton className="h-8 w-50 mx-auto mb-14 bg-primary/20 rounded" />
        <Skeleton className="h-8 w-50 mb-10 bg-primary/20  rounded" />
        <SearchSkeleton />

        <Skeleton className="h-8 w-50  my-10 bg-primary/20  rounded" />
        <SearchSkeleton />

        <Skeleton className="h-8 w-50  my-10 bg-primary/20  rounded" />
        <SearchSkeleton />
      </div>
    )
  }

  // is Error
  if (isError) {
    return <SomethingWentWrong isEnableMessage={true} title={error('SomethingWentWrong')} message="" isEnableTryAgain={false} />
  }

  // ---------- No Query or No Results ----------
  if (!trimmed || total === 0) {
    return <p className="text-primary text-base font-semibold text-center pt-4">{t('NoRecordFound')}</p>
  }

  // ---------- Render Results ----------
  return (
    <div className="w-full flex flex-col gap-6">
      <p className="text-primary mt-3 mx-auto font-semibold text-base">
        {total} {t('searchResults')}
      </p>

      {/* ===== Artists ===== */}
      {artists.length > 0 && (
        <div className="flex flex-col gap-3 mt-20 md:mt-25">
          <h2 className="text-lg text-foreground font-semibold mb-10">{t('artists')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-15">
            {artists.map((item: any, index: number) => (
              <ArtistCard key={item.slug ?? index} artistData={item.details} imgSrc={item.details?.images?.[0]?.card?.url} height="h-100" />
            ))}
          </div>
        </div>
      )}

      {/* ===== Artworks ===== */}
      {artworks.length > 0 && (
        <div className="flex flex-col gap-3 mt-20 md:mt-25">
          <h2 className="text-lg text-foreground font-semibold mb-10">{t('artworks')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-15">
            {artworks.map((item: any, index: number) => (
              <ArtworkCard key={item.slug ?? index} artworkData={item.details} artist={item?.details?.artist_name} height="h-[260px] md:h-[330px]" />
            ))}
          </div>
        </div>
      )}

      {/* ===== Programs ===== */}
      {programs.length > 0 && (
        <div className="flex flex-col gap-3 mt-20 md:mt-25">
          <h2 className="text-lg text-foreground font-semibold mb-10">{t('programmes')}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-15">
            {programs.map((item: any, index: number) => (
              <EventCard key={item.slug ?? index} event={item.details} height="h-[260px] md:h-[330px]" hideDescription />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
