// components/registry.ts
import Banner from '@/_components/biennial/pages-components/home-page/Banner'
import ContentCard from '@/_components/biennial/pages-components/home-page/ContentCard'
import CompactFooter from '@/_components/biennial/compact-footer/CompactFooter'

export const LandingRegistry: Record<string, React.FC<{ data: any }>> = {
  banner: Banner,
  'content-card': ContentCard,
  'compact-footer': CompactFooter,
}
