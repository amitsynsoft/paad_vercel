import React from 'react'
import { Chip } from '@heroui/react'

import Section from '@/_components/manar/_ui/section/Section'

export default function ArtworkDetailsCard({ artworkData }: { artworkData: any }) {
  return (
    <Section>
      <h1 className="text-lg sm:text-base font-bold text-foreground sentence-case">{artworkData?.title}</h1>

      <div className="my-4 flex flex-wrap gap-2">
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
    </Section>
  )
}
