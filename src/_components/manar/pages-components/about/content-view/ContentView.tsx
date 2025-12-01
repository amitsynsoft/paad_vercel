'use client'
import React from 'react'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import { useLocale } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import NextPreviousButton from '@/_components/manar/_ui/carousels/next-previous-buttons/NextPreviousButton'
import Section from '@/_components/manar/_ui/section/Section'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { getDirection, placeholderImage, placeholderImageLoading } from '@/utils'

export default function ContentView({ data }: { data: ContentViewProps }) {
  const locale = useLocale()
  const { mode } = useThemeStore()
  const typeofslider = 'artwork'
  const [index, setIndex] = React.useState(0)
  return (
    <Section className="max-w-[900px] mx-auto py-8 px-4">
      {/* Title */}
      {data?.title && <h2 className="text-lg text-foreground font-semibold whitespace-pre-line !mb-0">{(data?.title || '').split(',').join('\n')}</h2>}

      {/* Markdown */}
      {data?.markdown && (
        <article className="prose prose-lg text-foreground text-[20px] md:text-[25px]">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data?.markdown}</ReactMarkdown>
        </article>
      )}

      {/* Image Slider */}
      {(data?.images?.length ?? 0) > 0 && (
        <div className="swiper-main mt-20">
          <Swiper
            dir={getDirection(locale)}
            key={locale}
            slidesPerView={1}
            spaceBetween={10}
            onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
            navigation={{
              nextEl: `.swiper-button-next-${mode}-${typeofslider}`,
              prevEl: `.swiper-button-prev-${mode}-${typeofslider}`,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 0 },
              768: { slidesPerView: 1, spaceBetween: 0 },
              1024: { slidesPerView: 1, spaceBetween: 0 },
            }}
            modules={[Navigation]}
            className="artworkSwiper"
          >
            {data?.images?.map((image, index) => {
              return (
                <SwiperSlide key={index + locale}>
                  <div className="flex flex-col items-center">
                    <div className="relative w-full max-w-[900px] aspect-[900/680] mx-auto overflow-hidden ">
                      <ImageGuard
                        src={image?.card?.url || placeholderImage}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 900px) 100vw, 900px"
                        placeholder="blur"
                        blurDataURL={placeholderImageLoading}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* Caption + Navigation Buttons */}
          <div className="flex justify-between items-center my-3 mx-auto gap-2">
            <p className="block text-foreground text-sm italic">{data?.images?.[index]?.caption}</p>
            <NextPreviousButton typeofslider={typeofslider} />
          </div>
        </div>
      )}
    </Section>
  )
}

type ImageData = {
  card: {
    url: string
    width: number
    height: number
  }
  caption: string
}

type ContentViewProps = {
  title?: string
  markdown?: string | null
  images?: ImageData[]
  caption?: string
  isActive?: number
  mode?: string
}
