import React from 'react'
import Link from 'next/link'
import ImageGuard from '@/_components/manar/_ui/image-guard/ImageGuard.component'
import AnimateBackground from '../../animate-bg/AnimateBackground'

export default function ArtistCard({ artistData, className = 'bg-danger', height = 'h-125' }: { artistData: any; className?: string; height?: string }) {
  return (
    <Link href={`/manar/artist-detail/${artistData?.slug}`} className={`group flex flex-col items-start bg-transparent transition-all cursor-pointer text-foreground hover:text-hovertext`}>
      <AnimateBackground bgClass={className}>
        {/* Image */}
        <div className={`p-4 relative w-full ${height}`}>
          <ImageGuard src={artistData?.images?.card?.url} alt={artistData?.title} fill className="object-cover" />
        </div>

        {/* Title */}
        <div className="px-2 py-3">
          <h4 className="text-base font-semibold">{artistData?.title}</h4>
          <p className="text-sm font-semibold">{artistData?.about}</p>
        </div>
      </AnimateBackground>
    </Link>
  )
}
