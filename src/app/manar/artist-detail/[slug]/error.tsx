'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import SomethingWentWrong from '@/_components/_globalUI/something-went-wrong/SomethingWentWrong'
import NoRecordFound from '@/_components/manar/_ui/no-record-found/NoRecordFound'
import Section from '@/_components/manar/_ui/section/Section'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const errorT = useTranslations('Error')
  const artistDetailT = useTranslations('Manar.ArtistDetail')

  const router = useRouter()
  if (error?.message.includes('404')) {
    return (
      <Section>
        <NoRecordFound
          imageSrc="/images/manar/artist-not-found.svg"
          title={artistDetailT('ArtistNotFound')}
          message={artistDetailT('ArtistNotFoundMessage')}
          actionLabel={artistDetailT('ArtistNotFoundActionLabel')}
          onAction={() => router.back()}
        />
      </Section>
    )
  }
  return (
    <Section>
      <SomethingWentWrong title={errorT('SomethingWentWrong')} message={error?.message} onload={reset} />
    </Section>
  )
}
