'use client'
import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { SearchField } from '@/_components/manar/_ui/form-elements/SearchField'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { useLocale, useTranslations } from 'next-intl'

export default function SearchOverlay({ inputValue, setInputValue, setSearchOpen, setVisible, visible }: SearchOverlayProps) {
  const locale = useLocale()
  const { mode } = useThemeStore()
  const t = useTranslations('Manar.search')
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (visible) {
      setInputValue('')
    }
  }, [visible])

  const close = () => {
    setVisible(false)
    setInputValue('')
    setTimeout(() => setSearchOpen(false), 300)
  }

  return (
    <>
      {/* Backdrop */}
      <div onClick={close} className="fixed inset-0 bg-transparent z-20 transition-opacity duration-300" />

      {/* Slide-down container */}
      <div
        key={mode}
        className={`fixed bg-background inset-x-0 top-0 z-[20] transition-transform duration-500 ease-in-out md:h-[300px] border-b-2 border-primary`}
        style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container h-full flex items-center justify-center px-6 md:mt-8">
          <div className="w-full max-w-[1140px]">
            <SearchField
              key={visible ? 'open' : 'closed'}
              placeholder={t('placeholderText')}
              value={inputValue}
              onChange={setInputValue}
              onSearch={(val) => {
                const v = (val ?? '').trim()
                if (String(pathname).includes('search')) {
                  window.location.href = `/manar/search?searchterm=${encodeURIComponent(v)}`
                } else if (v) {
                  router.replace(`/manar/search?searchterm=${encodeURIComponent(v)}`)
                } else router.push(`/manar/search`)
                close()
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

interface SearchOverlayProps {
  inputValue: string
  visible: boolean
  setInputValue: (value: string) => void
  setSearchOpen: (value: boolean) => void
  setVisible: (value: boolean) => void
}
