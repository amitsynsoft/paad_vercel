import React from 'react'
import Link from 'next/link'
import ImageGuard from '@/_components/manar/_ui/image-guard/ImageGuard.component'

export default function ArtistCard({ artistData }: { artistData: any }) {
  return (
    <Link
      // Todo: remove this hard code url
      // href={`/manar/artist-detail/${artistData?.slug}`}
      href="#"
      className="flex flex-col items-start bg-transparent hover:bg-danger transition-all cursor-pointer text-foreground hover:text-hovertext"
    >
      {/* Image */}
      <div className="p-4 relative w-full h-100">
        <ImageGuard src={artistData?.images?.card?.url} alt={artistData?.title} fill className="object-cover" />
      </div>

      {/* Title */}
      <div className="px-2 py-2">
        <h4 className="text-base font-semibold ">{artistData?.title}</h4>
        <p className="text-sm font-semibold">{artistData?.about}</p>
      </div>
    </Link>
  )
}
