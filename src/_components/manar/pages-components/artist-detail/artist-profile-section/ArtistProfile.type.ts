export type ArtistProfileProps = {
  name: string
  about: string
  residence: string
  tags: string[]
  imageUrl: string
  description: React.ReactNode // Using React.ReactNode for rich text in bio
  backLinkUrl: string
  workPlace: string
}
