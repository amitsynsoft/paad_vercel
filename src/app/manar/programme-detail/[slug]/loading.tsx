'use client'

import React from 'react'
import SkeletonLoader from '@/_components/manar/_ui/skeleton-loader/SkeletonLoader'
import Section from '@/_components/manar/_ui/section/Section'

export default function loading() {
  return (
    <Section className="max-w-4xl flex flex-col gap-6">
      {/* Back button */}
      <div className="w-36 h-10">
        <SkeletonLoader className="w-full h-full rounded-full" />
      </div>

      {/* Title */}
      <div className="space-y-3">
        <SkeletonLoader className="h-8 w-2/3 rounded-md" />
        <SkeletonLoader className="h-8 w-1/3 rounded-md" />
      </div>

      {/* Date & location */}
      <div className="space-y-2">
        <SkeletonLoader className="h-5 w-1/4 rounded-md" />
        <SkeletonLoader className="h-5 w-1/3 rounded-md" />
      </div>

      {/* Buttons (Free, Register, Talk) */}
      <div className="flex items-center gap-4 pt-2">
        <SkeletonLoader className="h-10 w-16 rounded-full" />
        <SkeletonLoader className="h-10 w-24 rounded-full" />
        <SkeletonLoader className="h-8 w-16 rounded-full ml-auto" />
      </div>

      {/* Image */}
      <div className="pt-6">
        <SkeletonLoader className="w-full h-[400px] rounded-2xl" />
      </div>
    </Section>
  )
}
