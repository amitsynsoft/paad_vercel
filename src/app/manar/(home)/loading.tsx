'use client'

import React from 'react'
import SkeletonLoader from '@/_components/manar/_ui/skeleton-loader/SkeletonLoader'

export default function loading() {
  return (
    <div className="flex flex-col gap-4">
      <SkeletonLoader className="min-h-[500px]" />
    </div>
  )
}
