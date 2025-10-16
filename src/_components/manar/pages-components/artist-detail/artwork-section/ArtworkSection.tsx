import ArtworkCard from '@/_components/manar/_ui/cards/artwork-card/ArtworkCard'
import Section from '@/_components/manar/_ui/section/Section'
import React from 'react'

export default function ArtworkSection({ artworkData }: { artworkData: any }) {
  return (
    <Section>
      <div className="flex justify-between mb-6">
        {/* TODO: hardcoded */}
        <h2 className="text-3xl text-foreground font-semibold">Artworks</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {artworkData?.map((item: any, index: number) => (
          <ArtworkCard key={index} artworkData={item} artist={artworkData?.location?.name} className="bg-cyan-100" />
        ))}
      </div>
    </Section>
  )
}
