import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NewsCard({ newsData }: { newsData: any }) {
  return (
    <Link href={newsData.link} className="flex flex-col newsDatas-start bg-transparent hover:bg-warning text-foreground hover:text-hovertext transition-all cursor-pointer">
      {/* Date */}
      <p className="text-sm py-2 px-2 font-semibold">{newsData.date}</p>

      {/* Image */}
      <div className="p-4 relative w-full h-100">
        <Image src={newsData.image} alt={newsData.title} fill className="object-cover" />
      </div>

      {/* Title */}
      <h4 className="text-base font-semibold py-2 px-2">{newsData.title}</h4>
    </Link>
  )
}
