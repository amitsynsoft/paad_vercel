'use client'

import React from 'react'
import Link from 'next/link'
import moment from 'moment-timezone'

import Section from '@/_components/manar/_ui/section/Section'
import EventCard from '@/_components/manar/_ui/cards/event-card/EventCard'
import PageHeader from '@/_components/manar/pageHeaders/PageHeader'
import SomethingWentWrong from '@/_components/_globalUI/something-went-wrong/SomethingWentWrong'
import SkeletonCard from '@/_components/manar/_ui/skeleton-loader/SkeletonCard'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import { useGetProgrammeListQuery } from '@/redux/services/manar/programme.api'
import { useLocale } from 'next-intl'
import NoRecordFound from '@/_components/manar/_ui/no-record-found/NoRecordFound'
import useDevice from '@/hooks/detect-device.hook'

// 🔧 Utility: group items dynamically based on a pattern (e.g. [2, 3])
const groupEventsByPattern = (events: any[], pattern = [2, 3]) => {
  const groups: { items: any[]; originalSize: number }[] = []
  let cursor = 0

  for (let i = 0; cursor < events.length; i++) {
    const groupSize = pattern[i % pattern.length]
    const slice = events.slice(cursor, cursor + groupSize)

    // Store both actual items and original intended size
    groups.push({ items: slice, originalSize: groupSize })

    cursor += groupSize
  }

  return groups
}

export default function ProgrammeSection({ data }: ProgrammeSectionProps) {
  const locale = useLocale()
  const { isMobile } = useDevice()
  const { data: programmeData, isLoading, isError } = useGetProgrammeListQuery({ locale, organizationName: 'Manar', page: 1, pageSize: 100 })

  const today = moment().tz('Asia/Riyadh').startOf('day')
  const upcomingEvents = programmeData?.programs?.filter((item: any) => moment(item.startDate).isAfter(today, 'day')) ?? []

  const events = Array.isArray(upcomingEvents) ? upcomingEvents : []

  // const events = Array.isArray(data?.events) ? data!.events : []
  const groupedEvents = events?.length > 0 ? groupEventsByPattern(events.slice(0, 5), [2, 3]) : []

  if (isLoading) {
    return (
      <Section className="!pt-0 pb-16">
        <PageHeader title={data?.title || ''} />
        <div className="space-y-12">
          <div className="pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-6 md:gap-y-17 md:gap-x-8 gap-[30px]">
              {Array.from({ length: 2 }).map((_, i) => (
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
        <PageHeader title={data?.title || ''} />
        <SomethingWentWrong isEnableTryAgain={true} />
      </Section>
    )
  }

  if (events.length === 0) {
    return null
  }

  return (
    <Section>
      {/* Header */}
      <div className="flex justify-between mb-8">
        <h2 className="text-lg text-foreground font-semibold">{data?.title || ''}</h2>
        <ManarButton as={Link} color="primaryOutlineHover" href={data?.button?.url || '#'}>
          {data?.button?.label || ''}
        </ManarButton>
      </div>

      {/* Events */}
      {events.length === 0 ? (
        <div className="text-center py-10 text-gray-500 text-lg">No events available</div>
      ) : (
        <div className="space-y-6">
          {groupedEvents.map((group, i) => {
            // decide layout based on original pattern size
            const isTwoCols = group.originalSize === 2

            return (
              <div key={i} className={`grid grid-cols-1 ${isTwoCols ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-[30px]`}>
                {group.items.map((event, j) => (
                  <EventCard
                    rootClassName={isTwoCols ? 'md:mb-24' : ''}
                    key={`${i}-${j}`}
                    event={event}
                    height={isTwoCols ? `${isMobile ? 'h-[233px]' : 'h-[330px]'} md:h-[500px]` : 'h-[233px] md:h-[330px]'}
                    hideDescription={true}
                  />
                ))}
              </div>
            )
          })}
        </div>
      )}
    </Section>
  )
}

type ProgrammeSectionProps = {
  data?: {
    events?: any[]
    title?: string
    button?: {
      label: string
      url: string
    }
  }
}
