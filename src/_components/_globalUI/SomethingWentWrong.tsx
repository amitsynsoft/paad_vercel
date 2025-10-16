'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@heroui/react'

export default function SomethingWentWrong({
  title = 'Something went wrong.',
  message = 'Unable to load page data.',
  src = '/images/internal-server.svg',
  onload,
}: {
  title?: string
  message?: string
  onload?: () => void
  src?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center gap-4">
      <Image src={src || '/images/internal-server.svg'} alt="Internal Server Error" width={300} height={300} />
      <h2 className="text-lg text-danger font-semibold mb-2">{title}</h2>
      <p className="text-foreground mb-6 text-base">{message}</p>
      <Button variant="bordered" color="danger" onPress={() => onload?.()} className="text-base font-bold rounded-full min-w-1/6 !py-6">
        Try Again
      </Button>
    </div>
  )
}
