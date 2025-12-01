'use client'

import React from 'react'
import useDevice from '@/hooks/detect-device.hook'
import Image from 'next/image'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import Head from 'next/head'

// TODO: add data to hero section remove any
export default function HeroSection({ data }: { data: any }) {
  const { isMobile, isDesktop, isTablet } = useDevice()
  const desktopVideo = data?.video?.url || data?.video
  const mobileVideo = data?.mobileVideo?.url || data?.mobileVideo || data?.video?.url || data?.video

  const desktopVideoPoster = data?.images?.landscape?.url
  const mobileVideoPoster = data?.images?.portrait?.url

  return (
    <>
      <Head>
        <link rel="preload" as="image" href={data?.logo?.url} type="image/webp" />
        <link rel="preload" as="image" href={data?.mobileLogo?.url || data?.logo?.url} type="image/webp" />
      </Head>
      <section>
        <div className="relative">
          <div className="img-wrapper relative w-full h-screen">
            {/* Desktop / tablet video */}
            {(isDesktop || isTablet) && (
              <video
                aria-hidden="true"
                role="presentation"
                src={desktopVideo}
                poster={desktopVideoPoster}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover hidden md:block"
                preload="none"
                onLoadedData={() => console.log('video loaded')}
              />
            )}

            {/* Mobile video */}
            {isMobile && (
              <video
                aria-hidden="true"
                role="presentation"
                src={mobileVideo}
                poster={mobileVideoPoster}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover md:hidden"
                preload="none"
                onLoadedData={() => console.log('video loaded')}
              />
            )}
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="container w-full flex items-center justify-center relative h-48">
              {/* Desktop / tablet logo */}
              {(isDesktop || isTablet) && <ImageGuard src={data?.logo?.url} alt="Manar Abu Dhabi" fill sizes="100vw" className="object-contain hidden md:block" priority loading="eager" fetchPriority="high" />}

              {/* Mobile logo */}
              {isMobile && <ImageGuard src={data?.mobileLogo?.url ?? data?.logo?.url} alt="Manar Abu Dhabi" fill sizes="100vw" className="object-contain md:hidden" priority loading="eager" fetchPriority="high" />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
