import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { paths } from '@/navigate/paths'
import Link from 'next/link'
import React from 'react'

export default function ProgramCard({ title, images, hasOverlay = true, slug }: any) {
  return (
    <article>
      <Link href={paths.biennialProgramsDetail(slug) || '#'} className="group">
        <div className="relative overflow-hidden mb-4">
          <div className="relative h-[400px]">
            <ImageGuard className="group-hover:scale-110 transition-transform duration-300 object-cover" src={images?.card?.src || ''} fill sizes="100vw" alt="Artwork card" />
            {hasOverlay && <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/0 transition-colors duration-300 pointer-events-none"></div>}
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-24 w-24 bg-primary rounded-full">
            Read More
          </div>
        </div>
        <h5 className="text-xl">{title}</h5>

        {/* <>
          {dateString && timeString && (
            <p className="text-sm font-semibold">
              {dateString} | {timeString} <i className="inline-block ms-5"></i>
              {price && (
                <span className="block sm:inline text-primary whitespace-nowrap">
                  {labels?.fee}: {price} {labels?.currency}
                </span>
              )}
            </p>
          )}

          {labels?.by && name && (
            <p>
              {labels.by} - {name}
            </p>
          )}
          {labels?.location && location && (
            <p>
              {labels.location}: {location}
            </p>
          )}
          {shortDescription && <p className="text-large mt-2">{shortDescription}</p>}
        </> */}
      </Link>
    </article>
  )
}
