// biennialHome.registry.tsx
'use client'
import React, { useMemo } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw' // Import the new plugin
import { Button } from '@heroui/react'
import Link from 'next/link'

const ContentRender: React.FC<{ data: any }> = ({ data }) => {
  const { image, markdown } = data

  const contentToRender = useMemo(() => {
    if (image && typeof window !== 'undefined' && markdown) {
      try {
        const parser = new DOMParser()
        const doc = parser.parseFromString(markdown, 'text/html')

        const titleText = doc.body.textContent?.match(/# (.*)/)?.[1] || ''
        const link = doc.querySelector('a')
        const linkUrl = link?.getAttribute('href') || '#'

        const paragraphDiv = doc.querySelector('div[style*="max-width"]')
        let paragraphText = paragraphDiv?.textContent || ''
        if (link?.textContent) {
          paragraphText = paragraphText.replace(link.textContent, '').trim()
        }

        return `# ${titleText}\n\n${paragraphText}\n\n[View More](${linkUrl})`
      } catch (error) {
        console.error('Failed to parse markdown string:', error)
        return ''
      }
    }

    return markdown || ''
  }, [image, markdown])

  // Step 2: Define the universal renderer.
  // This ReactMarkdown component can now handle both pure Markdown and raw HTML.
  const MarkdownRenderer = (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]} // Use the rehype-raw plugin here
      components={{
        h1: ({ node, ...props }) => <h1 className="text-4xl md:text-5xl font-semibold mb-6" {...props} />,
        p: ({ node, ...props }) => <p className="text-base md:text-sm leading-relaxed max-w-6xl mx-auto" {...props} />,
        a: ({ node, ...props }) => (
          <Button as={Link} href={props.href} target="_blank" rel="noopener noreferrer" className="mt-4">
            {props.children} →
          </Button>
        ),
      }}
    >
      {contentToRender}
    </ReactMarkdown>
  )

  // conditional layout to wrap the universal renderer.
  return image ? (
    // Layout for "About the Biennial"
    <div className="relative">
      <div className="w-full h-[600px]">
        <Image src={image.src} className="object-cover" alt={image.alternativeText || 'Background'} fill priority />
      </div>
      <div className="absolute top-1/2 left-1/2 z-10 w-[90%] max-w-6xl -translate-x-1/2 -translate-y-1/2 text-center">{MarkdownRenderer}</div>
    </div>
  ) : (
    // Layout for "Opening Times"
    <div className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">{MarkdownRenderer}</div>
    </div>
  )
}

export default ContentRender
