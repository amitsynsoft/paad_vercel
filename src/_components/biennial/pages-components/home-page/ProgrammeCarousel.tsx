// components/ProgrammeCarousel.tsx
'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import React, { useState } from 'react'
import { MoveRight } from 'lucide-react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperCore } from 'swiper'

import Container from '../../_ui/container/Container.component'
import ProgramCard from '../../_ui/cards/program-card/ProgramCard.component'
import 'swiper/css'

// The main carousel component
const ProgrammeCarousel: React.FC<{ data: any }> = ({ data }) => {
  const locale = useLocale()
  const { title, button, programmeTours } = data
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)

  return (
    <section className="py-10">
      <Container>
        {/* Header Section */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
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
            {programmeTours.map((program: any, index: number) => (
              <SwiperSlide key={program.slug + locale}>
                <ProgramCard title={program?.title} images={program?.images} labels={program?.labels} slug={program?.slug} label={program?.label} />
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

export default ProgrammeCarousel
