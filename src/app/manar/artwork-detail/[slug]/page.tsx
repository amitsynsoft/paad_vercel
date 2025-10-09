'use client'

import React from 'react'
import { getLocale } from 'next-intl/server'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const locale = await getLocale()

  const slug = decodeURIComponent((await params).slug)
  console.log(locale, slug)

  return <div className="container mb-12">Working mode {slug}</div>
}
