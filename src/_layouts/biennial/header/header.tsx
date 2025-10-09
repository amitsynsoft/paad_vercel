'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@heroui/react'
import { Search } from 'lucide-react'
import LanguageSwitch from '@/_components/_globalUI/LanguageSwitch'
import ThemeSwitcher from '@/_components/_globalUI/ThemeSwitcher'

export default function Header({ data }: { data: any }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`transition-all ${scrolled ? 'bg-background shadow-md fixed top-0 left-0 w-full z-50' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <Link href="/" className="text-lg font-bold">
          {data?.title || 'Public Art Abu Dhabi Biennial'}
        </Link>

        {/* Center: Menu Items */}
        <nav className="hidden md:flex gap-6">
          {data?.menuItems?.map((item: any) => (
            <Link key={item.url} href={item.url} className="text-sm font-medium hover:text-foreground">
              {item.label}
            </Link>
          ))}

          <Link href="/manar" className="text-sm font-medium hover:text-foreground">
            Manar
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button aria-label="Search">
            <Search size={18} />
          </button>

          {/* Login Button */}
          <Button variant="bordered" color="primary" radius="sm" className="px-4 py-1">
            {data?.labels?.login || 'Login'}
          </Button>

          {/* Language Switch */}
          <LanguageSwitch />

          {/* Theme Switcher (optional) */}
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
