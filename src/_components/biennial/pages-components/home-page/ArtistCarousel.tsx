// components/ArtistCarousel.tsx
'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import React, { useState } from 'react'
import { MoveRight } from 'lucide-react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperCore } from 'swiper'

import ArtistCard from '../../_ui/cards/artist-card/ArtistCard.component'
import Container from '../../_ui/container/Container.component'
import 'swiper/css'
import 'swiper/css/navigation'

// The main carousel component
const ArtistCarousel: React.FC<{ data: any }> = ({ data }) => {
  const locale = useLocale()

  const { title, button, artists } = data
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)

  return (
    <section className="py-10">
      <Container>
        {/* Header Section */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-black md:text-4xl">{title}</h2>
        </div>

        {/* Swiper Carousel Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-4"
          >
            {artists.map((artist: any, index: number) => (
              <SwiperSlide key={index + locale}>
                <ArtistCard title={artist?.name} images={artist?.images} slug={artist?.slug} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Link href={button?.url || '#'} className="flex items-center justify-end gap-2">
          {button?.label}
          <MoveRight />
        </Link>
      </Container>
    </section>
  )
}

export default ArtistCarousel
