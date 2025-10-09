// components/ArtistCarousel.tsx
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
import 'swiper/css/navigation'

// A dedicated component for each artist card for cleaner code
const ArtistCard: React.FC<{ artist: any }> = ({ artist }) => {
  return (
    <Link href={`/biennial/artists/${artist.slug}`} className="group block">
      {/* The main card container with the grainy background */}
      <div className="relative aspect-square w-full overflow-hidden rounded-md bg-cover bg-center" style={{ backgroundImage: "url('/grainy-texture.png')" }}>
        {/* The circular image in the center */}
        <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-95">
          <div className="relative aspect-square w-full overflow-hidden rounded-full">
            <Image src={artist?.images?.card?.src} alt={artist.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
        </div>

        {/* The "Read More" hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white">Read More</div>
        </div>
      </div>

      {/* Artist Name */}
      <h3 className="mt-4 text-center text-lg font-medium text-black group-hover:underline">{artist.name}</h3>
    </Link>
  )
}

// The main carousel component
const ArtistCarousel: React.FC<{ data: any }> = ({ data }) => {
  const { title, button, artists } = data
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-black md:text-4xl">{title}</h2>
          <Button as={Link} href={button?.url || '#'} className="group flex items-center gap-2 text-base font-medium text-black">
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
            className="!pb-4" // Add padding-bottom for the names
          >
            {artists.map((artist: any) => (
              <SwiperSlide key={artist.slug}>
                <ArtistCard artist={artist} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 -translate-x-1/2 transform lg:block">
            <Button onPress={() => swiperInstance?.slidePrev()} variant="bordered" className="h-12 w-12 rounded-full border-gray-300 bg-white !p-0 text-black shadow-md">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 transform lg:block">
            <Button onPress={() => swiperInstance?.slideNext()} variant="bordered" className="h-12 w-12 rounded-full border-gray-300 bg-white !p-0 text-black shadow-md">
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArtistCarousel
