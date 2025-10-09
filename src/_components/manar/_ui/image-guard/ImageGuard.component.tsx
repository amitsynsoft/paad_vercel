'use client'

import { createImageFullUrl } from '@/utils'
import Image from 'next/image'
import React, { useState } from 'react'

const ImageGuard: React.FC<ImageGuardProps> = ({ src, alt, className, fill, width, height, placeholderSrc = '/images/placeholder.svg' }) => {
  const [imgSrc, setImgSrc] = useState(createImageFullUrl(src || ''))

  return <Image src={imgSrc || placeholderSrc} alt={alt} fill={fill} width={fill ? undefined : width} height={fill ? undefined : height} className={className} onError={() => setImgSrc(placeholderSrc)} />
}

export default ImageGuard

type ImageGuardProps = {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  placeholderSrc?: string
}
