import React from 'react'
import { getLocale } from 'next-intl/server'

import ProgramListClient from './_components/program-list-client/ProgramListClient.component'
import PagesHeader from '@/_components/biennial/pages-header/PagesHeader.component'
import InternalServerError from '@/_components/biennial/pages-components/internal-server-error/InternalServerError.component'
import { getProgramDetailBySlug, getPrograms } from '@/services/biennial/programs/getPrograms'
import { getLabelsBiennial } from '@/services/biennial/layout/getLayout'
import ProgramDetailModel from './_components/program-detail-model/ProgramDetailModel'

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function page({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
  const locale = await getLocale()

  const getLabels: any = await getLabelsBiennial(locale)
  const programsData: any = await getPrograms({
    locale,
    filter: (await searchParams)?.dateRanges as string,
  })

  const query = await searchParams
  const open = !!query?.programDetail

  let programDetailData: any = null
  if (query?.programDetail && typeof query?.programDetail === 'string') {
    programDetailData = await getProgramDetailBySlug({ locale, slug: query?.programDetail as string })
  }

  if (!programsData) return <InternalServerError />

  return (
    <div>
      <PagesHeader data={programsData?.banner} />
      <ProgramListClient programs={programsData.programs ?? []} labels={getLabels?.labels} />
      {query?.programDetail && <ProgramDetailModel programDetailData={programDetailData} open={open} categoryLabel={programsData?.banner?.title ?? ''} />}
    </div>
  )
}
