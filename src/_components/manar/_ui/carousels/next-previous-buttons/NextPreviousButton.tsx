'use client'
import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'

export default function NextPreviousButton() {
  const locale = useLocale()
  const { mode } = useThemeStore()

  const baseBtn = 'group border-2 border-primary rounded-full flex items-center justify-center w-10 h-10 cursor-pointer transition-all hover:bg-primary hover:text-foreground'

  const getImgClass = (mode: string) => {
    if (mode === 'light') {
      return `
        transition-all
        brightness-100 invert-0
        group-hover:brightness-0 group-hover:invert
      `
    } else {
      return `
        transition-all
        brightness-0 invert
        group-hover:brightness-0 group-hover:invert-0
      `
    }
  }

  return (
    <div className="flex gap-2">
      <div className={`swiper-button-prev-${mode} ${baseBtn}`}>
        <Image src="/images/ic_prev.svg" alt="Prev" width={20} height={20} className={`${getImgClass(mode)} ${locale === 'ar' ? 'rotate-180' : ''}`} />
      </div>

      <div className={`swiper-button-next-${mode} ${baseBtn}`}>
        <Image src="/images/ic_next.svg" alt="Next" width={20} height={20} className={`${getImgClass(mode)} ${locale === 'ar' ? 'rotate-180' : ''}`} />
      </div>
    </div>
  )
}
