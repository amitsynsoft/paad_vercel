import React from 'react'
import SkeletonLoader from '@/_components/manar/_ui/skeleton-loader/SkeletonLoader'
import Section from '@/_components/manar/_ui/section/Section'

export default function loading() {
  return (
    <Section className="max-w-4xl">
      <div className="mb-20">
        <SkeletonLoader className="w-full h-10 " />
      </div>
      <div className="flex flex-col gap-6">
        <SkeletonLoader className="w-full h-80" />
        <SkeletonLoader className="w-full h-12" />
        <SkeletonLoader className="w-full h-4" />
        <SkeletonLoader className="w-full h-10" />
      </div>
    </Section>
  )
}
