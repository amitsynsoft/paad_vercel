'use client'

import Image, { ImageProps } from 'next/image'
import React, { useEffect, useState } from 'react'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'
import { placeholderImage, placeholderImageBiennial } from '@/utils'
import { useRootSegment } from '@/hooks/useRootSegment.hook'

const ImageGuard: React.FC<ImageGuardProps & ImageProps> = ({ src, placeholderSrc = placeholderImage, ...props }) => {
  const { isBiennial } = useRootSegment()

  const [imgSrc, setImgSrc] = useState(src || (isBiennial ? placeholderImageBiennial : placeholderImage))
  const { mode } = useThemeStore()

  const handleImageError = () => {
    if (isBiennial) setImgSrc(placeholderImageBiennial)
    else setImgSrc(placeholderImage)
  }

  return <Image key={mode} src={imgSrc} onError={handleImageError} {...props} />
}

export default ImageGuard

type ImageGuardProps = {
  src: string
  placeholderSrc?: string
}
