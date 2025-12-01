'use client'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import Section from '@/_components/manar/_ui/section/Section'
import { Button } from '@heroui/react'
import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { MANAR_GUIDEBOOK_URL, MANAR_MEDIA_RESOURCES_URL } from '@/utils'

export default function Press() {
  const t = useTranslations('Manar.ContactAndPress.Press')

  return (
    <Section className="!py-35">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[900px] mx-auto">
          <h2 className="text-lg mb-12.5">{t('title')}</h2>
          <p className="text-2xl">{t('description')}</p>
        </div>
      </div>

      <div className="mt-12 md:mt-20 flex flex-col sm:flex-row gap-3">
        <ManarButton as={Link} href={MANAR_MEDIA_RESOURCES_URL} target="_blank" color="primaryOutlineHover" className="w-fit">
          {t('buttonText.mediaResources')}
        </ManarButton>
      </div>
    </Section>
  )
}
