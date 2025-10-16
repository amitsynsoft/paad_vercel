import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AnimateBackgroundCenter from '../../animate-bg-center/AnimateBgCenter'

export default function NewsCard({ newsData, className = 'bg-warning' }: { newsData: any; className?: string }) {
  return (
    <Link href={newsData.link} className={`group flex flex-col newsDatas-start bg-transparent transition-all cursor-pointer text-foreground hover:text-hovertext`}>
      <AnimateBackgroundCenter bgClass="bg-warning">
        {/* Date */}
        <p className="text-sm py-2 px-2 font-semibold">{newsData.date}</p>

        {/* Image */}
        <div className="p-4 relative w-full h-100">
          <Image src={newsData.image} alt={newsData.title} fill className="object-cover" />
        </div>

        {/* Title */}
        <h4 className="text-base font-semibold py-2 px-2">{newsData.title}</h4>
      </AnimateBackgroundCenter>
    </Link>
  )
}
