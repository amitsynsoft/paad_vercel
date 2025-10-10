'use client'
import { MarkdownRendererComponent } from '@/dto/manar'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const MarkdownRenderer: React.FC<{ data: MarkdownRendererComponent }> = ({ data }) => {
  const { markdown } = data

  if (!markdown) return null

  return (
    <section className="max-w-5xl mx-auto py-10 px-4">
      <article className="prose prose-lg text-foreground text-base">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </article>
    </section>
  )
}

export default MarkdownRenderer
