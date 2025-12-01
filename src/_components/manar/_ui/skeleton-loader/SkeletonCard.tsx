'use client'

import React from 'react'
import { Skeleton } from '@heroui/react'
import AnimateBackground from '../animate-bg/AnimateBackground'

export default function SkeletonCard({
  height = 'h-[330px]',
  className = 'bg-success',
  rootClassName = '',
  hideDescription = false,
}: {
  height?: string
  className?: string
  rootClassName?: string
  hideDescription?: boolean
}) {
  return (
    <div className={rootClassName}>
      <div className={`group flex flex-col items-start bg-transparent transition-all ${className}`}>
        {/* Image + Badge skeleton */}
        <div className={`relative w-full ${height}`}>
          <Skeleton className="w-full h-full" />
          <span className="absolute top-3 right-3">
            <Skeleton className="w-24 h-7 rounded-full" />
          </span>
        </div>

        {/* Content skeleton */}
        <div className="w-full flex flex-col px-2 py-2 gap-4">
          <div className="flex gap-6 w-full">
            <div className="flex flex-col mt-1 min-w-[100px] gap-2">
              <Skeleton className="w-20 h-4" />
              <Skeleton className="w-14 h-4" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <Skeleton className="w-3/4 h-5" />
              <div className="inline-flex items-center gap-2">
                <Skeleton className="w-4 h-4 rounded-full" />
                <Skeleton className="w-1/2 h-4" />
              </div>
            </div>
          </div>
          {!hideDescription && (
            <div className="flex w-full flex-col gap-2">
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
