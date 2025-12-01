'use client'
import { useState } from 'react'

import HeaderMenu from './components/HeaderMenu'
import HeaderLayout from './components/HeaderLayout'
import { HeaderDTO } from '@/dto/manar'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'

export default function HeaderClient({ headerData }: { headerData: HeaderDTO }) {
  const [open, setOpen] = useState(false)
  const { mode } = useThemeStore()

  return (
    <>
      <div className="sticky top-0 z-50" key={mode}>
        <HeaderLayout setOpen={setOpen} open={open} headerData={headerData} />
        <HeaderMenu setOpen={setOpen} open={open} headerData={headerData} />
      </div>
    </>
  )
}
