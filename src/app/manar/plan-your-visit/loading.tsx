'use client'

import React from 'react'
import SkeletonLoader from '@/_components/manar/_ui/skeleton-loader/SkeletonLoader'
import Section from '@/_components/manar/_ui/section/Section'

export default function loading() {
  return (
    <Section className="max-w-4xl flex flex-col gap-6">
      <div className="w-80 h-14 mb-24">
        <SkeletonLoader className="w-full h-16" />
      </div>

      <div className="flex flex-col gap-3 mb-24">
        <SkeletonLoader className="w-full h-10" />
        <SkeletonLoader className="w-full h-10" />
        <SkeletonLoader className="w-full h-10" />
        <SkeletonLoader className="w-full h-10" />
        <SkeletonLoader className="w-full h-10" />
      </div>

      <div className="flex flex-col gap-3 mb-24">
        <SkeletonLoader className="w-full h-10" />
        <SkeletonLoader className="w-full h-10" />
        <SkeletonLoader className="w-full h-10" />
        <SkeletonLoader className="w-full h-10" />
        <SkeletonLoader className="w-full h-10" />
      </div>
    </Section>
  )
}
