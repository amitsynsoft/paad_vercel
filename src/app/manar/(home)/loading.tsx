'use client'

import { Skeleton } from '@heroui/react'
import React from 'react'

export default function loading() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="rounded-lg h-min-screen w-full">
        <div className="h-24 w-full rounded-lg bg-default-300" />
      </Skeleton>
      <Skeleton className="rounded-lg h-min-screen w-full">
        <div className="min-h-[500px] w-full rounded-lg bg-default-300" />
      </Skeleton>
    </div>
  )
}
