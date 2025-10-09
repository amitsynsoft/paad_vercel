'use client'

import { Skeleton } from '@heroui/react'
import React from 'react'

export default function loading() {
  return (
    <div>
      <Skeleton className="w-full h-[500px] rounded-lg bg-default-300"> </Skeleton>
    </div>
  )
}
