'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { usePathnameStore } from '@/zustund-store/usePathname.store'

export default function PathnameListener() {
  const pathname = usePathname()
  const setFromPathname = usePathnameStore((s) => s.setFromPathname)

  useEffect(() => {
    setFromPathname(pathname ?? null)
  }, [pathname, setFromPathname])

  return null
}
