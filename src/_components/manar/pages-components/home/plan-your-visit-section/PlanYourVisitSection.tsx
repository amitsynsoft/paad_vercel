'use client'

import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
import Section from '@/_components/manar/_ui/section/Section'

// Todo : remove any
export default function PlanYourVisitSection({ data }: { data: any }) {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-lg text-foreground font-semibold mb-4">{data?.title || ''}</h2>
        <Button as={Link} href={data?.link?.url || ''} variant="bordered" size="md" color="primary" className="rounded-full text-base font-semibold">
          {data?.link?.label || ''}
        </Button>
      </div>
    </Section>
  )
}
