'use client'

import React from 'react'
import moment from 'moment-timezone'

import { useLocale, useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'

import Section from '@/_components/manar/_ui/section/Section'
import NoRecordFound from '@/_components/manar/_ui/no-record-found/NoRecordFound'
import PageHeader from '@/_components/manar/pageHeaders/PageHeader'
import EventCard from '@/_components/manar/_ui/cards/event-card/EventCard'
import SkeletonCard from '@/_components/manar/_ui/skeleton-loader/SkeletonCard'
import SkeletonLoader from '@/_components/manar/_ui/skeleton-loader/SkeletonLoader'
import { useGetProgrammeListQuery } from '@/redux/services/manar/programme.api'
import ProgrammeFilterOptions from './ProgrammeFilterOptions.component'
import SomethingWentWrong from '@/_components/_globalUI/something-went-wrong/SomethingWentWrong'

export default function ProgrammeClient() {
  const today = moment().tz('Asia/Riyadh').startOf('day')
  const locale = useLocale()
  const searchParams = useSearchParams()

  const selectedLocation = searchParams.get('locations') || undefined
  const selectedParticipatingArtists = searchParams.get('participatingArtists') || undefined
  const selectedType = searchParams.get('types') || undefined
  const selectedKeyword = searchParams.get('keywords') || undefined

  const {
    data: programmeData,
    isLoading,
    isError,
  } = useGetProgrammeListQuery({
    locale,
    organizationName: 'Manar',
    page: 1,
    pageSize: 100,
    location: selectedLocation,
    type: selectedType,
    keywords: selectedKeyword ? [selectedKeyword] : undefined,
    artist: selectedParticipatingArtists,
  })

  const t = useTranslations('Manar.ProgrammeSection')

  // Split programs based on date
  // NOTE: Implemented here as per instructions given by Backend Team

  const todayEvents =
    programmeData?.programs?.filter((item: any) => {
      const start = moment(item?.startDate).startOf('day')
      const end = moment(item?.endDate).endOf('day')
      return today.isBetween(start, end, null, '[]') // inclusive check
    }) ?? []

  const upcomingEvents =
    programmeData?.programs?.filter((item: any) => {
      const start = moment(item?.startDate).startOf('day')
      return start.isAfter(today, 'day')
    }) ?? []

  const pastEvents =
    programmeData?.programs?.filter((item: any) => {
      const end = moment(item?.endDate).endOf('day')
      return end.isBefore(today, 'day')
    }) ?? []

  const hasEvents = todayEvents?.length || upcomingEvents?.length || pastEvents?.length

  if (isLoading) {
    return (
      <Section className="!pt-0 pb-16">
        <PageHeader title={t('ProgrammeTitle')} />
        <div className="space-y-12">
          <div className="pt-2">
            <h3 className="text-lg font-semibold mb-10 w-80">
              <SkeletonLoader className="h-10" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-y-17 md:gap-x-8">
              {Array.from({ length: 9 }).map((_, i) => (
                <SkeletonCard key={`s-today-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    )
  }

  if (isError) {
    return (
      <Section className="pb-16">
        <PageHeader title={t('ProgrammeTitle')} />
        <SomethingWentWrong isEnableTryAgain={true} />
      </Section>
    )
  }

  return (
    <Section className="!pt-0 pb-16">
      <PageHeader title={t('ProgrammeTitle')} className={hasEvents ? '!mb-2' : ''} actions={<ProgrammeFilterOptions />} />

      {!hasEvents && (
        <div className="flex justify-center items-center">
          <NoRecordFound title={t('NoRecordFound.title')} message={t('NoRecordFound.message')} />
        </div>
      )}

      <div key={`${locale}programme${selectedLocation}${selectedType}${selectedKeyword}${selectedParticipatingArtists}`}>
        {/* Today */}
        {todayEvents?.length > 0 && (
          <Section className={`!px-0  ${pastEvents?.length > 0 || upcomingEvents?.length > 0 ? '!py-10' : ''}`}>
            <h3 className="text-lg font-semibold mb-10">{t('TodayProgrammeTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-y-17 md:gap-x-8">
              {todayEvents.map((item: any, index: number) => (
                <EventCard key={`${locale}_today_${index}_${item?.title}`} height="h-65 md:h-100" event={item} />
              ))}
            </div>
          </Section>
        )}

        {/* Upcoming */}
        {upcomingEvents?.length > 0 && (
          <Section className={`!px-0  ${todayEvents?.length > 0 ? '!py-0' : ''}`}>
            <h3 className="text-lg font-semibold mb-10">{t('UpcomingProgrammeTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-y-17 md:gap-x-8">
              {upcomingEvents.map((item: any, index: number) => (
                <EventCard key={`${locale}_${index}_upcoming_${item?.title}`} height="h-65 md:h-100" event={item} />
              ))}
            </div>
          </Section>
        )}

        {/* Past */}
        {pastEvents?.length > 0 && (
          <Section className={`!px-0 ${todayEvents?.length > 0 || upcomingEvents?.length > 0 ? '!py-10' : ''}`}>
            <h3 className="text-lg font-semibold mb-10">{t('PastProgrammeTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-y-17 md:gap-x-8">
              {pastEvents.map((item: any, index: number) => (
                <EventCard key={`${locale}_${index}_past_${item?.title}`} height="h-65 md:h-100" event={item} />
              ))}
            </div>
          </Section>
        )}
      </div>
    </Section>
  )
}
