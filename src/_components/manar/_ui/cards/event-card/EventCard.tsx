'use client'

import React from 'react'
import moment from 'moment'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { Circle } from 'lucide-react'
import AnimateBackground from '../../animate-bg/AnimateBackground'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Link from 'next/link'
import { placeholderImageLoading } from '@/utils'

export default function EventCard({
  event,
  height = 'h-[330px]',
  className = 'bg-success',
  rootClassName = '',
  hideDescription = false,
}: {
  event: any
  height?: string
  className?: string
  rootClassName?: string
  hideDescription?: boolean
}) {
  return (
    <Link href={`/manar/programme-detail/${event?.slug}`} className={rootClassName}>
      <div className={`group flex flex-col items-start bg-transparent transition-all cursor-pointer text-foreground hover:text-hovertext ${className}`}>
        <AnimateBackground bgClass={className}>
          {/* Image + Badge */}
          <div className={`relative w-full ${height}`}>
            <ImageGuard
              src={event?.images?.url || event?.image?.url || ''}
              alt={event?.images?.url || event?.image?.url || ''}
              fill
              className="object-cover object-top "
              placeholder="blur"
              blurDataURL={placeholderImageLoading}
            />
            <span className={`absolute top-3 right-3 border-2 border-success bg-transparent text-success text-sm font-bold px-3 py-1 rounded-full shadow`}>{event?.category?.name || event?.catagories?.name}</span>
          </div>

          {/* Content */}
          <div className="flex flex-col px-2 py-2 gap-4">
            <div className="flex gap-6">
              <div className="flex flex-col text-sm font-semibold mt-1 min-w-[130px] text-hovertext md:text-foreground group-hover:text-hovertext">
                <span>{event?.dateString || event?.date}</span>
                <span> {event?.timeString || event?.time}</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold line-clamp-1 text-hovertext md:text-foreground group-hover:text-hovertext">{event?.title}</h3>
                <div className="inline-flex items-center gap-1">
                  <Circle fill="currentColor" stroke="none" className="min-w-4 min-h-4 max-w-4 max-h-4 text-hovertext md:text-foreground group-hover:text-hovertext" />
                  {/* <p title={event?.location} className="text-base font-semibold line-clamp-1">
                    {event?.location}
                  </p> */}
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      p: ({ node, ...props }) => <p {...props} className="text-base font-semibold line-clamp-1 !leading-[30px] text-hovertext md:text-foreground group-hover:text-hovertext"></p>,
                      a: ({ node, ...props }) => <span {...props} className="text-base font-semibold line-clamp-1 pointer-events-none !leading-[30px] text-hovertext md:text-foreground group-hover:text-hovertext"></span>,
                    }}
                  >
                    {String(event?.location || '')}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
            {!hideDescription && event?.description && (
              <div className="line-clamp-6 ">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{ p: ({ node, ...props }) => <p {...props} className="text-base text-wrap leading-[25px] font-semibold text-hovertext md:text-foreground group-hover:text-hovertext" /> }}
                >
                  {event?.description || ''}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </AnimateBackground>
      </div>
    </Link>
  )
}
