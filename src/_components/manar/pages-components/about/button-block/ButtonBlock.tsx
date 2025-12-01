'use client'

import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import Section from '@/_components/manar/_ui/section/Section'
import Link from 'next/link'

export default function ButtonBlock({ data }: { data: any }) {
  if (!data?.label || !data?.url?.length) return null

  return (
    <Section className="!pt-8 md:!pt-12 !pb-8 md:!pb-20 max-w-[900px]">
      <ManarButton color="primaryOutlineHover" as={Link} download target="_blank" href={data.url}>
        {data.label}
      </ManarButton>
    </Section>
  )
}
