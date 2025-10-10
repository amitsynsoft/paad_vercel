'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import Section from '../../../_ui/section/Section'
import { createImageFullUrl } from '@/utils'

// TODO: remove any
export default function QuickLinkBlock({ data, positions }: { data: any; positions?: string[] }) {
  const { mode } = useThemeStore()
  const navItemsPosition = positions || ['plan', 'artworks', 'artists', 'about', 'programme', 'contact']

  const navItems = data?.link?.map((item: any, index: number) => ({
    href: item?.url,
    label: item?.label,
    position: navItemsPosition[index],
  }))
  console.log('quickliks', data)
  return (
    <Section>
      <div className="relative w-full h-[300px] flex items-center justify-center">
        {navItems?.map((item: any, index: number) => (
          <Link
            key={index}
            // Todo: remove this hard code url
            // href={item?.href || ''}
            href={'#'}
            className={`absolute flex flex-col items-center gap-2 group hover:opacity-100 focus:opacity-100 active:opacity-100 !opacity-100
                      ${item.position === 'plan' ? 'top-0 right-30' : ''}
                      ${item.position === 'artworks' ? 'top-15 left-1/2 -translate-x-1/1' : ''}
                      ${item.position === 'artists' ? 'top-45 left-1/4 -translate-x-1/1' : ''}
                      ${item.position === 'about' ? 'top-45 right-1/4 -translate-x-1/1' : ''}
                      ${item.position === 'programme' ? 'top-75 left-0 translate-x-1/1' : ''}
                      ${item.position === 'contact' ? 'top-75 right-0 -translate-x-1/2' : ''}
                      `}
          >
            {/* Todo:remove this hard code image */}
            <div className="transform transition-transform duration-300 group-hover:scale-130">
              <Image src={mode === 'dark' ? createImageFullUrl(data?.icons[0]?.light?.src) : createImageFullUrl(data?.icons[0]?.dark?.src)} alt={item.label} width={24} height={24} className="!opacity-100" />
            </div>
            <span className="text-base font-semibold text-foreground !opacity-100">{item.label}</span>
          </Link>
        ))}
      </div>
    </Section>
  )
}
