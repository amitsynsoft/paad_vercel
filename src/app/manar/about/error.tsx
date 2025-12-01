'use client'

import SomethingWentWrong from '@/_components/_globalUI/something-went-wrong/SomethingWentWrong'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return <SomethingWentWrong title="Something went wrong while loading the About page." message={error?.message} onload={reset} />
}
