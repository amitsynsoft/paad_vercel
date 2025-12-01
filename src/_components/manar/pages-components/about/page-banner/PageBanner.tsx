'use client'
import React from 'react'
import { PageBannerComponent } from '@/dto/manar'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { placeholderImageLoading } from '@/utils'

const PageBanner: React.FC<{ data: PageBannerComponent }> = ({ data }) => {
  const { title, images } = data
  const bannerImage = images?.landscape?.url || images?.portrait?.url

  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-center overflow-hidden">
      {bannerImage && <ImageGuard src={bannerImage} alt={title?.text || 'Banner'} fill className="object-cover" priority placeholder="blur" blurDataURL={placeholderImageLoading} />}
      <div className="absolute inset-0 bg-black/40" />
      <h1 className="relative z-10 text-white font-bold text-6xl leading-tight" dangerouslySetInnerHTML={{ __html: title?.text || '' }} />
    </section>
  )
}

export default PageBanner
