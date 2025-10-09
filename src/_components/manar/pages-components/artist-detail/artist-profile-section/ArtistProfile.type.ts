export type ArtistProfileProps = {
  name: string
  birthYear: number
  birthPlace: string
  residence: string
  tags: string[]
  imageUrl: string
  imageAlt: string
  bio: React.ReactNode // Using React.ReactNode for rich text in bio
  backLinkUrl: string
}
