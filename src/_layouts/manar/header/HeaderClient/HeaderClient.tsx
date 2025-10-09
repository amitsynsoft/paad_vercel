'use client'
import { useState } from 'react'
import HeaderMenu from './components/HeaderMenu'
import HeaderLayout from './components/HeaderLayout'
import { HeaderDTO } from '@/dto/manar'

export default function HeaderClient({ headerData }: { headerData: HeaderDTO }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="sticky top-0 z-50">
        <HeaderLayout setOpen={setOpen} open={open} headerData={headerData} />
        <HeaderMenu setOpen={setOpen} open={open} headerData={headerData} />
      </div>
    </>
  )
}
