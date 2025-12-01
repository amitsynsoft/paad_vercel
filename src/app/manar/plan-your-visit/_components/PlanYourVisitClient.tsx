import React from 'react'

import ExploreMapSection from '@/_components/manar/pages-components/home/explore-map-section/ExploreMapSection'
import PlanYourVisitHeader from '@/_components/manar/pages-components/plan-your-visit/plan-your-visit-header/PlanYourVisitHeader'

export default function PlanYourVisitClient({ data }: { data: any }) {
  return (
    <div>
      <PlanYourVisitHeader data={data?.components?.[0]} />
      <ExploreMapSection data={data?.components?.[0]} hideHeader={true} />
    </div>
  )
}
