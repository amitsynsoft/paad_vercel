export type ProgrammeDTO = {
  isActive: number
  slug: string
  title: string
  images: Images
  imageCaption: string
  category: Category
  artists: Artist[]
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  location: string[]
  description: string
  keyWords: string
  price: string
  accessibilityNote: string
  dateString: string
  timeString: string
}
type Images = {
  url: string
  width: number
  height: number
}

type Category = {
  name: string
  icon: any
}

type Artist = {
  isActive: number
  variant: any
  slug: string
  about: string
  images: Images2
  location: any
  title: string
  description: string
  markdown: any
  seo: any
  socialPlatforms: any
  otherArtists: OtherArtists
}
type Images2 = {
  portrait: any
  landscape: any
  card: Card
}

type Card = {
  url: string
  width: number
  height: number
}

type OtherArtists = {
  isActive: string
  title: string
  description: string
}
