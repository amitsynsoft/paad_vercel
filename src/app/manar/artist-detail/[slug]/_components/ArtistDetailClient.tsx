'use client'

import React from 'react'
import Section from '@/_components/manar/_ui/section/Section'
import BackButton from '@/_layouts/manar/pageHeaders/BackButton'
import ArtistCard from '@/_components/manar/_ui/cards/artist-card/ArtistCard'
import ExploreMap from '@/_components/manar/Explore-map-artworks/ExploreArtworks'
import { paths } from '@/navigate/paths'
import { ArtistProfile } from '@/_components/manar/pages-components/artist-detail/artist-profile-section/ArtistProfile'
import CalendarDrawer from '@/_components/manar/_ui/calender-drawer/CalenderDrawer'

export default function ArtistDetailClient({ data }: { data: any }) {
  const artworks = [
    {
      id: 1,
      title: 'Title of the artwork 1',
      artist: 'Nathan Coley',
      image: '/images/program1.jpg',
      href: '#',
      description: 'Description of the artwork 1',
    },
    {
      id: 2,
      title: 'Title of the artwork 2',
      artist: 'Nathan Coley',
      image: '/images/image3.jpg',
      href: '#',
      description: 'Description of the artwork 2',
    },
    // Add more objects here
  ]

  return (
    <div>
      <Section className="pt-8 pb-16 ">
        <BackButton label="All Artists" link={paths.manarArtists()} />

        <ArtistProfile
          name={data?.title}
          birthYear={1993}
          birthPlace="Los Angeles"
          residence={data?.location?.title}
          tags={['Artist', 'Painter']}
          imageUrl={data?.images?.card?.url}
          imageAlt={data?.title}
          bio={data?.markdown}
          backLinkUrl={paths.manarArtists()}
        />
      </Section>

      {/* artworks */}
      <Section>
        <div className="flex justify-between mb-6">
          <h2 className="text-3xl text-foreground font-semibold">Artworks</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {artworks.map((item, index) => (
            <ArtistCard key={index} artistData={item} />
          ))}
        </div>
      </Section>

      {/* Google Map */}
      <Section className="mt-12">{/* <ExploreMap /> */}</Section>

      {/* previous artworks */}
      <Section>
        <div className="flex justify-between mb-6">
          <h2 className="text-3xl text-foreground font-semibold">Previous Artworks</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artworks.map((item, index) => (
            <ArtistCard key={index} artistData={item} />
          ))}
        </div>
      </Section>
    </div>
  )
}
