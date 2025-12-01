'use client'

import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import Section from '@/_components/manar/_ui/section/Section'
import { useLocale } from 'next-intl'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { placeholderImage, placeholderImageLoading } from '@/utils'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'

export default function OurPartnersSection({ title = '', description = '', programmePartners = { title: '', logo: [] }, presentingPartners = { title: '', logo: [] } }: OurPartnersSectionProps) {
  const locale = useLocale()
  const { mode } = useThemeStore()
  return (
    <Section className="!py-20 !pb-12 max-w-[906px]">
      {/* Header */}

      {title && <h2 className="text-lg font-semibold mb-12">{title}</h2>}

      {/* presenting Partners */}
      <div>
        {presentingPartners?.title && <div className="text-[25px] font-semibold mb-12">{presentingPartners?.title}</div>}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-15 gap-y-25">
          {presentingPartners?.logo?.map((logo, index) => {
            const isDark = mode === 'dark'
            const imageSrc = isDark ? logo?.darkLogo || placeholderImage : logo?.lightLogo || placeholderImage

            return String(logo?.url || '')?.length ? (
              <Link href={logo?.url || '#'} target="_blank" key={index + locale} className="max-w-48 max-h-25">
                <div className="relative w-full h-25">
                  <ImageGuard key={index + mode} src={imageSrc} alt={logo?.darkLogo || `partner-logo-${index}`} fill className="object-cover " placeholder="blur" blurDataURL={placeholderImageLoading} />
                </div>
              </Link>
            ) : (
              <div key={index + locale} className="max-w-48 max-h-25">
                <div className="relative w-full h-25">
                  <ImageGuard key={index + mode} src={imageSrc} alt={logo?.darkLogo || `partner-logo-${index}`} fill className="object-cover " placeholder="blur" blurDataURL={placeholderImageLoading} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* description */}
      {description && (
        <div className="text-base md:!text-[25px] leading-[31px] py-12">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ p: ({ node, ...props }) => <p {...props} className="mb-4" /> }}>
            {description}
          </ReactMarkdown>
        </div>
      )}

      <div className="mt-18">
        {programmePartners?.title && <div className="text-[25px] font-semibold mb-12">{programmePartners?.title}</div>}

        {/*programme partners */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-10 w-full">
          {programmePartners?.logo?.map((partner, index) => {
            const isDark = mode === 'dark'
            const imageSrc = isDark ? partner?.darkLogo || placeholderImage : partner?.lightLogo || placeholderImage
            return String(partner?.url || '')?.length ? (
              <Link href={partner?.url || '#'} target="_blank" key={index + locale} className="max-w-48 max-h-30 flex items-start justify-start">
                <div className="relative w-full h-25">
                  <ImageGuard key={index + mode} src={imageSrc} alt={imageSrc || `partner-logo-${index}`} fill className={`object-contain object-left`} placeholder="blur" blurDataURL={placeholderImageLoading} />
                </div>
              </Link>
            ) : (
              <div key={index + locale} className="max-w-48 max-h-30">
                <div className="relative w-full h-25">
                  <ImageGuard key={index + mode} src={imageSrc} alt={imageSrc || `partner-logo-${index}`} fill className={`object-contain object-left`} placeholder="blur" blurDataURL={placeholderImageLoading} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

type Partner = {
  name?: string
  logo?: string
  description?: string
}
type ProgrammePartner = {
  title?: string
  logo?: {
    lightLogo?: string
    darkLogo?: string
    url?: string
  }[]
}

type OurPartnersSectionProps = {
  title?: string
  description?: string
  partners?: Partner[]
  programmePartners?: ProgrammePartner
  presentingPartners?: ProgrammePartner
}
