'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import Section from '@/_components/manar/_ui/section/Section'
import NewsCard from '@/_components/manar/_ui/cards/news-card/NewsCard'
import NoRecordFound from '@/_components/manar/_ui/no-record-found/NoRecordFound'
import SkeletonLoader from '@/_components/manar/_ui/skeleton-loader/SkeletonLoader'
import SomethingWentWrong from '@/_components/_globalUI/something-went-wrong/SomethingWentWrong'
import NextPreviousButton from '@/_components/manar/_ui/carousels/next-previous-buttons/NextPreviousButton'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import { getDirection } from '@/utils'
import { useGetNewsListQuery } from '@/redux/services/manar/news.api'

// Todo : remove any and hardcoded
export default function NewsSection({ data }: { data: any }) {
  const typeofslider = 'news'
  const locale = useLocale()
  const { mode } = useThemeStore()
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    if (swiperRef.current) {
      // force swiper to reinitialize navigation once buttons exist
      setTimeout(() => {
        swiperRef.current.params.navigation.prevEl = `.swiper-button-prev-${mode}-${typeofslider}`
        swiperRef.current.params.navigation.nextEl = `.swiper-button-next-${mode}-${typeofslider}`
        swiperRef.current.navigation.init()
        swiperRef.current.navigation.update()
      }, 100)
    }
  }, [mode])

  const { data: newsList, isError, isSuccess } = useGetNewsListQuery({ locale, organizationName: 'Manar' })

  return (
    <section className="md:py-16 px-6 md:px-0 py-8 overflow-hidden">
      <div className="container">
        {isError && <SomethingWentWrong />}
        {isSuccess && (
          <>
            <div className="flex flex-wrap justify-between mb-8">
              <h2 className="text-lg text-foreground font-semibold">{data?.title}</h2>
              <div className="flex gap-2 items-center">
                <ManarButton as={Link} color="primaryOutlineHover" href={data?.button?.url}>
                  {data?.button?.label}
                </ManarButton>

                <NextPreviousButton typeofslider={typeofslider} />
              </div>
            </div>
            <div className="swiper-main-news" dir={getDirection(locale)}>
              <Swiper
                key={locale}
                dir={getDirection(locale)}
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                  nextEl: `.swiper-button-next-${mode}-${typeofslider}`,
                  prevEl: `.swiper-button-prev-${mode}-${typeofslider}`,
                }}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 30 },
                  768: { slidesPerView: 3.5, spaceBetween: 30 },
                  1024: { slidesPerView: 3.2, spaceBetween: 30 },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Navigation]}
                className="newsSwiper"
              >
                {newsList &&
                  newsList?.map((item: any, index: number) => (
                    <SwiperSlide key={`${index}-${locale}`}>
                      <NewsCard newsData={item} className="hover:bg-warning" height="h-100 md:h-125" />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            {newsList?.length === 0 && <NoRecordFound />}
          </>
        )}
      </div>
    </section>
  )
}
