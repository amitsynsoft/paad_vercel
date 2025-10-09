'use client'

import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <section className="container pt-8 pb-16">
        <div className="flex justify-between mb-12">
          <div className="flex gap-6">
            <Link href="/manar/artists" className="font-semibold text-2xl">
              Artists
            </Link>
            <Link href="/manar/artworks" className="font-semibold text-2xl underline">
              Artworks
            </Link>
          </div>
          <div className="flex gap-2">
            <Button variant="bordered" size="md" color="primary" href="/manar/artists" className="rounded-full font-semibold">
              Location
            </Button>
            <Button variant="bordered" size="md" color="primary" href="/manar/artworks" className="rounded-full font-semibold">
              Keywords
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="#" className="flex flex-col items-start bg-transparent hover:bg-sky-300 transition-all">
            {/* Image */}
            <div className="p-4 relative w-full h-90">
              <Image src="/images/program1.jpg" alt="Sample Slide" fill className="object-cover" />
            </div>

            {/* Title */}
            <div className="flex flex-col px-2 py-2">
              <h3 className="text-sm font-semibold">Title of the Artwork</h3>
              <p className="text-xs text-foreground flex items-center">Artist</p>
            </div>
          </Link>

          <Link href="#" className="flex flex-col items-start bg-transparent hover:bg-sky-300 transition-all">
            {/* Image */}
            <div className="p-4 relative w-full h-90">
              <Image src="/images/image3.jpg" alt="Sample Slide" fill className="object-cover" />
            </div>

            {/* Title */}
            <div className="flex flex-col px-2 py-2">
              <h3 className="text-sm font-semibold">Title of the Artwork</h3>
              <p className="text-xs text-foreground flex items-center">Artist</p>
            </div>
          </Link>

          <Link href="#" className="flex flex-col items-start bg-transparent hover:bg-sky-300 transition-all">
            {/* Image */}
            <div className="p-4 relative w-full h-90">
              <Image src="/images/image2.jpg" alt="Sample Slide" fill className="object-cover" />
            </div>

            {/* Title */}
            <div className="flex flex-col px-2 py-2">
              <h3 className="text-sm font-semibold">Title of the Artwork</h3>
              <p className="text-xs text-foreground flex items-center">Artist</p>
            </div>
          </Link>
          <Link href="#" className="flex flex-col items-start bg-transparent hover:bg-sky-300 transition-all ">
            {/* Image */}
            <div className="p-4 relative w-full h-90">
              <Image src="/images/image1.jpg" alt="Sample Slide" fill className="object-cover" />
            </div>

            {/* Title */}
            <div className="flex flex-col px-2 py-2">
              <h3 className="text-sm font-semibold">Title of the Artwork</h3>
              <p className="text-xs text-foreground flex items-center">Artist</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
