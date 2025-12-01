'use client'

import SkeletonLoader from '@/_components/manar/_ui/skeleton-loader/SkeletonLoader'

export default function OurPartnersSectionSkeleton() {
  return (
    <div className="max-w-[906px] mx-auto py-20 pb-12 animate-pulse">
      {/* Main title */}
      <SkeletonLoader className="h-7 w-48 mb-12" />

      {/* Presenting Partners grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-15 gap-y-25">
        {Array.from({ length: 1 }).map((_, i) => (
          <div key={i} className="max-w-48 mt-6 max-h-25">
            <SkeletonLoader className="h-24 w-full" />
          </div>
        ))}
      </div>

      {/* Description skeleton */}
      <div className="py-12 space-y-4">
        <SkeletonLoader className="h-5 w-full" />
        <SkeletonLoader className="h-5 w-4/5" />
        <SkeletonLoader className="h-5 w-2/3" />
      </div>

      {/* Programme Partners Section */}
      <div className="mt-18">
        {/* Programme Partners title */}
        <SkeletonLoader className="h-7 w-60 mb-12" />

        {/* Programme Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-10 mt-20 w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="max-w-48 max-h-30 flex items-start justify-start">
              <SkeletonLoader className="h-24 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
