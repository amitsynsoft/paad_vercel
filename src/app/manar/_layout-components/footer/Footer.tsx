'use client'

import React from 'react'
import { useLocale } from 'next-intl'

import FooterClient from './FooterClient/FooterClient'
import SomethingWentWrong from '@/_components/_globalUI/something-went-wrong/SomethingWentWrong'
import SkeletonLoader from '@/_components/manar/_ui/skeleton-loader/SkeletonLoader'
import CalendarDrawer from '@/_components/manar/_ui/calender-drawer/CalenderDrawer'
import { useGetFooterQuery } from '@/redux/services/manar/layout.api'

export default function Footer() {
  const locale = useLocale()
  const { data, isLoading, isError, isFetching, isSuccess } = useGetFooterQuery({ locale, organizationName: 'Manar' })

  return (
    <>
      {(isLoading || isFetching) && <SkeletonLoader className="h-24" />}
      {isSuccess && <FooterClient footerData={data} />}
      <CalendarDrawer />
      {isError && <SomethingWentWrong title="Error fetching footer data" isEnableMessage={false} isEnableImage={false} isEnableTryAgain={false} />}
    </>
  )
}
