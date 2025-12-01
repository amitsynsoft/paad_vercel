'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { placeholderImage } from '@/utils'
import { ManarButton } from '../../buttons/ManarButton'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

export default function MapOverviewCard({ name, imageUrl, onClose, lat, lon, isDirection = true, artworkName, locationType, pageType, slug = '' }: MapOverviewCardProps) {
  const t = useTranslations('CommonButton')
  const locale = useLocale()
  const [isArtwork, setIsArtwork] = useState(false)
  const isHome = pageType === 'home'

  useEffect(() => {
    // TODO: remove location type to  type
    setIsArtwork(locationType === (locale === 'ar' ? 'عمل فني' : 'Artwork'))
  }, [locale])

  return (
    <div className="bg-primary dark:bg-background text-white p-4 w-69 flex flex-col gap-4 -translate-x-1/2 font-abcdiatype">
      {/* Header */}
      <div className="flex justify-between items-start gap-2">
        <div className="flex flex-col">
          <h3 className="text-base">{isHome ? isArtwork ? <i>{name || 'None'}</i> : name || 'None' : <i>{name || 'None'}</i>}</h3>

          {(!isHome || isArtwork) && <h3 className="text-base">{artworkName || 'None'}</h3>}
        </div>

        <div className="w-[28px] h-[28px] group border-2 border-white rounded-full p-1 cursor-pointer hover:bg-white flex items-center justify-center shrink-0" onClick={onClose}>
          <img src="/images/manar/x-button.svg" alt="close" height={12} width={12} className="transition-all group-hover:invert" />
        </div>
      </div>

      {/* Image */}
      {(isArtwork || !isHome) && (
        <Link href={slug ? `/manar/artwork-detail/${slug}` : '#'} key={name + locale}>
          <div className={`relative w-[245px] h-[180px] ${imageUrl ? 'bg-[#eeedfb]' : ''}`}>
            <Image fill src={imageUrl || placeholderImage} alt="image" className="object-cover h-full w-full" />
          </div>
        </Link>
      )}

      {/* Directions */}
      {isDirection && (
        <div className="flex justify-start">
          <ManarButton
            as={Link}
            href={`https://www.google.com/maps/dir/?api=1&origin=my+location&destination=${lat},${lon}`}
            target="_blank"
            rel="noopener noreferrer"
            color="directionOutlineHover"
            className="text-sm h-8 border-2 leading-[19px] font-bold"
          >
            {t('directions')}
          </ManarButton>
        </div>
      )}
    </div>
  )
}

type MapOverviewCardProps = {
  name?: string
  imageUrl?: string
  onClose: () => void
  lat?: number
  lon?: number
  isDirection?: boolean
  directionLabel?: string
  artworkName?: string
  locationType?: string
  pageType?: 'home' | 'artworks' | 'artist'
  slug?: string
}
