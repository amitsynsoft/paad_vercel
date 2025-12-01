'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@heroui/react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'

import HeaderMenu from './HeaderMenu'
import ThemeSwitcher from '@/_components/_globalUI/theme-switcher/ThemeSwitcher'
import LanguageSwitch from '@/_components/_globalUI/language-switch/LanguageSwitch'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { useLocale, useTranslations } from 'next-intl'
import { HeaderDTO } from '@/dto/manar'
import { placeholderImage } from '@/utils'
import SearchOverlay from './SearchOverlay'
import { usePathname } from 'next/navigation'

export default function HeaderLayout({ setOpen, open, headerData }: { setOpen: (open: boolean) => void; open: boolean; headerData: HeaderDTO }) {
  const { mode } = useThemeStore()
  const locale = useLocale()
  const t = useTranslations('Manar.Header')

  const [searchOpen, setSearchOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [visible, setVisible] = useState(false)
  const isSearchPage = Boolean(usePathname()?.toString()?.includes('search')) ?? false

  const normalSrc = mode === 'dark' ? (headerData?.headerIcon?.[0]?.dark?.src ?? '') : (headerData?.headerIcon?.[0]?.light?.src ?? '')
  const hoverSrc = mode === 'dark' ? (headerData?.headerIconShrink?.[0]?.dark?.src ?? '') : (headerData?.headerIconShrink?.[0]?.light?.src ?? '')

  return (
    <>
      {/* Navbar */}
      <Navbar className={`bg-background sticky top-0 z-50 border-b-2 border-primary dark:border-primary`} maxWidth="2xl" isBordered>
        {/* Left Section: Custom Logo Toggle */}
        <NavbarContent justify="start" className="gap-1">
          {/* Icon Toggle */}
          <Button
            isIconOnly
            disableAnimation
            onPress={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative group !bg-transparent !shadow-none !ring-0 !outline-none !border-0
    hover:!bg-transparent active:!bg-transparent
    focus-visible:!outline-none focus-visible:!ring-0
    w-[40px] h-[40px] flex items-center justify-center p-0"
          >
            {/* Normal icon */}
            <ImageGuard src={normalSrc || placeholderImage} alt="Logo" width={30} height={30} className="absolute inset-0 m-auto transition-opacity duration-200 opacity-100 group-hover:opacity-0" />

            {/* Hover icon */}
            <ImageGuard src={hoverSrc || placeholderImage} alt="Logo Hover" width={30} height={30} className="absolute inset-0 m-auto transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
          </Button>

          {/* Menu Label */}
          <NavbarBrand className="cursor-pointer max-w-fit hover:opacity-80 transition-opacity select-none" onClick={() => setOpen(!open)}>
            {/* TODO: hardcoded */}
            <span className="text-base relative font-semibold text-foreground dark:text-white">{t('Menu')}</span>
          </NavbarBrand>
        </NavbarContent>

        {/* Middle Section: Swiper Slider */}
        <NavbarContent justify="center" className={`hidden md:flex ${locale === 'ar' ? 'translate-x-[50%]' : '-translate-x-[50%]'}`}>
          <div className="overflow-hidden w-[250px] md:w-[350px]">
            {/* TODO : need to feed data for slides in ARABIC */}
            <Swiper
              direction="vertical"
              slidesPerView={1}
              loop
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="h-[50px]"
            >
              {headerData?.slides?.map((item, index: number) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-[50px] text-base font-semibold text-foreground dark:text-white">{item}</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </NavbarContent>

        {/* Right Section */}
        <NavbarContent justify="end" className="gap-1">
          {headerData?.headerLinks?.url && headerData?.headerLinks?.label && (
            <NavbarItem className="hidden sm:block">
              <Link href={headerData?.headerLinks?.url || '#'} className="font-semibold text-base text-foreground dark:text-white hover:opacity-80 transition-opacity">
                {headerData?.headerLinks?.label}
              </Link>
            </NavbarItem>
          )}

          <NavbarItem>
            <ThemeSwitcher darkIconUrl={headerData?.themeMode?.[0]?.dark?.src} lightIconUrl={headerData?.themeMode?.[0]?.light?.src} />
          </NavbarItem>

          <NavbarItem>
            <LanguageSwitch />
          </NavbarItem>

          <NavbarItem>
            <Button
              variant="light"
              isIconOnly
              className="hover:opacity-80 transition-opacity text-foreground dark:text-white"
              onPress={() => {
                if (isSearchPage) {
                  return
                }
                setVisible(false)
                setTimeout(() => setSearchOpen(!searchOpen), 300)
              }}
            >
              <ImageGuard src={headerData?.searchLogo?.[0]?.images?.[mode === 'dark' ? 'dark' : 'light']?.src ?? '/placeholder.png'} alt="search" width={18} height={18} loading="lazy" />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Overlay Menu */}
      <HeaderMenu setOpen={setOpen} open={open} headerData={headerData} />

      {searchOpen && <SearchOverlay inputValue={inputValue} setInputValue={setInputValue} setSearchOpen={setSearchOpen} setVisible={setVisible} visible={visible} />}
    </>
  )
}
