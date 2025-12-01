import { paths } from '@/navigate/paths'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function ArtistsAndArtworksHeader({ artistTitle, artistLink, artworkTitle, artworkLink, actions }: ArtistsAndArtworksProps) {
  const pathName = usePathname()
  return (
    <div className="flex md:justify-between mb-20 flex-wrap gap-4">
      <div className="flex gap-8">
        <Link href={artistLink || paths.manarArtists()} className={`font-semibold text-lg ${pathName === paths.manarArtists() ? 'underline ' : ''}`}>
          {artistTitle}
        </Link>
        <Link href={artworkLink || paths.manarArtworks()} className={`font-semibold text-lg ${pathName === paths.manarArtworks() ? 'underline' : ''}`}>
          {artworkTitle}
        </Link>
      </div>
      <div className="flex gap-2">{actions}</div>
    </div>
  )
}

type ArtistsAndArtworksProps = { artistTitle: string; artworkTitle: string; artistLink: string; artworkLink: string; actions: React.ReactNode }
