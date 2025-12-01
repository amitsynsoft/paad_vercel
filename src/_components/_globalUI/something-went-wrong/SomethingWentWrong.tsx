'use client'

import React from 'react'
import { Button } from '@heroui/react'
import ImageGuard from '../image-guard/ImageGuard.component'
import { useRootSegment } from '@/hooks/useRootSegment.hook'

export default function SomethingWentWrong(props: SomethingWentWrongProps) {
  const { title = 'Something went wrong.', message = 'Unable to load page data.', onload, isEnableTryAgain = true, isEnableImage = true, isEnableMessage = true, src } = props

  const { isBiennial } = useRootSegment()

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center gap-4">
      {isEnableImage && <ImageGuard src={src || isBiennial ? '/images/biennial/internal-server.svg' : '/images/manar/internal-server.svg'} alt="Internal Server Error" width={300} height={300} />}

      <h2 className="text-lg text-danger font-semibold mb-2">{title}</h2>
      {isEnableMessage && <p className="text-foreground mb-6 text-base">{message}</p>}

      {isEnableTryAgain && (
        <Button variant="bordered" color="danger" onPress={() => onload?.()} className="text-base font-bold rounded-full min-w-1/6 !py-6">
          Try Again
        </Button>
      )}
    </div>
  )
}

export type SomethingWentWrongProps = {
  title?: string
  message?: string
  onload?: () => void
  src?: string
  isEnableTryAgain?: boolean
  isEnableImage?: boolean
  isEnableMessage?: boolean
}
