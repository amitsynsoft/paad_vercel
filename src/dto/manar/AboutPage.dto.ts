// page.dto.ts

export interface AboutPageDTO {
  theme?: string
  isOutlineLogo?: boolean
  isActive?: number
  slug?: string
  seo?: SEOData
  components?: PageComponent[]
  button?: {
    label?: string
    url?: string
  }
}

export type PageComponent = PageBannerComponent | VideoContentBlockComponent | MarkdownRendererComponent | InfoContentListComponent | ContentViewComponent | SimpleTitleBlockComponent | ButtonBlockComponent

type ImageData = {
  url: string
  width: number
  height: number
}

type LinkData = {
  label: string
  url: string
}

type SEOData = {
  title: string | null
  description: string | null
  keywords: string | null
  image: string | null
}

type PageBannerComponent = {
  component: 'page-banner'
  title: {
    text: string
    position: string
  }
  link: LinkData
  images: {
    portrait: ImageData
    landscape: ImageData
  }
  labels: {
    scrollDownText?: string | null
  }
}

type VideoContentBlockComponent = {
  component: 'video-content-block'
  isActive?: number
  markdown: string
  url: string
  labels?: {
    circularText?: string
  }
}

type MarkdownRendererComponent = {
  component: 'markdown-renderer'
  markdown: string
}

type ButtonBlockComponent = {
  component: 'button-block'
  label?: string
  url?: string
}

type SocialPlatforms = {
  instagram?: string
  facebook?: string
  twitter?: string
  linkedin?: string
  tiktok?: string
  [key: string]: string | undefined
}

type InfoContentItem = {
  title: string
  markdown: string
  align?: string
  variant?: string
  images: {
    portrait: ImageData
    landscape: ImageData
    card: ImageData
  }
  socialPlatforms?: SocialPlatforms
}

type ContentViewComponent = {
  component: 'content-view'
  isActive?: number
  title?: string
  markdown?: string
  images?: {
    card: ImageData & { caption?: string }
  }[]
}

type InfoContentListComponent = {
  component: 'info-content-list'
  isActive?: number
  title?: string
  content: InfoContentItem[]
}

type SimpleTitleBlockComponent = {
  component: 'simple-title-block'
  title: string
  link?: {
    label: string
    url: string
  }
}

export type { InfoContentListComponent, MarkdownRendererComponent, VideoContentBlockComponent, PageBannerComponent, ContentViewComponent, SimpleTitleBlockComponent }
