import React from 'react'
import Link from 'next/link'

import AnimateBackgroundCenter from '../../animate-bg-center/AnimateBgCenter'
import ImageGuard from '../../../../_globalUI/image-guard/ImageGuard.component'
import { placeholderImageLoading } from '@/utils'
import { NewsDTO } from '@/dto/manar/NewsPage.dto'
import { paths } from '@/navigate/paths'

export default function NewsCard({ newsData, className = 'bg-warning', height = 'h-100' }: { newsData: NewsDTO; className?: string; height?: string }) {
  return (
    <Link href={paths.manarNewsDetail(newsData.slug) || '#'} className={`group flex flex-col items-start bg-transparent transition-all cursor-pointer text-foreground hover:text-hovertext`}>
      <AnimateBackgroundCenter bgClass="bg-warning">
        {/* Date */}
        <p className="text-sm py-2 px-2 font-semibold text-hovertext md:text-foreground group-hover:text-hovertext">{newsData.dateString}</p>

        {/* Image */}
        <div className={`p-4 relative w-full ${height}`}>
          <ImageGuard src={newsData.image} alt={newsData.title} fill className="object-cover" placeholder="blur" blurDataURL={placeholderImageLoading} />
        </div>

        {/* Title */}
        <h4 className="text-base font-semibold py-2 px-2 text-hovertext md:text-foreground group-hover:text-hovertext !leading-[30px] line-clamp-1">{newsData.title}</h4>
      </AnimateBackgroundCenter>
    </Link>
  )
}
