'use client'

import React from 'react'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { placeholderImageLoading } from '@/utils'

export default function NewsDetailSection({ newsData }: { newsData: any }) {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 mt-4">
        {/* Left Column: Text Content (takes 3/5 of width on lg screens) */}
        <div className="lg:col-span-2">
          <h1 className="text-lg sm:text-base font-bold text-foreground tracking-tight">{newsData?.title}</h1>

          <div className="mt-2 lg:mt-6 text-base text-foreground font-bold">
            <p>
              {newsData?.dateString} {newsData?.timeString}
            </p>
          </div>
        </div>

        {/* Right Column: Image (takes 2/5 of width on lg screens) */}
        <div className="lg:col-span-3 mt-12 lg:mt-0 relative ml-auto w-full max-w-110 h-140">
          <ImageGuard src={newsData?.image} alt={'news image'} fill className="object-cover top-center" placeholder="blur" blurDataURL={placeholderImageLoading} />
        </div>
      </div>

      {/* --- Description Section --- */}
      <div className="text-base md:!text-[25px] leading-[31px] py-6">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ p: ({ node, ...props }) => <p {...props} className="mb-4" /> }}>
          {newsData?.description}
        </ReactMarkdown>
      </div>
    </section>
  )
}
