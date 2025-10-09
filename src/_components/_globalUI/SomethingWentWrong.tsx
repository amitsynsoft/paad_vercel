'use client'

import React from 'react'
import { Button } from '@heroui/react'
import { AlertTriangle } from 'lucide-react'

export default function SomethingWentWrong({ title = 'Something went wrong.', message = 'Unable to load page data.', onload }: { title?: string; message?: string; onload?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center gap-4">
      <AlertTriangle className="w-16 h-16 text-danger mb-4" />
      <h2 className="text-2xl text-danger font-semibold mb-2">{title}</h2>
      <p className="text-foreground mb-6">{message}</p>
      <Button variant="solid" color="danger" onPress={() => onload?.()} className="font-bold rounded-full min-w-1/6 !py-6">
        Try Again
      </Button>
    </div>
  )
}
