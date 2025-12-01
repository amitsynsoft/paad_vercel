'use client'

import React from 'react'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import { useTranslations } from 'next-intl'

import Section from '@/_components/manar/_ui/section/Section'
import BackButton from '@/_components/manar/pageHeaders/BackButton'
import ArtworkSlider from '@/_components/manar/pages-components/artwork-detail/artwork-slider/ArtworkSlider'
import ArtistSection from '@/_components/manar/pages-components/artwork-detail/artist-section/ArtistSection'
import MapArtworkDetail from '@/_components/manar/pages-components/artwork-detail/artwork-detail-map/MapArtworkDetail'
import ArtworkDetailsCard from '@/_components/manar/pages-components/artwork-detail/artwork-detail-header-section/ArtworkDetailsCard'
import { paths } from '@/navigate/paths'

export default function ArtworkDetail({ artworkData }: { artworkData: any }) {
  const t = useTranslations('Manar.ArtworkDetail')
  return (
    <div>
      <Section className="!pt-7 md:!pt-10 !pb-25 md:!pb-32">
        <div className="max-w-[906px] mx-auto">
          {/* harcoded */}
          <BackButton label={t('AllArtworks')} link={paths.manarArtworks()} />

          {/* --- Header Section --- */}
          <ArtworkDetailsCard artworkData={artworkData} />

          {/* --- Swiper Slider Section --- */}
          <ArtworkSlider artworkData={artworkData} />

          {/* --- Artwork Details Section --- */}

          <div className="text-[18px] md:text-[25px] leading-[22px] md:leading-[30px] text-foreground pt-8 md:pt-20 ">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ p: ({ node, ...props }) => <p className="mb-4 " {...props} /> }}>
              {artworkData?.markdown}
            </ReactMarkdown>
          </div>
        </div>
      </Section>

      {/* --- Map Section --- */}
      {Boolean(artworkData?.locations?.length) && <MapArtworkDetail locations={artworkData?.locations} />}

      {/* Artists */}
      <ArtistSection artworkData={artworkData} />
    </div>
  )
}
