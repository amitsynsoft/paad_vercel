'use client'

import React from 'react'
import Image from 'next/image'

// TODO: add data to hero section remove any
export default function HeroSection({ data }: { data: any }) {
  console.log({ data })
  const desktopVideo = data?.video?.url || data?.video
  const mobileVideo = data?.mobileVideo?.url || data?.mobileVideo || data?.video?.url || data?.video
  console.log({ desktopVideo, mobileVideo })
  return (
    <section>
      <div className="relative">
        <div className="img-wrapper relative w-full h-screen">
          {/* Desktop / tablet video */}
          <video src={desktopVideo} autoPlay muted loop playsInline className="w-full h-full object-cover hidden md:block" />

          {/* Mobile video */}
          <video src={mobileVideo} autoPlay muted loop playsInline className="w-full h-full object-cover md:hidden" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="container w-full flex items-center justify-center relative h-48">
            {/* Desktop / tablet logo */}
            <Image src={data?.logo?.url} alt="Manar Abu Dhabi" fill className="object-contain hidden md:block" />

            {/* Mobile logo */}
            <Image src={data?.mobileLogo?.url ?? data?.logo?.url} alt="Manar Abu Dhabi" fill className="object-contain md:hidden" />
          </div>
        </div>
      </div>
    </section>
  )
}
