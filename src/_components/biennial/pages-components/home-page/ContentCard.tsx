// components/ContentCard.tsx
'use client'
import { Button, Card, CardBody } from '@heroui/react'
import Link from 'next/link'

export default function ContentCard({ data }: { data: any }) {
  return (
    <div className="max-w-5xl mx-auto my-16 flex flex-col md:flex-row items-center gap-8 p-6">
      <div className="flex-1">
        <h2 className="text-3xl font-semibold mb-4">{data.title}</h2>
        <div className="prose mb-4" dangerouslySetInnerHTML={{ __html: data.markdown }} />
        {data.button && (
          <Button as={Link} href={data.button.url} className="bg-black text-white">
            {data.button.label}
          </Button>
        )}
      </div>

      {data.image && <img src={data.image.src} alt={data.image.alternativeText} className="w-full max-w-md rounded-lg object-cover" />}
    </div>
  )
}
