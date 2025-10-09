export type Component = BannerComponent | QuickLinkBlock | IntroductionBlock | NewsCarousel | HomePlanYourVisitBlock | HomeProgrammeBlock | HomeArtistCarousel | HomeMapView

export interface HomePageDTO {
  theme: 'light' | 'dark'
  isOutlineLogo: boolean
  isActive: number
  slug: string
  seo: Seo
  components: Component[]
}
export type Seo = {
  title: string
  description: string
  keywords: string
  image?: string | null
}

export type Image = {
  url: string
  width: number
  height: number
}

export type Video = {
  url: string
}

export type Logo = {
  url: string
  width: number
  height: number
}

export type Label = {
  scrollDownText?: string
  byText?: string
}

export type BannerComponent = {
  component: 'banner'
  isActive: number
  title: string
  subTitle: string
  description: string
  images: {
    portrait: Image
    landscape: Image
  }
  labels?: Label
  video?: string | null
  logo?: Logo | null
}

export type QuickLinkIcon = {
  light: { src: string }
  dark: { src: string }
}

export type QuickLink = {
  label: string
  url: string
}

export type QuickLinkBlock = {
  component: 'quick-link-block'
  title?: string | null
  icons: QuickLinkIcon[]
  link: QuickLink[]
}

export type IntroductionBlock = {
  component: 'introduction-block'
  title: string
  description: string
  link: QuickLink
}

export type Button = {
  label: string
  url: string
}

export type NewsCarousel = {
  component: 'news-carousel'
  isActive: number
  title: string
  description: string
  button: Button
  news: any[]
}

export type HomePlanYourVisitBlock = {
  component: 'plan-your-visit-block'
  title: string
  link: Button
}

export type Category = {
  name: string
  icon?: string | null
}

export type Artist = {
  name: string
  role?: string
}

export type HomeEvent = {
  isActive: number
  variant: string
  image: Image
  category: Category
  artists: Artist[]
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  location: string
}

export type HomeProgrammeBlock = {
  component: 'programme-block'
  isActive: number
  title: string
  description: string
  button: Button
  events: HomeEvent[]
}

export type HomeArtistCarouselItem = {
  isActive: number
  variant: string
  title: string
  description: string
  images: {
    portrait?: Image | null
    landscape?: Image | null
    card?: Image | null
  }
  slug: string
}

export type HomeArtistCarousel = {
  component: 'artist-carousel'
  isActive: number
  image?: Image | null
  title: string
  description?: string
  button: Button
  artists: HomeArtistCarouselItem[]
}

export type HomeMapView = {
  component: 'map-view'
  isActive: number
  title: string
  description?: string
  labels?: Label
  button: Button
}
