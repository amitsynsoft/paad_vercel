'use client'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import NextPreviousButton from '@/_components/manar/_ui/carousels/next-previous-buttons/NextPreviousButton'
import { getDirection, placeholderImage, placeholderImageLoading } from '@/utils'
import { useLocale } from 'next-intl'

export default function ArtworkSlider({ artworkData }: { artworkData: any }) {
  const locale = useLocale()
  const { mode } = useThemeStore()
  const typeofslider = 'artwork'
  return (
    <div className="swiper-main">
      {artworkData?.images?.length > 0 && (
        <Swiper
          dir={getDirection(locale)}
          key={locale}
          slidesPerView={1}
          spaceBetween={10}
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
          {artworkData?.images?.map((image: any, index: number) => (
            <SwiperSlide key={index + locale}>
              <div className="flex flex-col items-center bg-transparent">
                <div className="relative w-full max-w-[900px] aspect-[900/680] mx-auto overflow-hidden">
                  <ImageGuard src={image?.card?.url} alt={`Slide ${index + 1}`} fill className="object-cover" placeholder="blur" blurDataURL={placeholderImageLoading} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {artworkData?.images?.length === 0 && (
        <div className="relative w-full max-w-[900px] aspect-[900/680] mx-auto overflow-hidden">
          <ImageGuard src={placeholderImage} alt={`Slide 1`} fill className="object-cover" placeholder="blur" blurDataURL={placeholderImageLoading} />
        </div>
      )}

      {(artworkData?.images?.length > 1 || artworkData?.caption) && (
        <div className="flex justify-between items-center my-3 gap-2">
          {artworkData?.caption && <p className="text-foreground text-sm">{artworkData?.caption}</p>}
          {artworkData?.images?.length > 1 && (
            <div className={`flex ${locale === 'ar' ? 'mr-auto' : 'ml-auto'}`}>
              <NextPreviousButton typeofslider={typeofslider} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
