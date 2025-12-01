import { cn } from '@heroui/react'
import React from 'react'

export default function Container({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('container px-10 xl:max-w-[1600px] mx-auto', className)} {...props}>
      {children}
    </div>
  )
}
