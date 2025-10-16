export interface HeaderDTO {
  menuItems?: MenuItem[]
  headerIcon?: HeaderIcon[]
  headerIconShrink?: HeaderIcon[]
  themeMode?: HeaderIcon[]
  headerLogo?: HeaderIcon[]
  slides?: string[]
  headerLinks?: HeaderLink
  mobileLogo?: MobileLogo[]
  searchLogo?: SearchLogo[]
}

type ImageVariant = {
  src: string
}

type HeaderIcon = {
  light: ImageVariant
  dark: ImageVariant
}

type MenuItem = {
  label: string
  url: string
  icon?: string | null
}

type HeaderLink = {
  label: string
  url: string
}

type MobileLogo = {
  light: ImageVariant
  dark: ImageVariant
}

type SearchLogo = {
  search: string
  images: {
    light: ImageVariant
    dark: ImageVariant
  }
}
