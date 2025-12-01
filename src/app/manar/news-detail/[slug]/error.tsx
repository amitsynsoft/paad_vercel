'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import Section from '@/_components/manar/_ui/section/Section'
import SomethingWentWrong from '@/_components/_globalUI/something-went-wrong/SomethingWentWrong'
import NoRecordFound from '@/_components/manar/_ui/no-record-found/NoRecordFound'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const errorT = useTranslations('Error')
  const newsDetailT = useTranslations('Manar.NewsDetail')

  const router = useRouter()
  if (error?.message.includes('404')) {
    return (
      <Section>
        <NoRecordFound
          imageSrc="/images/manar/news-not-found.svg"
          title={newsDetailT('NewsNotFound')}
          message={newsDetailT('NewsNotFoundMessage')}
          actionLabel={newsDetailT('NewsNotFoundActionLabel')}
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
