'use client'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useLocale } from 'next-intl'

import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { HeaderDTO } from '@/dto/manar'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'

export default function HeaderMenu({ setOpen, open, headerData }: { setOpen: (open: boolean) => void; open: boolean; headerData: HeaderDTO }) {
  const { mode } = useThemeStore()
  const locale = useLocale()
  const menuRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* Menu */}
      {/* Overlay */}
      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-transparent z-30 transition-opacity duration-300" />}

      {/* Menu Container */}
      <div
        ref={menuRef}
        className={clsx('fixed bg-background inset-x-0 top-0 z-40 transition-transform duration-500 ease-in-out h-full md:h-min  border-b-2 border-primary overflow-y-auto', open ? 'translate-y-0' : '-translate-y-full')}
      >
        <div className={`container h-[calc(100vh-50px)] md:h-auto py-10 mt-12 ${locale === 'ar' ? 'px-8 xl:px-16 2xl:pr-32' : 'px-8 xl:px-16 2xl:pl-32'}`}>
          {/* Menu Links */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end h-full">
            <div className="flex flex-col gap-0 sm:gap-0 xl:gap-1">
              {headerData?.menuItems?.slice(0, 8)?.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  onClick={() => setOpen(false)}
                  className="text-[30px] md:text-[32px] 2xl:text-[40px] sentence-case font-semibold text-foreground hover:underline transition-all scroll-smooth"
                  prefetch={true}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Header Logo */}
            <div className="md:w-[320px] md:h-[320px] relative md:block hidden">
              {/* Desktop / Tablet logo */}
              <ImageGuard src={mode === 'dark' ? (headerData?.headerLogo?.[0]?.dark?.src ?? '') : (headerData?.headerLogo?.[0]?.light?.src ?? '')} alt="Menu Logo" fill className="object-contain" loading="lazy" />
            </div>

            {/* Mobile logo */}
            <div className="relative md:hidden">
              <ImageGuard
                src={mode === 'dark' ? (headerData?.mobileLogo?.[0]?.dark?.src ?? '') : (headerData?.mobileLogo?.[0]?.light?.src ?? '')}
                alt="Menu Logo Mobile"
                width={350}
                height={110}
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => {
            setTimeout(() => setOpen(false), 100)
          }}
          className="fixed inset-0 bg-transparent z-30 transition-opacity duration-300"
        />
      )}
    </>
  )
}
