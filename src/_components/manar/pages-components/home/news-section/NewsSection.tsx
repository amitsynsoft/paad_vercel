'use client'

import React from 'react'

import { Button } from '@heroui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import Section from '@/_components/manar/_ui/section/Section'
import NextPreviousButton from '@/_components/manar/_ui/carousels/next-previous-buttons/NextPreviousButton'
import { useLocale } from 'next-intl'
import NewsCard from '@/_components/manar/_ui/cards/news-card/NewsCard'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import Link from 'next/link'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'

// Todo : remove any and hardcoded
export default function NewsSection({ data }: { data: any }) {
  const locale = useLocale()
  const { mode } = useThemeStore()
  const newsData = [
    {
      id: 1,
      date: '15.11.2025',
      title: 'Manar Abu Dhabi Opens Today',
      image: '/images/image1.jpg',
      link: '#',
    },
    {
      id: 2,
      date: '18.11.2025',
      title: 'Discover New Art Installations',
      image: '/images/image2.jpg',
      link: '#',
    },
    {
      id: 3,
      date: '22.11.2025',
      title: 'Meet the Participating Artists',
      image: '/images/image3.jpg',
      link: '#',
    },
    {
      id: 4,
      date: '25.11.2025',
      title: 'Cultural Night Highlights',
      image: '/images/image1.jpg',
      link: '#',
    },
  ]
  return (
    <Section>
      <div className="flex justify-between mb-4">
        <h2 className="text-lg text-foreground font-semibold">{data?.title}</h2>
        <div className="flex gap-2 items-center">
          <ManarButton as={Link} color="primaryOutlineHover" href={data?.button?.url}>
            {data?.button?.label}
          </ManarButton>

          <NextPreviousButton />
        </div>
      </div>

      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
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
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="newsSwiper"
        >
          {newsData.map((item) => (
            <SwiperSlide key={`${item.id}-${locale}`}>
              <NewsCard newsData={item} className="hover:bg-warning" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  )
}
