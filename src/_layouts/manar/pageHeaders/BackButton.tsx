import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BackButton({ label, link, imageURL = '/images/ic_prev.svg' }: { label: string; link: string; imageURL?: string }) {
  return (
    <Button as={Link} variant="bordered" size="md" color="primary" href={link || '/'} className="rounded-full font-semibold">
      <Image src={imageURL} alt="Sample Slide" width={20} height={20} />
      {label}
    </Button>
  )
}
