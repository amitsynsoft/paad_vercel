import React from 'react'
import Link from 'next/link'
import ImageGuard from '@/_components/manar/_ui/image-guard/ImageGuard.component'
import AnimateBackground from '../../animate-bg/AnimateBackground'

export default function ArtworkCard({ artworkData, artist, className = 'bg-danger', height = 'h-100' }: { artworkData: any; artist?: any; className?: string; height?: string }) {
  return (
    <Link href={`/manar/artwork-detail/${artworkData?.slug}`} className={`group flex flex-col items-start bg-transparent transition-all cursor-pointer text-foreground hover:text-hovertext ${className}`}>
      <AnimateBackground bgClass={className}>
        {/* Image */}
        <div className={`p-4 relative w-full ${height}`}>
          <ImageGuard src={artworkData?.images?.[0]?.card?.url} alt={artworkData?.title} fill className="object-cover" />
        </div>

        {/* Title */}
        <div className="px-2 py-2">
          <h4 className="text-base font-semibold line-clamp-2 sentence-case">{artworkData?.title}</h4>
          <p className="text-base font-semibold line-clamp-2 sentence-case">{artworkData?.location?.name}</p>
        </div>
      </AnimateBackground>
    </Link>
  )
}
