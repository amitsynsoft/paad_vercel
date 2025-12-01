'use client'

import moment from 'moment'
import Link from 'next/link'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import { Calendar, select } from '@heroui/react'
import { Circle, X } from 'lucide-react'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { useLocale, useTranslations } from 'next-intl'
import { getLocalTimeZone } from '@internationalized/date'
import type { CalendarDate } from '@internationalized/date'
import { parseDate } from '@internationalized/date'
import 'swiper/css'
import 'swiper/css/pagination'

import NoRecordFound from '../no-record-found/NoRecordFound'
import ImageGuard from '../../../_globalUI/image-guard/ImageGuard.component'
import AnimateBackgroundCenter from '../animate-bg-center/AnimateBgCenter'
import { placeholderImageLoading } from '@/utils'
import { manarTheme } from '@/themes-config/manar.theme'
import { useEnhanceCalendar } from './hooks/useCalendarEventDots'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { useGetProgrammeListQuery } from '@/redux/services/manar/programme.api'

export default function CalendarPanel() {
  const locale = useLocale()
  const { mode } = useThemeStore()
  const t = useTranslations('Manar.calendar')
  const primaryColor = mode === 'dark' ? manarTheme.manarDark.colors.primary.DEFAULT : manarTheme.manarLight.colors.primary.DEFAULT

  const [isOpen, setIsOpen] = useState(false)
  const typeofslider = 'calendarEvent'
  const { data: programmeData, isLoading, isError } = useGetProgrammeListQuery({ locale, organizationName: 'Manar', page: 1, pageSize: 100 })

  const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(parseDate(moment().format('YYYY-MM-DD')))
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null)

  // Normalize API data and group by YYYY-MM-DD for quick lookup
  const programs = Array.isArray(programmeData?.programs) ? programmeData!.programs : []
  const byDate = React.useMemo(() => {
    const map = new Map<string, any[]>()
    for (const p of programs) {
      const key = moment(p.startDate).format('YYYY-MM-DD')
      const list = map.get(key) || []
      list.push({
        ...p,
        // Ensure fields EventCard expects are present
        dateString: p.dateString ?? '',
        timeString: p.timeString ?? '',
        location: Array.isArray(p.location) ? p.location.join(', ') : p.location,
      })
      map.set(key, list)
    }
    return map
  }, [programs])

  const selectedKey = selectedDate
    ? (() => {
        const s: any = selectedDate
        const jsDate = (selectedDate as any).toDate?.(getLocalTimeZone())
        // Fallback to manual format if toDate not present
        return jsDate ? moment(jsDate).format('YYYY-MM-DD') : `${s.year}-${String(s.month).padStart(2, '0')}-${String(s.day).padStart(2, '0')}`
      })()
    : ''

  const selectedEvents = selectedKey ? byDate.get(selectedKey) || [] : []

  useEnhanceCalendar(byDate, selectedMonth)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div onClick={() => setIsOpen(true)} className="flex flex-col items-center justify-center bg-background w-20 h-20 rounded-full text-primary border-2 border-primary cursor-pointer">
          <span className="text-sm font-bold mt-1">{moment().format('MMM').toUpperCase()}</span>
          <span className="text-3xl font-extrabold !leading-none">{moment().format('DD')}</span>
        </div>
      </div>

      {/* Right-side Sliding Panel (below header) */}
      <div
        className={`fixed right-0 top-[66px] bottom-0 w-full sm:w-[400px] bg-background ${isOpen ? 'md:border-l-2' : ''} border-primary md:shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? '-translate-x-0' : 'translate-x-full'} manar-${mode}`}
      >
        <div className="z-100 flex md:hidden justify-end py-2 px-4">
          <div
            onClick={() => setIsOpen(false)}
            className="flex flex-col items-center justify-center bg-background w-8 h-8 rounded-full text-primary border-2 border-primary cursor-pointer hover:bg-primary hover:text-background hover:scale-105 transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </div>
        </div>
        {/* Calendar Section - Fixed */}
        <div className="sticky top-0 z-10 bg-background">
          <Calendar
            defaultValue={selectedDate}
            aria-label="Date (firstDayOfWeek)"
            firstDayOfWeek="mon"
            classNames={{
              base: `w-full shadow-none rounded-none overflow-hidden`,
              content: 'w-full',
              title: 'text-primary text-base font-bold',
              headerWrapper: 'bg-background w-full',
              gridWrapper: 'pb-0 w-full',
              gridHeaderRow: 'w-full bg-background',
              gridHeaderCell: 'text-primary text-base font-bold px-6',
              gridBody: 'bg-background',
              cell: 'flex justify-center text-base items-center px-2 font-bold',
              cellButton: 'data-[hover=true]:text-primary hover:bg-background',
              prevButton: 'text-primary',
              nextButton: 'text-primary',
            }}
            onFocusChange={(date) => setSelectedMonth(date?.month?.toString() || '')}
            onChange={(date) => setSelectedDate(date as CalendarDate)}
          />

          <div className="my-2 border border-primary"></div>
        </div>

        {/* Scrollable Event Section */}
        <div className="h-[calc(100vh-420px)] overflow-y-auto px-4 !pb-2">
          {selectedDate && selectedEvents.length === 0 && (
            <NoRecordFound key={mode} title={t('noEvents')} message={t('noEventsMessage')} imageSrc={mode === 'dark' ? '/images/manar/plh_no_events_light.svg' : '/images/manar/plh_no_events_dark.svg'} height="h-35" />
          )}

          {isLoading && <p className="text-center text-primary text-lg">{t('loadingProgrammes')}</p>}
          {isError && !isLoading && <p className="text-center text-primary text-lg">{t('failedToLoadProgrammes')}</p>}

          <div className="swiper-main relative">
            <Swiper
              key={locale + mode}
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                el: `.swiper-pagination-${mode}-${typeofslider}`,
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="calendarEventSwiper"
            >
              {selectedEvents?.map((event: any, index: number) => (
                <SwiperSlide key={`${index}-${locale}`}>
                  <Link onClick={() => setIsOpen(false)} href={`/manar/programme-detail/${event?.slug}`} className="group flex flex-col bg-transparent transition-all cursor-pointer text-foreground hover:text-hovertext">
                    <AnimateBackgroundCenter bgClass="bg-success">
                      <p className="text-sm py-2 px-2 font-semibold text-hovertext md:text-foreground group-hover:text-hovertext">
                        {event?.dateString}, {event?.timeString}
                      </p>

                      <div className="p-4 relative aspect-[3/2]">
                        <ImageGuard key={event?.images?.url} src={event?.images?.url} alt={event?.images?.url || 'event image'} fill className="object-cover" placeholder="blur" blurDataURL={placeholderImageLoading} />
                        <span className="absolute top-3 right-3 border-2 border-success bg-transparent text-success text-sm font-bold px-3 py-1 rounded-full shadow">{event?.category?.name}</span>
                      </div>

                      <div className="py-2 px-2">
                        <h4 className="text-base line-clamp-1 font-semibold text-hovertext md:text-foreground group-hover:text-hovertext">{event?.title}</h4>
                        <div className="flex items-center gap-1 text-hovertext md:text-foreground group-hover:text-hovertext">
                          <Circle fill="currentColor" stroke="none" className="w-4 h-4" />

                          <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                              p: ({ node, ...props }) => <p {...props} className="text-base font-semibold line-clamp-1 !leading-[30px] text-hovertext md:text-foreground group-hover:text-hovertext"></p>,
                              a: ({ node, ...props }) => (
                                <span {...props} className="text-base font-semibold line-clamp-1 pointer-events-none !leading-[30px] text-hovertext md:text-foreground group-hover:text-hovertext"></span>
                              ),
                            }}
                          >
                            {String(event?.location || '')}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </AnimateBackgroundCenter>
                  </Link>
                </SwiperSlide>
              ))}
              <div className={`swiper-pagination-${mode}-${typeofslider} flex justify-center items-center gap-2 mt-6 pb-0`}></div>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/0 z-40 transition-opacity"></div>}

      <style jsx global>
        {`
          :root {
            --color-primary: ${primaryColor};
          }
          .swiper-pagination-${mode}-${typeofslider} .swiper-pagination-bullet {
            width: 24px;
            height: 24px;
            background: transparent;
            border: 2px solid var(--color-primary, #fff);
            opacity: 0.6;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .swiper-pagination-${mode}-${typeofslider} .swiper-pagination-bullet-active {
            background: var(--color-primary, #fff);
            opacity: 1;
          }
        `}
      </style>
    </>
  )
}
