'use client'

import React from 'react'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import NextPreviousButton from '@/_components/manar/_ui/carousels/next-previous-buttons/NextPreviousButton'
import { useLocale } from 'next-intl'
import ArtistCard from '@/_components/manar/_ui/cards/artist-card/ArtistCard'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'

export default function ParticipatingArtistsSection({ data }: { data: any }) {
  const locale = useLocale()
  const { mode } = useThemeStore()

  return (
    <>
      <section className="md:py-16 px-6 md:px-0 py-8 overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap justify-between mb-8">
            <h2 className="text-lg text-foreground font-semibold hidden md:block">{data?.title}</h2>
            <h2 className="text-lg text-foreground font-semibold block md:hidden">{locale === 'ar' ? 'فنانون' : 'Artists'}</h2>
            <div className="flex gap-2 items-center">
              <ManarButton as={Link} color="primaryOutlineHover" href={data?.button?.url}>
                {data?.button?.label}
              </ManarButton>
              {/* swiper buttons */}
              <NextPreviousButton />
            </div>
          </div>

          <div className="swiper-main" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <Swiper
              key={locale}
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
              slidesPerView={1}
              spaceBetween={30}
              navigation={{
                nextEl: `.swiper-button-next-${mode}`,
                prevEl: `.swiper-button-prev-${mode}`,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 30,
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
        </div>
      </section>
    </>
  )
}
