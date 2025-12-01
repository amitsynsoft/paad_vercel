'use client'

import { HeroUIProvider, ToastProvider } from '@heroui/react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { useReduxDispatch } from '@/hooks'
import { setThemeSetup } from '@/redux/slices/layout.slice'

const themeMap: Record<string, string> = {
  biennial: 'biennial',
  manar: 'manar',
  'abu-dhabi': 'abu-dhabi',
}

export function ProviderHeroUI({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [baseTheme, setBaseTheme] = useState<string | null>(null)
  const { mode, setMode } = useThemeStore()
  const dispatch = useReduxDispatch()

  useEffect(() => {
    const key = Object.keys(themeMap).find((item) => pathname.startsWith(`/${item}`))
    setBaseTheme(key ? themeMap[key] : `default`)

    // TODO: remove this you have to find a better way
    if (key === 'biennial') {
      setMode('light')
    }
    // if (key === 'manar') {
    //   setMode(mode || 'dark')
    // }

    dispatch(setThemeSetup(key ? themeMap[key] : `default`))
  }, [pathname])

  if (!baseTheme) return null

  const finalTheme = `${baseTheme}-${mode}`

  return (
    <HeroUIProvider>
      <ToastProvider />
      <div data-theme={finalTheme} className={`min-h-screen ${baseTheme} ${finalTheme} ${mode}`}>
        {children}
      </div>
    </HeroUIProvider>
  )
}
