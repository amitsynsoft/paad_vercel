import React from 'react'
import { Chip } from '@heroui/react'

export default function ArtworkDetailsCard({ artworkData }: { artworkData: any }) {
  return (
    <div className="pt-14 lg:pt-0 pb-12">
      <h1 className="text-lg sm:text-base font-bold text-foreground sentence-case max-w-2xl ">{artworkData?.title}</h1>

      {artworkData?.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-8 md:mt-6">
          {artworkData?.tags?.map((tag: string) => (
            <Chip
              key={tag}
              variant="bordered"
              color="primary"
              size="md"
              classNames={{
                content: 'font-bold text-sm',
              }}
            >
              {tag}
            </Chip>
          ))}
        </div>
      )}
    </div>
  )
}
