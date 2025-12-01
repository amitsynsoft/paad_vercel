'use client'

import ArtistCard from '@/_components/biennial/_ui/cards/artist-card/ArtistCard.component'
import Container from '@/_components/biennial/_ui/container/Container.component'

const ArtistListClient = ({ artists, labels }: ArtistListProps) => {
  console.log('artists', artists)
  return (
    <section>
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {!!artists?.length &&
            artists?.map((artist: any, index: number) => (
              <div key={`${artist?.title}-${index}`}>
                <ArtistCard artist={artist} labels={labels} hasOverlay={true} title={artist?.name} images={artist?.images} slug={artist?.slug} />
              </div>
            ))}
        </div>
      </Container>
    </section>
  )
}

export default ArtistListClient

type ArtistListProps = {
  artists: any
  labels: {
    readMore: string
  }
}
