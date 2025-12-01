// biennialHome.registry.tsx
'use client'
import Link from 'next/link'
import rehypeRaw from 'rehype-raw'
import { Button } from '@heroui/react'
import React, { useMemo } from 'react'
import { MoveRight } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

import { placeholderImageLoading } from '@/utils'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'

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

  // conditional layout to wrap the universal renderer.
  return image ? (
    // Layout for "About the Biennial"
    <div className="relative">
      <div className="w-full h-[600px]">
        <ImageGuard src={image.src} className="object-cover" alt={image.alternativeText || 'Background'} fill priority placeholder="blur" blurDataURL={placeholderImageLoading} />
      </div>
      <div className="absolute top-1/2 left-1/2 z-10 w-[90%] max-w-6xl -translate-x-1/2 -translate-y-1/2 text-center">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]} // Use the rehype-raw plugin here
          components={{
            h1: ({ node, ...props }) => <h1 className="text-large mb-6" {...props} />,
            p: ({ node, ...props }) => <div className="text-small leading-relaxed max-w-6xl mx-auto" {...props} />,
            a: ({ node, ...props }) => (
              <div className="flex items-center justify-center w-full ">
                <Link href={props.href || '#'} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center mt-4 text-xl">
                  {/* single wrapper that contains both text and arrow */}
                  <span
                    className={`
                      inline-flex items-center gap-2 relative
                      after:content-[''] after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:w-full after:bg-black
                      after:origin-left after:scale-x-0
                      after:transition-transform after:duration-300
                      group-hover:after:scale-x-100
                    `}
                  >
                    <span>{props.children}</span>
                    {/* keep the arrow as-is (SVG), no pseudo needed on it */}
                    <MoveRight className="translate-y-[1px]" />
                  </span>
                </Link>
              </div>
            ),
          }}
        >
          {contentToRender}
        </ReactMarkdown>
      </div>
    </div>
  ) : (
    // Layout for "Opening Times"
    <div className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]} // Use the rehype-raw plugin here
          components={{
            h3: ({ node, ...props }) => <h3 className="text-large mb-6" {...props} />,
            p: ({ node, ...props }) => <p className="text-small mb-4" {...props} />,
            a: ({ node, ...props }) => (
              <Button className="mt-4 bg-transparent text-primary text-small hover:underline" as={Link} href={props.href} target="_blank" rel="noopener noreferrer">
                {props.children}
              </Button>
            ),
          }}
        >
          {contentToRender}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default ContentRender
