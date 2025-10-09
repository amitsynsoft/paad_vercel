'use client'
import { Button } from '@heroui/react'
import React from 'react'
import ExploreMap from '@/_components/manar/Explore-map-artworks/ExploreArtworks'
import { useExploreMapArtworkQuery } from '@/redux/services/auth.api'
import Link from 'next/link'

export default function ExploreMapSection({ data }: { data: any }) {
  const { data: mapData, isError } = useExploreMapArtworkQuery()

  console.log({ mapData })
  return (
    <section className="container py-16">
      <div className="flex justify-between mb-8">
        {/* TODO: HardCoded */}
        <h2 className="text-lg text-foreground font-semibold">{data?.title}</h2>
        <Button as={Link} href={data?.button.label} variant="bordered" size="md" color="primary" className="rounded-full text-base font-semibold">
          {/* TODO: HardCoded */}
          {data?.button?.label}
        </Button>
      </div>

      <ExploreMap />
    </section>
  )
}
