'use client'

import SomethingWentWrong from '@/_components/_globalUI/SomethingWentWrong'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return <SomethingWentWrong title="Something went wrong " message={error?.message} onload={reset} />
}
