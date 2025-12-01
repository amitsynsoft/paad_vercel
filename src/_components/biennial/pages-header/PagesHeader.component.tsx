'use client'
import React from 'react'
import Image from 'next/image'
import Container from '../_ui/container/Container.component'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'

export default function PagesHeader({ data }: any) {
  const { title, imageSet } = data
  console.log({ title, imageSet })

  return (
    <section className="min-h-50 md:min-h-70 pb-12">
      <div className="relative h-[220px] md:h-[320px] lg:h-[440px] w-full">
        <ImageGuard
          src={imageSet?.landscape?.src}
          alt="Pages Header image"
          fill
          className="object-cover"
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 100vw,
            (max-width: 1536px) 100vw,
            100vw
          "
        />
        <div className="absolute left-0 right-0 top-30 md:top-56 lg:top-76">
          <Container>
            <h1 className="text-large">{title}</h1>
          </Container>
        </div>
      </div>
    </section>
  )
}
