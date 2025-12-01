'use client'
import React from 'react'
import { Skeleton } from '@heroui/react'

export default function SkeletonLoader({ className }: { className?: string }) {
  return (
    <Skeleton className="rounded-lg h-min-screen w-full">
      <div className={`h-8 w-full rounded-lg bg-default-300 ${className}`} />
    </Skeleton>
  )
}
