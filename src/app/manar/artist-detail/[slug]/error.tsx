'use client'

import SomethingWentWrong from '@/_components/_globalUI/SomethingWentWrong'
import NoRecordFound from '@/_components/manar/_ui/no-record-found/NoRecordFound'
import Section from '@/_components/manar/_ui/section/Section'
import { useRouter } from 'next/navigation'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter()
  if (error?.message.includes('404')) {
    return (
      <Section>
        <NoRecordFound title="Artist not found" message="The artist you are looking for does not exist." actionLabel="Go Back" onAction={() => router.back()} />
      </Section>
    )
  }
  return (
    <Section>
      <SomethingWentWrong title="Something went wrong" message={error?.message} onload={reset} />
    </Section>
  )
}
