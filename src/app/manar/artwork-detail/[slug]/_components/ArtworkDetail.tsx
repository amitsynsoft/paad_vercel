import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// --- Prop Types ---
interface Slide {
  imageUrl: string
  caption: string
  alt: string
}

interface ArtworkDetailProps {
  title: string
  artistName: string
  tags: string[]
  slides: Slide[]
  year: number
  medium: string
  dimensions: string
  courtesy: string
  description: React.ReactNode
}

export const ArtworkDetailComponents: React.FC<ArtworkDetailProps> = ({ title, artistName, tags, slides, year, medium, dimensions, courtesy, description }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { mode } = useThemeStore()

  return (
    <div className="container">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* --- Header Section --- */}
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{title}</h1>
          <h2 className="text-xl text-foreground/80 mt-1">{artistName}</h2>

          <div className="my-4 flex flex-wrap gap-2 ">
            {tags.map((tag) => (
              <span key={tag} className="border-2 border-primary text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* --- Swiper Slider Section --- */}
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
              <Link href="/manar/artists" className="flex flex-col items-start bg-transparent  ">
                {/* Image */}
                <div className="p-4 relative w-full h-100">
                  <Image src="/images/image1.jpg" alt="Sample Slide" fill className="object-cover" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#" className="flex flex-col items-start bg-transparent">
                {/* Image */}
                <div className="p-4 relative w-full h-100">
                  <Image src="/images/image2.jpg" alt="Sample Slide" fill className="object-cover" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#" className="flex flex-col items-start bg-transparent">
                {/* Image */}
                <div className="p-4 relative w-full h-100">
                  <Image src="/images/image3.jpg" alt="Sample Slide" fill className="object-cover" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#" className="flex flex-col items-start bg-transparent">
                {/* Image */}
                <div className="p-4 relative w-full h-100">
                  <Image src="/images/image1.jpg" alt="Sample Slide" fill className="object-cover" />
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>

          <div className="flex justify-between items-center my-3 gap-2">
            <p className="text-foreground text-sm font-semibold">Caption</p>
            <div className="flex gap-2">
              <div className="swiper-button-prev border-2 border-primary rounded-full flex items-center justify-center w-8 h-8 hover:bg-primary hover:text-foreground transition-all">
                <Image src="/images/ic_prev.svg" alt="Prev" width={24} height={24} />
              </div>
              <div className="swiper-button-next border-2 border-primary rounded-full flex items-center justify-center w-8 h-8 hover:bg-primary hover:text-foreground transition-all">
                <Image src="/images/ic_next.svg" alt="Next" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>

        {/* --- Artwork Details Section --- */}
        <div className="mt-4 pt-4">
          <div className="text-sm text-foreground space-y-1">
            <p className="font-bold">{title}</p>
            <p>{year}</p>
            <p>{medium}</p>
            <p>{dimensions}</p>
            <p>{courtesy}</p>
          </div>

          <div className="mt-6 text-base text-foreground leading-relaxed prose max-w-none">{description}</div>
        </div>
      </div>

      {/* Google Map */}
      <section className="mt-12">{/* <ExploreMap /> */}</section>

      {/* Artists */}
      <section className="my-8">
        <div className="flex justify-between mb-4">
          <h2 className="text-3xl text-foreground font-semibold">Artists</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link href="#" className="flex flex-col items-start bg-transparent hover:bg-red-700 transition-all">
            {/* Image */}
            <div className="p-4 relative w-full h-100">
              <Image src="/images/image1.jpg" alt="Sample Slide" fill className="object-cover" />
            </div>

            {/* Title */}
            <div className="px-2 py-2">
              <h4 className="text-md font-semibold text-foreground">KAWS</h4>
              <p className="text-sm text-foreground">b.1974, Jersey City</p>
            </div>
          </Link>

          <Link href="#" className="flex flex-col items-start bg-transparent hover:bg-red-700 transition-all">
            {/* Image */}
            <div className="p-4 relative w-full h-100">
              <Image src="/images/image3.jpg" alt="Sample Slide" fill className="object-cover" />
            </div>

            {/* Title */}
            <div className="px-2 py-2">
              <h4 className="text-md font-semibold text-foreground">Studio Drift</h4>
              <p className="text-sm text-foreground">Founded 1998, Amsterdam</p>
            </div>
          </Link>

          <Link href="#" className="flex flex-col items-start bg-transparent hover:bg-red-700 transition-all">
            {/* Image */}
            <div className="p-4 relative w-full h-100">
              <Image src="/images/image2.jpg" alt="Sample Slide" fill className="object-cover" />
            </div>

            {/* Title */}
            <div className="px-2 py-2">
              <h4 className="text-md font-semibold text-foreground">Lachlan Turczan</h4>
              <p className="text-sm text-foreground">Founded 1998, Amsterdam</p>
            </div>
          </Link>
          <Link href="#" className="flex flex-col items-start bg-transparent hover:bg-red-700 transition-all ">
            {/* Image */}
            <div className="p-4 relative w-full h-100">
              <Image src="/images/image1.jpg" alt="Sample Slide" fill className="object-cover" />
            </div>

            {/* Title */}
            <div className="px-2 py-2">
              <h4 className="text-md font-semibold text-foreground">Studio Drift</h4>
              <p className="text-sm text-foreground">Founded 1998, Amsterdam</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default function ArtworkDetail() {
  const artworkData = {
    title: 'A Place Beyond Belief',
    artistName: 'Nathan Coley',
    tags: ['Installation', 'Al Jubail'],
    slides: [
      {
        imageUrl: 'https://i.imgur.com/vHq0A28.png', // Re-hosted image from screenshot
        caption: 'Caption for image 1',
        alt: 'A Place Beyond Belief light installation on scaffolding at night.',
      },
      {
        imageUrl: 'https://i.imgur.com/rS2T4Hk.png', // Using the other image as a second slide
        caption: 'Caption for image 2',
        alt: 'Artist Nathan Coley in a light installation.',
      },
      {
        imageUrl: 'https://via.placeholder.com/800x600/cccccc/808080?text=Image+3',
        caption: 'Caption for a placeholder image',
        alt: 'A placeholder image.',
      },
    ],
    year: 2012,
    medium: 'Mixed media, illuminated text on scaffolding',
    dimensions: 'Dimensions variable',
    courtesy: 'Courtesy of the artist',
    description: (
      <p>
        Nathan Coley examines the intersection of public space and personal, social, and political beliefs. His three illuminated text-based installations on scaffolding across Abu Dhabi invite reflection on the spaces they
        inhabit. A Place Beyond Belief (2012) at Lake Park near the former Café Layali Zaman encourages contemplation on Abu Dhabi’s evolving identity embracing diverse cultures. In downtown Abu Dhabi, The World Within; The
        World Without (2024) draws inspiration from Scottish sociologist Patrick Geddes’s closely titled 1905 book on how inner thought fuels external action, acutely relevant to this fast-developing city. In Al Ain Oasis,
        You Create What You Will (2014) references the power of imagination in George Bernard Shaw’s In the Beginning: BC 4004 (In the Garden of Eden) (1921) —a play on human agency; set against the UNESCO heritage site,
        viewers can consider how they themselves shape the future.
      </p>
    ),
  }

  return (
    <div>
      <ArtworkDetailComponents {...artworkData} />

      {/* related artworks */}
      <section className="mt-12">
        <div className="flex justify-between mb-6">
          <h2 className="text-3xl text-foreground font-semibold">Related Artworks</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="#" className="flex flex-col items-start bg-transparent hover:bg-sky-300 transition-all">
            {/* Image */}
            <div className="p-4 relative w-full h-80">
              <Image src="/images/program1.jpg" alt="Sample Slide" fill className="object-cover" />
            </div>

            {/* Title */}
            <div className="flex flex-col px-2 py-2">
              <h3 className="text-md font-semibold text-foreground">Title of the artwork</h3>
              <p className="text-md font-semibold text-foreground flex items-center">Nathan Coley</p>
            </div>
          </Link>

          <Link href="#" className="flex flex-col items-start bg-transparent hover:bg-sky-300 transition-all">
            {/* Image */}
            <div className="p-4 relative w-full h-80">
              <Image src="/images/image3.jpg" alt="Sample Slide" fill className="object-cover" />
            </div>

            {/* Title */}
            <div className="flex flex-col px-2 py-2">
              <h3 className="text-md font-semibold">Title of the artwork</h3>
              <p className="text-md font-semibold text-foreground flex items-center">Nathan Coley</p>
            </div>
          </Link>

          <Link href="#" className="flex flex-col items-start bg-transparent hover:bg-sky-300 transition-all">
            {/* Image */}
            <div className="p-4 relative w-full h-80">
              <Image src="/images/program1.jpg" alt="Sample Slide" fill className="object-cover" />
            </div>

            {/* Title */}
            <div className="flex flex-col px-2 py-2">
              <h3 className="text-md font-semibold text-foreground">Title of the artwork</h3>
              <p className="text-md font-semibold text-foreground flex items-center">Nathan Coley</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
