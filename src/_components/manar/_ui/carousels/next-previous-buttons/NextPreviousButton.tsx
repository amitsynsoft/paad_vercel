'use client'
import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { getDirectionClass, getImgClass } from '@/utils'
import ImageGuard from '../../../../_globalUI/image-guard/ImageGuard.component'

export default function NextPreviousButton({ typeofslider = 'default' }: { typeofslider?: string }) {
  const locale = useLocale()
  const { mode } = useThemeStore()

  const baseBtn = 'group border-2 border-primary rounded-full flex items-center justify-center w-10 h-10 cursor-pointer transition-all hover:bg-primary hover:text-foreground'

  return (
    <div className="flex gap-2">
      <div className={`swiper-button-prev-${mode}-${typeofslider} ${baseBtn}`}>
        <ImageGuard src="/images/manar/ic_primary-previous.svg" alt="Prev" width={20} height={20} className={`${getImgClass(mode)} ${getDirectionClass(locale)}`} />
      </div>

      <div className={`swiper-button-next-${mode}-${typeofslider} ${baseBtn}`}>
        <ImageGuard src="/images/manar/ic_primary-next.svg" alt="Next" width={20} height={20} className={`${getImgClass(mode)} ${getDirectionClass(locale)}`} />
      </div>
    </div>
  )
}
