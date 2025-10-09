export interface FooterDTO {
  menuItems?: MenuItem[]
  footerLogo?: Logo[]
  partners?: Partner[]
  secondaryLinks?: SecondaryLink[]
  copyRight?: string
  socialLinks?: SocialLinks
}

type ImageVariant = {
  src?: string
}

type Logo = {
  light?: ImageVariant
  dark?: ImageVariant
}

type MenuItem = {
  label?: string
  url?: string
  icon?: string | null
}

type Partner = {
  light?: ImageVariant
  dark?: ImageVariant
  alt?: string
}

type SecondaryLink = {
  label?: string
  url?: string
}

type SocialLinks = {
  instagram?: string
  facebook?: string
  twitter?: string
  linkedin?: string
  tiktok?: string
  [key: string]: string | undefined
}
