// components/ProgrammeCarousel.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperCore } from 'swiper'
import { Button } from '@heroui/react'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'

// A dedicated component for each programme card for cleaner code
const ProgrammeCard: React.FC<{ program: any }> = ({ program }) => {
  return (
    <Link href={`/biennial/programs/${program.slug}`} className="group block h-full overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-xl">
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image src={program?.images?.card?.src} alt={program.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 33vw" />
      </div>

      {/* Text Content */}
      <div className="flex h-full flex-col p-6">
        <h3 className="mb-3 text-xl font-bold text-black">{program.title}</h3>
        <div className="mt-auto space-y-2 pt-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>{program.dateString}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>{program.timeString}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

// The main carousel component
const ProgrammeCarousel: React.FC<{ data: any }> = ({ data }) => {
  const { title, button, programmeTours } = data
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)

  return (
    <section className="overflow-hidden bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-black md:text-4xl">{title}</h2>
          <Button as={Link} href={button?.url || '#'} variant="bordered" className="group flex items-center gap-2 text-base font-medium text-black">
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
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="-mx-4 px-4"
          >
            {programmeTours.map((program: any) => (
              <SwiperSlide key={program.slug} className="h-auto">
                <ProgrammeCard program={program} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="pointer-events-none absolute inset-y-0 z-10 hidden w-full items-center justify-between lg:flex">
            <Button onPress={() => swiperInstance?.slidePrev()} variant="bordered" className="pointer-events-auto -ml-6 h-12 w-12 rounded-full border-gray-300 bg-white !p-0 text-black shadow-md">
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button onPress={() => swiperInstance?.slideNext()} variant="bordered" className="pointer-events-auto -mr-6 h-12 w-12 rounded-full border-gray-300 bg-white !p-0 text-black shadow-md">
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgrammeCarousel
