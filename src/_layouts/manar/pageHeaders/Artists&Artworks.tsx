import { paths } from '@/navigate/paths'
import Link from 'next/link'
import React from 'react'

export default function ArtistsAndArtworksHeader({ artistTitle, artistLink, artworkTitle, artworkLink, actions }: ArtistsAndArtworksProps) {
  return (
    <div className="flex justify-between mb-12">
      <div className="flex gap-6">
        <Link href={artistLink || paths.manarArtists()} className="font-semibold text-2xl underline">
          {artistTitle}
        </Link>
        <Link href={artworkLink || paths.manarArtworks()} className="font-semibold text-2xl">
          {artworkTitle}
        </Link>
      </div>
      <div className="flex gap-2">{actions}</div>
    </div>
  )
}

type ArtistsAndArtworksProps = { artistTitle: string; artworkTitle: string; artistLink: string; artworkLink: string; actions: React.ReactNode }
