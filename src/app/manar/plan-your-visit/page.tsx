import React from 'react'
import { getLocale } from 'next-intl/server'

import PlanYourVisitClient from './_components/PlanYourVisitClient'
import { getPlanYourVisit } from '@/services/manar/plan-your-visit/getPlanYourVisit'

export default async function page() {
  const locale = await getLocale()
  const planYourVisitData = await getPlanYourVisit({ locale })
  return <PlanYourVisitClient data={planYourVisitData} />
}
