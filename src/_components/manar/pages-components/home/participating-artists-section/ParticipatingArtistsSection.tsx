'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@heroui/react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Section from '@/_components/manar/_ui/section/Section'
import NextPreviousButton from '@/_components/manar/_ui/carousels/next-previous-buttons/NextPreviousButton'
import { useLocale } from 'next-intl'
import ArtistCard from '@/_components/manar/_ui/cards/artist-card/ArtistCard'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'

export default function ParticipatingArtistsSection({ data }: { data: any }) {
  const locale = useLocale()
  console.log('at', data)
  const { mode } = useThemeStore()
  return (
    <Section>
      <div className="flex flex-wrap justify-between mb-8">
        <h2 className="text-lg text-foreground font-semibold">{data?.title}</h2>
        <div className="flex gap-2 items-center">
          <ManarButton
            as={Link}
            color="primaryOutlineHover"
            // Todo: remove this hard code url
            // href={data?.button?.url}
            href="#"
          >
            {data?.button?.label}
          </ManarButton>

          <NextPreviousButton />
        </div>
      </div>
      <div className="swiper-main" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <Swiper
          key={locale}
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: `.swiper-button-next-${mode}`,
            prevEl: `.swiper-button-prev-${mode}`,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="artistSwiper"
        >
          {data?.artists?.map((artist: any, index: number) => (
            <SwiperSlide key={`${index} + ${locale}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              <ArtistCard artistData={artist} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  )
}
