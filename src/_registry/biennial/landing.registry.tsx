// components/registry.ts
import Banner from '@/_components/biennial/pages-components/Banner'
import ContentCard from '@/_components/biennial/pages-components/ContentCard'
import CompactFooter from '@/_layouts/biennial/compact-footer/CompactFooter'

export const LandingRegistry: Record<string, React.FC<{ data: any }>> = {
  banner: Banner,
  'content-card': ContentCard,
  'compact-footer': CompactFooter,
}
