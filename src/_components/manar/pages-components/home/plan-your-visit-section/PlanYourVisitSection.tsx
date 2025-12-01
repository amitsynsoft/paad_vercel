'use client'

import Link from 'next/link'
import React from 'react'
import Section from '@/_components/manar/_ui/section/Section'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import { useLocale } from 'next-intl'
import { MANAR_GUIDEBOOK_URL } from '@/utils'
import { ButtonTextArabic, ButtonTextEnglish, desciptionTextArabic, desciptionTextEnglish, pdfButtonTextArabic, pdfButtonTextEnglish } from './planYourVisitTextContent'

// Todo : remove any
export default function PlanYourVisitSection({ data }: { data: any }) {
  const locale = useLocale()

  return (
    <Section>
      <div className="2xl:max-w-7xl max-w-2xl mx-auto text-center">
        <h2 className="text-lg text-foreground font-semibold whitespace-pre-line leading-[25px] !mb-0">{(data?.title || '').split('-').join('\n')}</h2>

        <div className="whitespace-pre-line font-semibold text-base my-8">{locale === 'ar' ? desciptionTextArabic : desciptionTextEnglish || ''}</div>
        <div className="flex gap-3 justify-center">
          <ManarButton as={Link} href={'mailto:publicartabudhabi@dctabudhabi.ae'} color="primaryOutlineHover">
            {locale === 'ar' ? ButtonTextArabic : ButtonTextEnglish}
          </ManarButton>
          <ManarButton as={Link} href={MANAR_GUIDEBOOK_URL} target="_blank" download color="primaryOutlineHover">
            {locale === 'ar' ? pdfButtonTextArabic : pdfButtonTextEnglish}
          </ManarButton>
        </div>
      </div>
    </Section>
  )
}
