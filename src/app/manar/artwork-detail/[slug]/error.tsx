'use client'

import SomethingWentWrong from '@/_components/_globalUI/SomethingWentWrong'
import NoRecordFound from '@/_components/manar/_ui/no-record-found/NoRecordFound'
import Section from '@/_components/manar/_ui/section/Section'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const errorT = useTranslations('Error')
  const artworkDetailT = useTranslations('Manar.ArtworkDetail')

  const router = useRouter()
  if (error?.message.includes('404')) {
    return (
      <Section>
        <NoRecordFound
          imageSrc="/images/artwork-not-found.svg"
          title={artworkDetailT('ArtworkNotFound')}
          message={artworkDetailT('ArtworkNotFoundMessage')}
          actionLabel={artworkDetailT('ArtworkNotFoundActionLabel')}
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
