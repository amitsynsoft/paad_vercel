'use client'

import React, { KeyboardEvent, useEffect, useState } from 'react'
import { Input } from '@heroui/react'
import { useLocale } from 'next-intl'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { getDirectionClass } from '@/utils'

interface SearchFieldProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  className?: string
}

export const SearchField: React.FC<SearchFieldProps> = ({ placeholder = 'Search...', value = '', onChange, onSearch, className = '' }) => {
  const locale = useLocale()
  const { mode } = useThemeStore()

  const iconSrc = mode === 'light' ? '/images/manar/ic_primary-next.svg' : '/images/manar/ic_white-right.svg'

  const [inputValue, setInputValue] = useState<string>(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const submit = async () => {
    onSearch?.(inputValue)
    onChange?.(inputValue)
  }

  const onKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') await submit()
  }

  return (
    <Input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      variant="bordered"
      radius="full"
      className={className}
      classNames={{
        inputWrapper: `
          border-primary h-12 
          ${locale === 'en' ? 'pl-4 pr-1.5' : 'pl-1.5 pr-4'} 
          hover:border-primary 
          focus:border-primary 
          focus-within:border-primary 
          active:border-primary

          data-[hover=true]:border-primary
          data-[focus=true]:border-primary
          data-[filled=true]:border-primary
        `,
        input: `
        text-base
          text-primary placeholder:text-primary 
          placeholder:!font-bold !font-bold
      
          py-1
        `,
      }}
      endContent={
        <button
          type="button"
          onClick={submit}
          aria-label="Search"
          className="
    flex items-center justify-center
    w-10 h-10 rounded-full
    transition-all duration-200
    hover:scale-105 hover:bg-primary/10
    active:scale-95
  "
        >
          <ImageGuard src={iconSrc} key={locale + mode} alt="Next" width={20} height={20} className={`${getDirectionClass(locale)}`} />
        </button>
      }
    />
  )
}
