'use client'
import React from 'react'
import { Chip } from '@heroui/react'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import Link from 'next/link'
import { Circle } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function ProgrammeDetailHeader({ programmeData }: { programmeData: any }) {
  return (
    <div className="mt-4">
      {/* Title + Category Chip */}
      <div className="flex justify-between items-start gap-2 mb-4 flex-wrap">
        <h1 className="text-lg md:text-xl font-bold leading-snug flex-1">{programmeData?.title}</h1>

        {programmeData?.category?.name && (
          <Chip
            variant="bordered"
            color="primary"
            classNames={{
              base: 'rounded-full h-7 shrink-0',
              content: 'font-semibold text-sm px-3',
            }}
          >
            {programmeData?.category?.name}
          </Chip>
        )}
      </div>

      {/* Date + Location */}
      <div className="mb-5">
        <p className="font-semibold text-base mb-1">
          {programmeData?.dateString}, {programmeData?.timeString}
        </p>
        <div className="flex flex-row items-center gap-2 font-semibold text-base ">
          <Circle fill="currentColor" stroke="none" className="w-3.5 h-3.5" />
          {/* <span>{programmeData?.location.map((location: string) => location).join(', ')}</span> */}
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              p: ({ node, ...props }) => <p {...props} className="text-base font-semibold flex line-clamp-1 !leading-[30px] flex-row items-center gap-2"></p>,
              a: ({ node, ...props }) => <a {...props} className="text-base font-semibold line-clamp-1 !leading-[30px] hover:underline" target="_blank" rel="noopener noreferrer" />,
            }}
          >
            {String(programmeData?.location || '')}
          </ReactMarkdown>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        {programmeData?.price && (
          <ManarButton color="primary" className="dark:bg-primary dark:text-background pointer-events-none read-only:cursor-default">
            {programmeData?.price}
          </ManarButton>
        )}
        {programmeData?.button && (
          <ManarButton as={Link} href={programmeData?.button?.url} target="_blank" rel="noopener noreferrer" className="capitalize" color="primaryOutlineHover">
            {programmeData?.button?.label}
          </ManarButton>
        )}
      </div>
    </div>
  )
}
