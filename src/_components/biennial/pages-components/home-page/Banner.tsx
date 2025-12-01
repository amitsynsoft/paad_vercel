// components/Banner.tsx
'use client'
import { Button } from '@heroui/react'
import Link from 'next/link'

export default function Banner({ data, button = true }: { data: any; button?: boolean }) {
  const slide = data.slides[0]

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center">
      <video src={slide?.videoSet?.landscape?.url} autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="p-6 rounded-md z-10">
        <h1 className="text-lg md:text-4xl font-bold z-10">{slide?.title}</h1>
        <p className="text-lg md:text-lg mt-2 z-10">{slide?.description}</p>
        {button && (
          <Button className="mt-6 bg-black text-white px-6 py-2 hover:bg-white hover:text-black z-10" as={Link} href={slide?.button?.url?.toLowerCase() || ''}>
            {slide?.button?.label}
          </Button>
        )}
      </div>
    </div>
  )
}
