'use client'

import React from 'react'
import { Button } from '@heroui/react'
import EventCard from '@/_components/manar/_ui/cards/event-card/EventCard'
import Section from '@/_components/manar/_ui/section/Section'

interface ProgrammeSectionProps {
  data?: {
    events?: any[]
    title?: string
    button?: {
      label: string
      url: string
    }
  }
}

// 🔧 Utility: group items dynamically based on a pattern (e.g. [2, 3])
const groupEventsByPattern = (events: any[], pattern = [2, 3]) => {
  const groups: any[][] = []
  let cursor = 0

  for (let i = 0; cursor < events.length; i++) {
    const groupSize = pattern[i % pattern.length]
    groups.push(events.slice(cursor, cursor + groupSize))
    cursor += groupSize
  }

  return groups
}

export default function ProgrammeSection({ data }: ProgrammeSectionProps) {
  const events = Array.isArray(data?.events) ? data!.events : []

  const groupedEvents = groupEventsByPattern(events, [2, 3])

  return (
    <Section>
      <div className="flex justify-between mb-8">
        <h2 className="text-lg text-foreground font-semibold">{data?.title || ''}</h2>
        <Button as="a" variant="bordered" size="md" color="primary" href={data?.button?.url || '#'} className="rounded-full text-base font-semibold">
          {data?.button?.label || ''}
        </Button>
      </div>

      {events.length === 0 ? (
        //  TODO: HardCoded
        <div className="text-center py-10 text-gray-500 text-lg">No events available</div>
      ) : (
        <div className="space-y-6">
          {groupedEvents.map((group, i) => {
            const isTwoCols = group.length === 2
            return (
              <div key={i} className={`grid grid-cols-1 ${isTwoCols ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
                {group.map((event, j) => (
                  <EventCard key={`${i}-${j}`} event={event} height={isTwoCols ? 'h-[500px]' : 'h-[330px]'} />
                ))}
              </div>
            )
          })}
        </div>
      )}
    </Section>
  )
}
