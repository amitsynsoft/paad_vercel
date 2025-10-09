// components/ArtworkCarousel.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperCore } from 'swiper'
import { Button } from '@heroui/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'

// A dedicated component for each artwork card to keep the code organized
const ArtworkCard: React.FC<{ artwork: any }> = ({ artwork }) => {
  return (
    <Link href={`/biennial/artworks/${artwork.slug}`} className="group block">
      {/* Image container with the signature blue overlay */}
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={artwork?.images?.card?.src}
          alt={artwork.title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 33vw"
        />
        {/* This div creates the cool-toned color overlay from the image */}
        <div className="absolute inset-0 bg-teal-800/30 mix-blend-color transition-colors duration-300 group-hover:bg-transparent"></div>
      </div>

      {/* Text content below the image */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-white">{artwork.title}</h3>
        <p className="mt-1 text-gray-400">By - {artwork.name}</p>
        <p className="text-sm text-gray-400">Location: {artwork.location}</p>
      </div>
    </Link>
  )
}

// The main carousel component
const ArtworkCarousel: React.FC<{ data: any }> = ({ data }) => {
  const { title, button, artworks } = data
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)

  return (
    <section className="overflow-hidden bg-black py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
          <Button as={Link} href={button?.url || '#'} variant="bordered" className="group flex items-center gap-2 text-base font-medium text-white">
            {button?.label}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
          </Button>
        </div>

        {/* Swiper Carousel Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            spaceBetween={30}
            slidesPerView={1.2} // Show a peek of the next slide on mobile
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="-mx-4 px-4" // Allow carousel to bleed out of container for a modern feel
          >
            {artworks.map((artwork: any) => (
              <SwiperSlide key={artwork.slug}>
                <ArtworkCard artwork={artwork} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-between lg:flex">
            <Button onPress={() => swiperInstance?.slidePrev()} variant="bordered" className="pointer-events-auto -ml-16 text-white/50 hover:text-white">
              <ArrowLeft className="h-10 w-10" />
            </Button>
            <Button onPress={() => swiperInstance?.slideNext()} variant="bordered" className="pointer-events-auto -mr-16 text-white/50 hover:text-white">
              <ArrowRight className="h-10 w-10" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArtworkCarousel
