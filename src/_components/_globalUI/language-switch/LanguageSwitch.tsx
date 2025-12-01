'use client'

import React, { useState, useTransition } from 'react'
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react'
import { Globe } from 'lucide-react'
import { setUserLocale } from '@/i18n/locale'
import { Locale } from '@/i18n/config'
import { useLocale } from 'next-intl'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
]

export default function LanguageSwitch() {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const locale = useLocale()
  const [currentLang, setCurrentLang] = useState<Locale>(locale as Locale)

  function onChange(value: Locale) {
    setCurrentLang(value)
    startTransition(() => {
      setUserLocale(value)
    })
  }
  return (
    <Dropdown isOpen={open} onOpenChange={setOpen} className="bg-background">
      <DropdownTrigger>
        <Button size="md" variant="light" className="!px-0 rounded-full !min-w-10 text-foreground font-semibold text-base">
          {currentLang?.toUpperCase()}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Select Language" onAction={(key) => onChange(key as Locale)} selectedKeys={[currentLang]} selectionMode="single">
        {languages.map((l) => (
          <DropdownItem key={l.code}>{l.label.toUpperCase()}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
