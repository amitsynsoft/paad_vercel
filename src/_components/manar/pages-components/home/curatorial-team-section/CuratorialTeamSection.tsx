'use client'

import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'

import Section from '@/_components/manar/_ui/section/Section'
import { useLocale } from 'next-intl'
import CuratorialCard from '@/_components/manar/_ui/cards/curatorial-card/CuratorialCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import NextPreviousButton from '@/_components/manar/_ui/carousels/next-previous-buttons/NextPreviousButton'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'

export default function CuratorialTeamSection({ data }: { data: any }) {
  const locale = useLocale()
  const { mode } = useThemeStore()
  return (
    // <Section>
    //   <div className="flex justify-between mb-8">
    //     <h2 className="text-lg text-foreground font-semibold">{data?.title}</h2>
    //   </div>
    //   <div className="grid grid-cols-2 md:grid-cols-4 gap-8" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
    //     {data?.curators?.map((curator: any, index: number) => (
    //       <CuratorialCard key={index} curatorialData={curator} />
    //     ))}
    //   </div>
    // </Section>

    <Section>
      <div className="flex justify-between mb-8">
        <h2 className="text-lg text-foreground font-semibold">{data?.title}</h2>
        <div className="flex gap-2 items-center sm:hidden">
          <NextPreviousButton />
        </div>
      </div>

      {/* <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
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
            640: { slidesPerView: 2, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          modules={[Navigation]}
          className="curatorialSwiper"
        >
          {data?.curators?.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <CuratorialCard curatorialData={item} className="hover:bg-warning" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

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
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="curatorialSwiper"
        >
          {data?.curators?.map((item: any, index: number) => (
            <SwiperSlide key={`${index} + ${locale}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              <CuratorialCard curatorialData={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  )
}
