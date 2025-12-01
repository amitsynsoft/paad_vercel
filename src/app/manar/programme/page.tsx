import React from 'react'
import { getLocale } from 'next-intl/server'

import ProgrammeClient from './_components/ProgrammeClient'

export default async function Page() {
  const locale = await getLocale()
  // const programmeData = await getProgrammes({ locale })
  // return <ProgrammeClient data={programmeData} />

  return <ProgrammeClient />
}
