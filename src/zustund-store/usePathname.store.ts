import { create } from 'zustand'

type PathnameState = {
  currentRoot: string | null
  fullPath: string
  setFromPathname: (path: string | null) => void
}

export const usePathnameStore = create<PathnameState>((set) => ({
  currentRoot: null,
  fullPath: '',
  setFromPathname: (path) => {
    if (!path) return set(() => ({ currentRoot: null, fullPath: '' }))
    const parts = path.split('/')
    const root = parts[1] || null
    return set(() => ({ currentRoot: root, fullPath: path }))
  },
}))
