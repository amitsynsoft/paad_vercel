'use client'

import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { Button } from '@heroui/react'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'

interface ThemeSwitcherProps {
  lightIconUrl?: string
  darkIconUrl?: string
}

export default function ThemeSwitcher({ lightIconUrl, darkIconUrl }: ThemeSwitcherProps) {
  const { mode, toggleMode } = useThemeStore()

  const icon = () => {
    if (mode === 'light') {
      return lightIconUrl ? <Image src={lightIconUrl} alt="Dark Mode" width={18} height={18} className="object-contain" /> : <Moon className="h-5 w-5 text-foreground" />
    } else {
      return darkIconUrl ? <Image src={darkIconUrl} alt="Light Mode" width={20} height={20} className="object-contain" /> : <Sun className="h-5 w-5 text-foreground" />
    }
  }

  return (
    <div>
      <Button className="rounded-full" size="md" onPress={toggleMode} isIconOnly variant="light">
        {icon()}
      </Button>
    </div>
  )
}
