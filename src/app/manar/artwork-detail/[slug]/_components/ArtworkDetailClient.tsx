'use client'

import React from 'react'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'

import Section from '@/_components/manar/_ui/section/Section'
import ArtworkDetailsCard from '@/_components/manar/pages-components/artwork-detail/artwork-detail-header-section/ArtworkDetailsCard'
import ArtworkSlider from '@/_components/manar/pages-components/artwork-detail/artwork-slider/ArtworkSlider'
import ArtistSection from '@/_components/manar/pages-components/artwork-detail/artist-section/ArtistSection'
import BackButton from '@/_layouts/manar/pageHeaders/BackButton'
import { paths } from '@/navigate/paths'
import Link from 'next/link'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import { ArrowLeft } from 'lucide-react'

import { useLocale } from 'next-intl'
import MapArtworkDetail from '@/_components/manar/pages-components/artwork-detail/artwork-detail-map/MapArtworkDetail'

export default function ArtworkDetail({ artworkData }: { artworkData: any }) {
  const locale = useLocale()
  return (
    <div>
      <Section className="!pt-7 md:!pt-10 !pb-25 md:!pb-32">
        {/* harcoded */}

        <ManarButton as={Link} color="primaryOutlineHover" className={`${locale === 'en' ? 'flex-row' : 'flex-row-reverse'}`} href={paths.manarArtworks()}>
          <ArrowLeft /> {locale === 'en' ? 'All Artworks' : 'جميع الأعمال الفنية'}
        </ManarButton>

        <div className="max-w-[906px] mx-auto">
          {/* --- Header Section --- */}
          <ArtworkDetailsCard artworkData={artworkData} />

          {/* --- Swiper Slider Section --- */}
          <ArtworkSlider artworkData={artworkData} />

          {/* --- Artwork Details Section --- */}

          <div className="text-[18px] md:text-[25px] leading-[22px] md:leading-[30px] text-foreground pt-8 md:pt-20 ">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{artworkData?.markdown}</ReactMarkdown>
          </div>
        </div>
      </Section>

      {/* --- Map Section --- */}
      {Boolean(Object.keys(artworkData?.location).length) && <MapArtworkDetail location={artworkData?.location} images={artworkData?.images} />}

      {/* Artists */}
      <ArtistSection artworkData={artworkData} />
    </div>
  )
}
