import Section from '@/_components/manar/_ui/section/Section'
import SkeletonLoader from '@/_components/manar/_ui/skeleton-loader/SkeletonLoader'
import React from 'react'

export default function loading() {
  return (
    <Section>
      <div className="flex gap-4 mb-20">
        <h2 className="text-2xl font-bold mb-6 w-50">
          <SkeletonLoader className="w-full h-10" />
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-y-17 md:gap-x-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <SkeletonLoader className="w-full h-[330px]" />
            <SkeletonLoader className="w-full h-10" />
            <SkeletonLoader className="w-full h-10" />
          </div>
        ))}
      </div>
    </Section>
  )
}
