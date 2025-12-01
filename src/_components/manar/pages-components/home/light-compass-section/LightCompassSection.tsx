'use client'

import React from 'react'
import Link from 'next/link'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'

import Section from '@/_components/manar/_ui/section/Section'

export default function LightCompassSection({ data }: { data: any }) {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-lg text-foreground font-semibold mb-8">{data?.title || ''}</h2>
        <div className="text-base">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data?.description || ''}</ReactMarkdown>
        </div>

        <span className="text-foreground underline font-bold text-base">
          <Link aria-label={`${data?.link?.label} about Manar`} href={data?.link?.url || '#'}>
            {data?.link?.label || ''}
          </Link>
        </span>
      </div>
    </Section>
  )
}
