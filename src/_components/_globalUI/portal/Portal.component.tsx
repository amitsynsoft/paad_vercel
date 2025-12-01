import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    setIsMount(true)
    return () => setIsMount(false)
  }, [])

  if (!isMount) return null

  return createPortal(children, document.body)
}

export default Portal
