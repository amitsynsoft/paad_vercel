'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search } from 'lucide-react'

import Logo from './Logo.component'
import useDevice from '@/hooks/detect-device.hook'
import LanguageSwitch from '@/_components/_globalUI/language-switch/LanguageSwitch'
import BiennialGlobalSearch from '../BiennialGlobalSearch/BiennialGlobalSearch.component'
import { paths } from '@/navigate/paths'
import { Button } from '@heroui/react'

export default function HeaderClient({ data }: { data: any }) {
  const { isMobile, isTablet, isDesktop } = useDevice()
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <header className={`absolute top-0 left-0 right-0 z-10 bg-transparent backdrop-saturate-150 backdrop-blur-none hover:bg-white transition-colors duration-300 ease-in-out`}>
        <div className="container mx-auto flex items-center justify-between py-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-4 h-14 md:w-64">
            <Link href={paths.biennialHome()} className="text-lg font-bold">
              {isMobile ? Logo['small'] : Logo['large']}
            </Link>
          </div>

          {/* Center: Menu Items */}
          <nav className="hidden md:flex gap-6">
            {data?.menuItems?.map((item: any) => (
              <Link key={item.url} href={item.url}>
                <span className="text-small hover:[text-shadow:0_0_0.8px_black]">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <Button isIconOnly className="bg-transparent rounded-full" aria-label="Search" onPress={() => setSearchOpen(!searchOpen)}>
              <Search size={18} />
            </Button>

            {/* Language Switch */}
            <LanguageSwitch />
          </div>
        </div>
      </header>

      <BiennialGlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
