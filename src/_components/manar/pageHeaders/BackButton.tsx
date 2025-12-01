import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import { getDirectionClass, getImgClass } from '@/utils'
import { useLocale } from 'next-intl'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import ImageGuard from '../../_globalUI/image-guard/ImageGuard.component'

export default function BackButton({ label, link, imageURL = '/images/manar/ic_primary-previous.svg' }: { label: string; link: string; imageURL?: string }) {
  const router = useRouter()
  const locale = useLocale()
  const { mode } = useThemeStore()
  return (
    <ManarButton as={Link} color="primaryOutlineHover" href={link || router.back()} className="mb-2">
      <ImageGuard src={imageURL} alt="Prev" width={20} height={20} className={`${getDirectionClass(locale)} ${getImgClass(mode)}`} />
      {label}
    </ManarButton>
  )
}
