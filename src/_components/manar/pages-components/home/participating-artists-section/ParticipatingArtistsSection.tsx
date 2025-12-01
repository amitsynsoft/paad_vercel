'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import ArtistCard from '@/_components/manar/_ui/cards/artist-card/ArtistCard'
import NextPreviousButton from '@/_components/manar/_ui/carousels/next-previous-buttons/NextPreviousButton'
import { useTranslations, useLocale } from 'next-intl'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import { getDirection } from '@/utils'

export default function ParticipatingArtistsSection({ data, title = data?.title || '', hideButton = false }: { data: any; title?: string; hideButton?: boolean }) {
  const locale = useLocale()
  const { mode } = useThemeStore()
  const swiperRef = useRef<any>(null)
  const t = useTranslations('Manar.ArtistSection')
  const typeofslider = 'artist'

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

  return (
    <section className="md:py-16 px-6 md:px-0 py-8 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap justify-between mb-8">
          <h2 className="text-lg text-foreground font-semibold hidden md:block">{title}</h2>
          <h2 className="text-lg text-foreground font-semibold block md:hidden">{t('Artists')}</h2>

          <div className="flex gap-2 items-center">
            {!hideButton && (
              <ManarButton as={Link} color="primaryOutlineHover" href={data?.button?.url}>
                {data?.button?.label}
              </ManarButton>
            )}
            <NextPreviousButton typeofslider={typeofslider} />
          </div>
        </div>

        <div className="swiper-main" dir={getDirection(locale)}>
          <Swiper
            key={locale + mode} // force re-render when theme/locale changes
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
              1024: { slidesPerView: 4.2, spaceBetween: 30 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation]}
            className="artistSwiper"
          >
            {data?.artists?.map((artist: any, index: number) => (
              <SwiperSlide key={`${index}-${locale}`}>
                <ArtistCard artistData={artist} isAbout={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
