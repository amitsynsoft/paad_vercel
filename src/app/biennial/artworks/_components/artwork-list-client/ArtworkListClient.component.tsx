'use client'

import Container from '@/_components/biennial/_ui/container/Container.component'
import ArtworkCard from '@/_components/biennial/_ui/cards/artwork-card/ArtworkCard.component'

const ArtworkListClient = ({ artworks }: ArtworkListProps) => {
  return (
    <section>
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {artworks?.length > 0 && artworks?.map((item: any, index: any) => <ArtworkCard key={index} title={item.title} images={item.images} slug={item.slug} name={item.name} location={item.location} />)}
        </div>
      </Container>
    </section>
  )
}

export default ArtworkListClient

type ArtworkListProps = {
  artworks: any[]
}
