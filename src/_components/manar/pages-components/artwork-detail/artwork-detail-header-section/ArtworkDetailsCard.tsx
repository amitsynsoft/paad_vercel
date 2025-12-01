import React from 'react'
import { Chip } from '@heroui/react'

export default function ArtworkDetailsCard({ artworkData }: { artworkData: any }) {
  return (
    <div className=" lg:pt-0 pb-12 mt-4">
      <h1 className="text-lg sm:text-base font-bold text-foreground  max-w-2xl ">{artworkData?.title}</h1>
      <h1 className="text-lg sm:text-base font-bold text-foreground max-w-2xl ">{artworkData?.artist?.title}</h1>

      {artworkData?.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-8 md:mt-6">
          {artworkData?.tags?.map((tag: string, index: number) => (
            <Chip
              key={index}
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
