'use client'
import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import Section from '@/_components/manar/_ui/section/Section'
import { useLocale } from 'next-intl'
import { createImageFullUrl } from '@/utils'
import { HeaderDTO } from '@/dto/manar'

export default function HeaderMenu({ setOpen, open, headerData }: { setOpen: (open: boolean) => void; open: boolean; headerData: HeaderDTO }) {
  const { mode } = useThemeStore()
  const locale = useLocale()

  return (
    <div className={clsx('fixed bg-background inset-0 z-40 transition-transform duration-500 ease-in-out h-min border-b-2 border-primary overflow-y-auto', open ? 'translate-y-0' : '-translate-y-full')} about="bhaiii">
      <div className={`container py-10 mt-12 ${locale === 'ar' ? 'px-8 xl:px-16 2xl:pr-32' : 'px-8 xl:px-16 2xl:pl-32'}`}>
        {/* Menu Links */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-10">
          <div className="flex flex-col gap-2 md:gap-1">
            {headerData?.menuItems?.map((item, index: number) => (
              <Link
                key={index}
                // Todo: remove this hard code url
                // href={item.url}
                href="#"
                className="text-[16px] md:text-[28px] sentence-case font-semibold text-foreground hover:underline transition-all"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Footer Logo */}
          <div className="w-[200px] h-[200px] md:w-[320px] md:h-[320px] ml-auto relative">
            <Image
              src={mode === 'dark' ? createImageFullUrl(headerData?.headerLogo?.[0]?.dark?.src ?? '') : createImageFullUrl(headerData?.headerLogo?.[0]?.light?.src ?? '')}
              alt="Menu Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
