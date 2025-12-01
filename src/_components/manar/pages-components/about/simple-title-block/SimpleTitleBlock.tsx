'use client'
import React from 'react'
import Section from '@/_components/manar/_ui/section/Section'

interface SimpleTitleBlockProps {
  data: {
    title?: string
    link?: {
      label: string
      url: string
    }
  }
}

const SimpleTitleBlock: React.FC<SimpleTitleBlockProps> = ({ data }) => {
  const { title } = data
  if (!title) return null

  return (
    <Section className="max-w-[900px] !py-0 ">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
    </Section>
  )
}

export default SimpleTitleBlock
