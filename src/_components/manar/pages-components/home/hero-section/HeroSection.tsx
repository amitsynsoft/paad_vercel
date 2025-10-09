'use client'

import React from 'react'
import Image from 'next/image'
import { createImageFullUrl } from '@/utils'

// TODO: add data to hero section remove any
export default function HeroSection({ data }: { data: any }) {
  return (
    <section>
      <div className="relative">
        <div className="img-wrapper relative w-full h-screen">
          <video src={createImageFullUrl(data?.video)} autoPlay muted loop className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="h-100 w-full flex items-center justify-center">
            <Image src={createImageFullUrl(data?.logo?.url)} alt="Manar Abu Dhabi" className="object-cover" height={1200} width={1200} />
          </div>
        </div>
      </div>
    </section>
  )
}
