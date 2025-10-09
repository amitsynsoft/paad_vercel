'use client'

import { HeroUIProvider } from '@heroui/react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'

const themeMap: Record<string, string> = {
  biennial: 'biennial',
  manar: 'manar',
  'abu-dhabi': 'abu-dhabi',
}

export function ProviderHeroUI({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [baseTheme, setBaseTheme] = useState<string | null>(null)
  const { mode } = useThemeStore()

  useEffect(() => {
    const key = Object.keys(themeMap).find((k) => pathname.startsWith(`/${k}`))
    setBaseTheme(key ? themeMap[key] : `default`)
  }, [pathname])

  if (!baseTheme) return null

  const finalTheme = `${baseTheme}-${mode}`

  return (
    <HeroUIProvider>
      <div data-theme={finalTheme} className={`min-h-screen ${finalTheme}`}>
        {children}
      </div>
    </HeroUIProvider>
  )
}
