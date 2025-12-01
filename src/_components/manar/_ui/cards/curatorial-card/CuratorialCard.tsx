import React from 'react'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import AnimateBackground from '../../animate-bg/AnimateBackground'
import Link from 'next/link'
import { placeholderImageLoading } from '@/utils'

interface CuratorialData {
  name: string
  role: string
  image: {
    url: string
  }
  slug: string
}

export default function CuratorialCard({ curatorialData, className = 'bg-primary' }: { curatorialData: CuratorialData; className?: string }) {
  return (
    // <div className={`group flex flex-col items-start bg-transparent transition-all text-foreground hover:text-background [@media(pointer:coarse)]:text-background`}>
    <Link href={`/manar/curatorial-detail/${curatorialData?.slug}`} className={`group flex flex-col items-start bg-transparent transition-all text-foreground hover:text-background [@media(pointer:coarse)]:text-background`}>
      <AnimateBackground bgClass={className}>
        {/* Image */}
        <div className="p-4 relative w-full h-100">
          <ImageGuard src={curatorialData?.image?.url} alt={curatorialData?.name} fill className="object-cover object-top" placeholder="blur" blurDataURL={placeholderImageLoading} />
        </div>

        {/* Title */}
        <div className="px-2 py-3">
          <h2 className="text-base font-semibold">{curatorialData?.name}</h2>
          <p className="text-sm font-semibold">{curatorialData?.role}</p>
        </div>
      </AnimateBackground>
    </Link>
    // </div>
  )
}
