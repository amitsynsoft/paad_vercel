import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ImageGuard from '@/_components/manar/_ui/image-guard/ImageGuard.component'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import NextPreviousButton from '@/_components/manar/_ui/carousels/next-previous-buttons/NextPreviousButton'
import Link from 'next/link'

export default function ArtworkSlider({ artworkData }: { artworkData: any }) {
  const { mode } = useThemeStore()

  return (
    <div className="swiper-main">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: `.swiper-button-next-${mode}`,
          prevEl: `.swiper-button-prev-${mode}`,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="artwortkSwiper"
      >
        <SwiperSlide>
          {artworkData?.images?.map((image: any, index: number) => (
            <Link key={index} href="/manar/artists" className="flex flex-col items-start bg-transparent">
              <div className="relative w-full max-w-[900px] aspect-[900/680] mx-auto">
                <ImageGuard src={image?.card?.url} alt="swiper slider" fill className="object-cover" />
              </div>
            </Link>
          ))}
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-between items-center my-3 gap-2">
        <p className="text-foreground text-sm">{artworkData?.caption || 'Caption'}</p>

        {artworkData?.images?.length > 1 && <NextPreviousButton />}
      </div>
    </div>
  )
}
