import React from 'react'
import Link from 'next/link'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import AnimateBackground from '../../animate-bg/AnimateBackground'
import { placeholderImageLoading } from '@/utils'

export default function ArtistCard({ artistData, className = 'bg-danger', height = 'h-125', isAbout = true, imgSrc = '' }: { artistData: any; className?: string; height?: string; imgSrc?: string; isAbout?: boolean }) {
  return (
    <Link href={`/manar/artist-detail/${artistData?.slug}`} className={`group flex flex-col items-start bg-transparent transition-all cursor-pointer text-foreground hover:text-hovertext`}>
      <AnimateBackground bgClass={className}>
        {/* Image */}
        <div className={`p-4 relative w-full ${height}`}>
          <ImageGuard src={artistData?.images?.card?.url || imgSrc} alt={artistData?.title} fill className="object-cover" priority={true} placeholder="blur" blurDataURL={placeholderImageLoading} />
        </div>

        {/* Title */}
        <div className="px-2 py-3">
          <h2 className="text-base font-semibold text-hovertext md:text-foreground group-hover:text-hovertext">{artistData?.title}</h2>
          {isAbout && <p className="text-sm font-semibold text-hovertext md:text-foreground group-hover:text-hovertext">{artistData?.about}</p>}
        </div>
      </AnimateBackground>
    </Link>
  )
}
