// components/ArtworkCarousel.tsx
'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import React, { useState } from 'react'
import { MoveRight } from 'lucide-react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperCore } from 'swiper'

import Container from '../../_ui/container/Container.component'
import ArtworkCard from '../../_ui/cards/artwork-card/ArtworkCard.component'
import 'swiper/css'

const ArtworkCarousel: React.FC<{ data: any }> = ({ data }) => {
  const locale = useLocale()
  const { title, button, artworks } = data
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)

  return (
    <section className="bg-black py-10">
      <Container>
        {/* Header Section */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
        </div>

        {/* Swiper Carousel Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="-mx-4"
          >
            {artworks.map((artwork: any, index: number) => (
              <SwiperSlide key={index + locale}>
                <ArtworkCard
                  title={artwork.title}
                  images={artwork.images}
                  hasOverlay={artwork.hasOverlay}
                  slug={artwork.slug}
                  dateString={artwork.dateString}
                  timeString={artwork.timeString}
                  price={artwork.price}
                  name={artwork.name}
                  location={artwork.location}
                  shortDescription={artwork.shortDescription}
                  textColor={'text-white'}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Link href={button?.url || '#'} className="flex items-center justify-end gap-2 text-white">
          {button?.label}
          <MoveRight />
        </Link>
      </Container>
    </section>
  )
}

export default ArtworkCarousel
