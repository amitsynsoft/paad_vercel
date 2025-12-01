'use client'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import Section from '@/_components/manar/_ui/section/Section'
import Link from 'next/link'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function PlanYourVisitHeader({ data }: { data: any }) {
  return (
    <Section className="py-8 md:pt-20  pb-12 max-w-[906px] mx-auto">
      {data?.title && <h2 className="text-lg text-foreground font-semibold mb-8 md:mb-12">{data?.title}</h2>}

      {data?.description && (
        <div className="prose prose-lg max-w-none text-foreground text-base md:!text-[25px] leading-relaxed">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{ p: ({ node, ...props }) => <p {...props} className="mb-4" />, h3: ({ node, ...props }) => <h2 {...props} className="text-lg text-foreground font-semibold mb-12" /> }}
          >
            {data?.description}
          </ReactMarkdown>
        </div>
      )}

      {data?.link?.url?.length > 0 && (
        <Section className="!px-0 md:pt-19 md:!pb-0 flex justify-start">
          <ManarButton as={Link} href={data?.link?.url} color="primaryOutlineHover">
            {data?.link?.label}
          </ManarButton>
        </Section>
      )}

      {data?.notes && (
        <div className="prose prose-lg max-w-none text-foreground text-base md:!text-[25px] md:pt-19 leading-relaxed">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              p: ({ node, ...props }) => <p {...props} className="mb-4" />,
              h3: ({ node, ...props }) => <h2 {...props} className="text-lg text-foreground font-semibold mb-12" />,
              a: ({ node, ...props }) => <a {...props} className="text-base md:!text-[25px] underline inline font-semibold line-clamp-1 !leading-[30px]"></a>,
            }}
          >
            {data?.notes}
          </ReactMarkdown>
        </div>
      )}
    </Section>
  )
}
