'use client'

import { Button } from '@heroui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { paths } from '@/navigate/paths'
import { ManarButton } from '../buttons/ManarButton'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import ImageGuard from '../../../_globalUI/image-guard/ImageGuard.component'

export default function UnderConstruction() {
  const t = useTranslations('Manar.UnderConstruction')
  const { mode } = useThemeStore()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 text-center" key={mode}>
      {/* Circular Loader */}
      <ImageGuard src={mode === 'dark' ? '/under_construction_white.gif' : '/under_construction.gif'} alt="Under Construction" width={400} height={400} />

      {/* Text */}
      <div className="text-[25px] mb-4">
        <h1 className="font-bold tracking-wide mb-1">{t('title')}</h1>
        <p>{t('description')}</p>
      </div>

      {/* Button */}
      <ManarButton as={Link} href={paths.manarHome()} color="primaryOutlineHover">
        {t('buttonText')}
      </ManarButton>
    </div>
  )
}
