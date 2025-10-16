import React from 'react'
import ImageGuard from '@/_components/manar/_ui/image-guard/ImageGuard.component'
import AnimateBackground from '../../animate-bg/AnimateBackground'
import Link from 'next/link'

interface CuratorialData {
  name: string
  role: string
  image: {
    url: string
  }
}

export default function CuratorialCard({ curatorialData, className = 'bg-primary' }: { curatorialData: CuratorialData; className?: string }) {
  return (
    <div className={`group flex flex-col items-start bg-transparent transition-all text-foreground hover:text-background [@media(pointer:coarse)]:text-background`}>
      <AnimateBackground bgClass={className}>
        {/* Image */}
        <div className="p-4 relative w-full h-100">
          <ImageGuard src={curatorialData?.image?.url} alt={curatorialData?.name} fill className="object-cover object-top" />
        </div>

        {/* Title */}
        <div className="px-2 py-3">
          <h4 className="text-base font-semibold">{curatorialData?.name}</h4>
          <p className="text-sm font-semibold">{curatorialData?.role}</p>
        </div>
      </AnimateBackground>
    </div>
  )
}
