'use client'

import React from 'react'
import Section from '@/_components/manar/_ui/section/Section'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function LightCompassSection({ data }: { data: any }) {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-lg text-foreground font-semibold mb-8">{data?.title || ''}</h2>
        <div className="text-base">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data?.description || ''}</ReactMarkdown>
        </div>

        <span className="text-foreground underline font-bold text-base">
          <Link
            // Todo: remove this hard code url
            // href={data?.link?.url || ''}
            href={'#'}
          >
            {data?.link?.label || ''}
          </Link>
        </span>
      </div>
    </Section>
  )
}
