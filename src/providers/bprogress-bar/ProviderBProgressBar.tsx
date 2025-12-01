'use client'

import { ProgressProvider } from '@bprogress/next/app'
import { useEffect, useState } from 'react'
import { useReduxSelector } from '@/hooks'
import { themeBProgressBarMap } from '@/utils/constant.utils'

const ProviderBProgressBar = ({ children }: { children: React.ReactNode }) => {
  const { themeSetup } = useReduxSelector((state) => state.layout)
  const [color, setColor] = useState(themeBProgressBarMap[themeSetup as keyof typeof themeBProgressBarMap])

  useEffect(() => {
    setColor(themeBProgressBarMap[themeSetup as keyof typeof themeBProgressBarMap])
  }, [themeSetup])

  return (
    <ProgressProvider height="4px" color={color} options={{ showSpinner: false }} shallowRouting>
      {children}
    </ProgressProvider>
  )
}

export default ProviderBProgressBar
