'use client'

import dynamic from 'next/dynamic'

import HeroSection from '@/_components/manar/pages-components/home/hero-section/HeroSection'
import NewsSection from '@/_components/manar/pages-components/home/news-section/NewsSection'
import ProgrammeSection from '@/_components/manar/pages-components/home/programme/ProgrammeSection'
import QuickLinkBlock from '@/_components/manar/pages-components/home/quick-link-block/QuickLinkBlock'
import LightCompassSection from '@/_components/manar/pages-components/home/light-compass-section/LightCompassSection'
import PlanYourVisitSection from '@/_components/manar/pages-components/home/plan-your-visit-section/PlanYourVisitSection'
import CuratorialTeamSection from '@/_components/manar/pages-components/home/curatorial-team-section/CuratorialTeamSection'
import ArtistSection from '@/_components/manar/pages-components/home/participating-artists-section/ParticipatingArtistsSection'

const ExploreMapSection = dynamic(() => import('@/_components/manar/pages-components/home/explore-map-section/ExploreMapSection'), { ssr: false, loading: () => <div /> })

export const HomePageRegistry: Record<string, React.FC<{ data: any }>> = {
  banner: ({ data }) => <HeroSection data={data} />,
  'quick-link-block': ({ data }) => <QuickLinkBlock data={data} />,
  'introduction-block': ({ data }) => <LightCompassSection data={data} />,

  // TODO: it is static data render
  'news-carousel': ({ data }) => <NewsSection data={data} />,
  'plan-your-visit-block': ({ data }) => <PlanYourVisitSection data={data} />,

  // TODO: change the name of this programme-carousel to programme-block
  'programme-block': ({ data }) => {
    return data?.events?.length > 0 ? <ProgrammeSection data={data} /> : null
  },
  'artist-carousel': ({ data }) => <ArtistSection data={data} />,

  // TODO: this component is not dynamic, please pass data the dynamic data to this component
  'map-view': ({ data }) => <ExploreMapSection data={data} />,
  'curator-section': ({ data }) => <CuratorialTeamSection data={data} />,
}
