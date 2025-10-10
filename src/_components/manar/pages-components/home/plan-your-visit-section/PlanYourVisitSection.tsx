'use client'

import Link from 'next/link'
import React from 'react'
import Section from '@/_components/manar/_ui/section/Section'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'

// Todo : remove any
export default function PlanYourVisitSection({ data }: { data: any }) {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-lg text-foreground font-semibold mb-4">{data?.title || ''}</h2>
        <ManarButton
          as={Link}
          // Todo: remove this hard code url
          // href={data?.link?.url || ''}
          href="#"
          color="primaryOutlineHover"
        >
          {data?.link?.label || ''}
        </ManarButton>
      </div>
    </Section>
  )
}
