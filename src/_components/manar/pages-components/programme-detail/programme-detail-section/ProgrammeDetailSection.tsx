'use client'

import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { placeholderImageLoading } from '@/utils'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function ProgrammeDetailSection({ programmeData }: { programmeData: any }) {
  return (
    <div className="flex flex-col gap-2 mt-12">
      <div className="flex flex-col gap-2">
        <div className="relative w-full max-w-[900px] aspect-[900/680] mx-auto">
          <ImageGuard src={programmeData?.images?.url} alt="programme image" fill className="object-cover" placeholder="blur" blurDataURL={placeholderImageLoading} />
        </div>
        {programmeData?.imageCaption && <p className="text-start text-sm font-semibold">{programmeData?.imageCaption || ''}</p>}
      </div>
      {/* description */}
      <div className="text-base md:!text-[25px] leading-[31px] py-12">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ p: ({ node, ...props }) => <p {...props} className="mb-4" /> }}>
          {programmeData?.description}
        </ReactMarkdown>
      </div>
    </div>
  )
}
