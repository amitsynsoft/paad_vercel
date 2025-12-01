import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { paths } from '@/navigate/paths'
import Link from 'next/link'
import React from 'react'

export default function ArtworkCard(props: any) {
  const { title, images, labels, hasOverlay = true, slug, dateString, timeString, price, name, location, shortDescription, textColor } = props

  return (
    <article>
      {/* TODO: Remove hardcode text */}
      <Link href={paths.biennialArtworkDetail(slug) || '#'}>
        <div className="relative overflow-hidden mb-4 group">
          <>
            <div className="relative h-[clamp(200px,25vw,480px)]">
              <ImageGuard className="group-hover:scale-110 transition-transform duration-300 object-cover" src={images?.card?.src || ''} fill sizes="100vw" alt="Artwork card" />
            </div>

            <span className="absolute inset-0 opacity-0 w-28 h-28 scale-50 flex justify-center items-center bg-primary rounded-full m-auto group-hover:opacity-100 group-hover:scale-100 transition-transform">Read More</span>
            {hasOverlay && images?.card?.src && <div className="absolute opacity-100 inset-0 flex justify-center items-center w-full h-full bg-primary/40 group-hover:opacity-0 transition-opacity"></div>}
          </>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className={`text-xl ${textColor}`}>{title}</h5>
          <div>
            <p className={`text-small ${textColor}`}>By - {name}</p>
            <p className={`text-small ${textColor}`}>Location - {location}</p>
          </div>
        </div>

        <>
          {/* {dateString && timeString && (
            <p className="text-sm font-semibold">
              {dateString} | {timeString} <i className="inline-block ms-5"></i>
              {price && (
                <span className="block sm:inline text-primary whitespace-nowrap">
                  {labels?.fee}: {price} {labels?.currency}
                </span>
              )}
            </p>
          )} */}

          {/* {shortDescription && <p className="text-large mt-2">{shortDescription}</p>} */}
        </>
      </Link>
    </article>
  )
}
