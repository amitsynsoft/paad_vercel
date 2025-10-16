'use client'

import React from 'react'
import moment from 'moment'
import ImageGuard from '@/_components/manar/_ui/image-guard/ImageGuard.component'
import { Circle } from 'lucide-react'
import AnimateBackground from '../../animate-bg/AnimateBackground'

export default function EventCard({ event, height = 'h-[330px]', className = 'bg-success' }: { event: any; height?: string; className?: string }) {
  return (
    <div className={`group flex flex-col items-start bg-transparent transition-all cursor-pointer text-foreground hover:text-hovertext ${className}`}>
      <AnimateBackground bgClass={className}>
        {/* Image + Badge */}
        <div className={`relative w-full ${height}`}>
          <ImageGuard src={event?.image?.url || ''} alt={event?.image?.url} fill className="object-cover object-top" />
          <span className={`absolute top-3 right-3 border-2 border-success bg-transparent text-success text-sm font-bold px-3 py-1 rounded-full shadow`}>{event?.category?.name}</span>
        </div>

        {/* Content */}
        <div className="flex px-2 py-2 gap-6">
          <div className="flex flex-col text-sm font-semibold mt-1">
            <span>{moment(event?.startDate).format('DD MMM YYYY')}</span>
            <span>{moment(event?.startTime).format('HH:mm')}</span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-base font-semibold">{event?.artists?.[0]?.name}</h3>
            <span className="inline-flex items-center gap-1">
              <Circle fill="currentColor" stroke="none" className="w-4 h-4" />
              <p className="text-base font-semibold">{event?.location}</p>
            </span>
          </div>
        </div>
      </AnimateBackground>
    </div>
  )
}
