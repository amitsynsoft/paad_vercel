'use client'
// components/registry.ts
import React from 'react'
import ContentRender from '@/_components/biennial/pages-components/about-page/ContentRender'

export const AboutPageRegistry: Record<string, React.FC<{ data: any }>> = {
  'content-render': ContentRender,
}
