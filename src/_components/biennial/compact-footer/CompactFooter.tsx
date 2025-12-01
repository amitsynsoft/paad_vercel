// components/CompactFooter.tsx
'use client'

import { Divider } from '@heroui/react'

export default function CompactFooter({ data }: { data: any }) {
  return (
    <footer className="bg-black py-8 text-center flex flex-col items-center gap-14">
      <div className="flex justify-center items-center gap-12 mb-4 flex-wrap">
        {data.images?.map((img: any, i: number) => (
          <div key={i}>
            <img src={img.src} alt={img.alternativeText} className="h-32 object-contain" />
          </div>
        ))}
      </div>
      <Divider className="my-2 bg-white" />
      <p className="text-sm text-amber-50">{data.labels?.copyrightText}</p>
    </footer>
  )
}
