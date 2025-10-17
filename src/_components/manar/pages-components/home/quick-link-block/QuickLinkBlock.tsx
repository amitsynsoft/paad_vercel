'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import Section from '../../../_ui/section/Section'

// TODO: remove any
export default function QuickLinkBlock({ data, positions }: { data: any; positions?: string[] }) {
  const { mode } = useThemeStore()
  const navItemsPosition = positions || ['plan', 'artworks', 'artists', 'about', 'programme', 'contact']

  const navItems = data?.link?.map((item: any, index: number) => ({
    href: item?.url,
    label: item?.label,
    position: navItemsPosition[index],
  }))
  return (
    <Section>
      <div className="relative w-full h-[400px] md:h-[300px] flex items-center justify-center">
        {navItems?.map((item: any, index: number) => (
          <Link
            key={index}
            href={item?.href || ''}
            className={`absolute flex flex-col text-center items-center gap-2 group hover:opacity-100 focus:opacity-100 active:opacity-100 !opacity-100
              ${item.position === 'plan' ? 'top-4 right-[18%] translate-x-[50%] md:top-0 md:right-10 md:translate-x-0' : ''}
              ${item.position === 'artists' ? 'top-[15%] left-[0%] md:top-15 md:left-[48%] md:-translate-x-1/2' : ''}
              ${item.position === 'about' ? 'top-[45%] left-[10%] md:top-45 md:left-[25%] md:translate-x-0' : ''}
              ${item.position === 'artworks' ? 'top-[30%] right-[15%] md:top-45 md:right-[35%] md:translate-x-0' : ''}
              ${item.position === 'programme' ? 'top-[80%] left-[0%] md:top-75 md:left-[10%] md:right-auto md:translate-x-0' : ''}
              ${item.position === 'contact' ? 'top-[80%] right-[25%] translate-x-[50%] md:top-75 md:bottom-auto md:left-auto md:right-[10%] md:translate-x-0' : ''}
            `}
          >
            {/* Todo:remove this hard code image */}
            <div className="transform transition-transform duration-300 group-hover:scale-130">
              <Image src={mode === 'dark' ? data?.icons[0]?.light?.src : data?.icons[0]?.dark?.src} alt={item.label} width={35} height={35} className="!opacity-100" />
            </div>
            <span className="text-base font-semibold text-foreground !opacity-100">{item.label}</span>
          </Link>
        ))}
      </div>
    </Section>
  )
}
