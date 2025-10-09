'use client'

import { createContext, ReactNode } from 'react'
import * as React from 'react'
import * as RadixDirection from '@radix-ui/react-direction'
import { useLocale } from 'next-intl'

type Direction = 'ltr' | 'rtl'

interface DirectionContextProps {
  direction: Direction
}

const DirectionContext = createContext<DirectionContextProps | undefined>(undefined)

export const DirectionProvider = ({ children }: { children: ReactNode }) => {
  const locale = useLocale()

  return (
    <DirectionContext.Provider value={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <RadixDirection.Provider dir={locale === 'ar' ? 'rtl' : 'ltr'}>{children}</RadixDirection.Provider>
    </DirectionContext.Provider>
  )
}
