'use client'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Container from '../../_ui/container/Container.component'
import { Button } from '@heroui/react'
import Link from 'next/link'

const ContentRender: React.FC<{ data: any }> = ({ data }) => {
  const { markdown } = data
  if (!markdown) return null

  return (
    <Container className="mb-8">
      <article className="prose prose-lg text-foreground text-[20px] md:!text-[25px]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          skipHtml={false}
          components={{
            h3: ({ node, ...props }) => <h3 {...props} className="mb-4 text-4xl" />,
            h4: ({ node, ...props }) => <h3 {...props} className="mb-4 text-3xl" />,
            p: ({ node, ...props }) => <div {...props} className="mb-4 text-small " />,
            div: ({ node, ...props }) => <div {...props} className="mb-4 text-small" />,
            a: ({ node, ...props }) => (
              <Button as={Link} href={props.href} target="_blank" rel="noopener noreferrer" className="mt-4 text-small" color="primary">
                {props.children} →
              </Button>
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </Container>
  )
}

export default ContentRender
