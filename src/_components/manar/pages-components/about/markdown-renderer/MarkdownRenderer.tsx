'use client'
import Section from '@/_components/manar/_ui/section/Section'
import { MarkdownRendererComponent } from '@/dto/manar'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const MarkdownRenderer: React.FC<{ data: MarkdownRendererComponent }> = ({ data }) => {
  const { markdown } = data
  if (!markdown) return null

  return (
    <Section className="max-w-[900px] mx-auto !pt-10 !pb-8 px-4">
      <article className="prose prose-lg text-foreground text-[20px] md:!text-[25px]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          skipHtml={false}
          components={{
            p: ({ node, ...props }) => <p {...props} className="mb-4" />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </Section>
  )
}

export default MarkdownRenderer
