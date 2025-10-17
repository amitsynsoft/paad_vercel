'use client'

import Link from 'next/link'
import ImageGuard from '../../image-guard/ImageGuard.component'
import { ManarButton } from '../../buttons/ManarButton'
import { useTranslations } from 'next-intl'

export default function MapOverviewCard({ city, name, imageUrl, onClose, lat, lon, isDirection = true, directionLabel }: MapOverviewCardProps) {
  const t = useTranslations('CommonButton')
  return (
    <div className="bg-primary dark:bg-background text-white p-4 w-69 flex flex-col gap-4 -translate-x-1/2">
      <div className="flex justify-between items-start gap-2">
        <div className="flex flex-col">
          <h3 className="text-base">
            <i>{city}</i>
          </h3>
          <h3 className="text-base">{name}</h3>
        </div>
        <div className="w-[24px] h-[24px] group border-2 border-white rounded-full p-1 cursor-pointer hover:bg-white" onClick={onClose}>
          <img src="/x-button.svg" alt="close" height={12} width={12} className="transition-all group-hover:invert" />
        </div>
      </div>

      {imageUrl && (
        <div className={`relative w-[245px] h-[180px] ${imageUrl ? 'bg-[#eeedfb]' : ''}`}>
          <ImageGuard src={imageUrl} alt="image" fill />
        </div>
      )}

      {isDirection && (
        <div className="flex justify-start">
          <ManarButton as={Link} href={`https://www.google.com/maps/dir/?api=1&origin=my+location&destination=${lat},${lon}`} target="_blank" rel="noopener noreferrer" color="directionOutlineHover" className="text-sm h-8">
            {t('directions')}
          </ManarButton>
        </div>
      )}
    </div>
  )
}

type MapOverviewCardProps = {
  city?: string
  name?: string
  imageUrl?: string
  onClose: () => void
  lat?: number
  lon?: number
  isDirection?: boolean
  directionLabel?: string
}
