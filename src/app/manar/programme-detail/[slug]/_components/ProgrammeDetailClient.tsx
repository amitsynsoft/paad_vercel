'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

import Section from '@/_components/manar/_ui/section/Section'
import BackButton from '@/_components/manar/pageHeaders/BackButton'
import ProgrammeDetailHeader from '@/_components/manar/pages-components/programme-detail/programme-detail-header/ProgrammeDetailHeader'
import ProgrammeDetailSection from '@/_components/manar/pages-components/programme-detail/programme-detail-section/ProgrammeDetailSection'
import ParticipatingArtistsSection from '@/_components/manar/pages-components/home/participating-artists-section/ParticipatingArtistsSection'
import AccessibilitySection from '@/_components/manar/pages-components/programme-detail/accessibility-section/AccessibilitySection'
import { paths } from '@/navigate/paths'

export default function ProgrammeDetailClient({ data }: { data: any }) {
  const t = useTranslations('Manar.ProgrammeDetail')
  return (
    <div>
      <Section className="!pt-7 md:!pt-10  md:!pb-16">
        <div className="max-w-[906px] mx-auto">
          {/* harcoded */}
          <BackButton label={t('AllProgrammes')} link={paths.manarProgramme()} />

          {/* --- Header Section --- */}
          <ProgrammeDetailHeader programmeData={data} />

          {/* --- Programme Detail Section --- */}
          <ProgrammeDetailSection programmeData={data} />
        </div>
      </Section>
      {data?.artists?.length > 0 && <ParticipatingArtistsSection data={data} title={t('participatingArtistsSectionTitle')} hideButton={true} />}

      {data?.accessibilityNote && <AccessibilitySection title={t('accessibilitySectionTitle')} content={data?.accessibilityNote} />}
    </div>
  )
}
