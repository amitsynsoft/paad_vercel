import { useCallback } from 'react'
import { usePathnameStore } from '@/zustund-store/usePathname.store'

export const useRootSegment = () => {
  const currentRoot = usePathnameStore((s) => s.currentRoot)
  const fullPath = usePathnameStore((s) => s.fullPath)

  const isSection = useCallback((name: string) => currentRoot === name, [currentRoot])

  return {
    currentRoot,
    fullPath,
    isSection,
    // convenience booleans for common sections
    isManar: currentRoot === 'manar',
    isBiennial: currentRoot === 'biennial',
  }
}
