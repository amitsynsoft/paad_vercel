'use client'

import SomethingWentWrong from '@/_components/_globalUI/SomethingWentWrong'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return <SomethingWentWrong title="Something went wrong while loading the Manar page." message={error?.message} onload={reset} />
}
