'use client'

import Section from '@/_components/manar/_ui/section/Section'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

type AccessibilitySectionProps = {
  title: string
  content: string
}

export default function AccessibilitySection({ title, content }: AccessibilitySectionProps) {
  return (
    <Section className="py-8 md:py-16">
      <h2 className="text-lg text-foreground font-semibold mb-4">{title}</h2>

      <div className="prose prose-lg max-w-none text-foreground text-base md:!text-[25px] leading-relaxed">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ p: ({ node, ...props }) => <p {...props} className="mb-4" /> }}>
          {content}
        </ReactMarkdown>
      </div>
    </Section>
  )
}
