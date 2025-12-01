'use client'

import React from 'react'
import SkeletonLoader from '@/_components/manar/_ui/skeleton-loader/SkeletonLoader'
import Section from '@/_components/manar/_ui/section/Section'

export default function loading() {
  return (
    <Section className="max-w-4xl flex flex-col gap-6">
      <div className="flex flex-col gap-6 w-50 ">
        <SkeletonLoader className="w-full h-16" />
        <SkeletonLoader className="w-full h-10" />
      </div>

      <div className="grid grid-cols-4 gap-6">
        <SkeletonLoader className="h-12" />
        <SkeletonLoader className="h-12" />
        <SkeletonLoader className="h-12" />
        <SkeletonLoader className="h-12" />
      </div>

      <SkeletonLoader className="w-full h-80" />
    </Section>
  )
}
