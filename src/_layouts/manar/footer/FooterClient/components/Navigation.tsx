import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { createImageFullUrl } from '@/utils'
import { FooterDTO } from '@/dto/manar'

interface NavigationProps extends Pick<FooterDTO, 'menuItems' | 'partners'> {}

export default function Navigation({ menuItems, partners }: NavigationProps) {
  const { mode } = useThemeStore()

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-1.5 text-base text-foreground font-semibold">
        {menuItems &&
          menuItems?.slice(0, 6).map((item, index: number) => (
            <Link
              key={index}
              // Todo: remove this hard code url
              // href={item?.url ?? '#'}
              href="#"
            >
              {item?.label}
            </Link>
          ))}
      </div>

      {/* partners */}
      <div className="flex flex-row items-end space-x-12">
        {partners?.map((partner, index: number) => (
          <Image
            key={index}
            src={mode === 'dark' ? createImageFullUrl(partner?.dark?.src ?? '') : createImageFullUrl(partner?.light?.src ?? '')}
            alt={partner.alt || `Partner ${index + 1}`}
            width={80}
            height={80}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  )
}
