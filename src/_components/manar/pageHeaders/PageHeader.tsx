'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PageHeader({ title, titleLink, actions, underlineActive = true, className }: PageHeaderProps) {
  const pathname = usePathname()

  return (
    <div className={`flex flex-col md:flex-row gap-4 justify-between my-8 md:my-20 items-start ${className}`}>
      {title && (
        <div className="flex items-center gap-4">
          {titleLink ? (
            <Link href={titleLink} className={`text-lg font-semibold transition-all hover:underline ${underlineActive && pathname === titleLink ? 'underline' : ''}`}>
              {title}
            </Link>
          ) : (
            <h2 className="text-lg font-semibold">{title}</h2>
          )}
        </div>
      )}

      {/* Right Section — Actions */}
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  )
}

type PageHeaderProps = {
  title?: string
  titleLink?: string
  actions?: React.ReactNode
  underlineActive?: boolean
  className?: string
}
