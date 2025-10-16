'use client'
import React from 'react'
import Image from 'next/image'
import type { InfoContentListComponent } from '@/dto/manar'

const InfoContentList: React.FC<{ data: InfoContentListComponent }> = ({ data: { content } }) => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4 space-y-16">
      {content.map((item, index: number) => (
        <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${item?.align === 'end' ? 'md:flex-row-reverse' : ''}`}>
          <div className="w-full md:w-1/2">
            <Image src={item?.images?.portrait?.url || ''} alt={item?.title} width={600} height={600} className="rounded-2xl object-cover w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-lg font-semibold">{item?.title}</h3>
            <div className="prose text-foreground text-base" dangerouslySetInnerHTML={{ __html: item?.markdown }} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default InfoContentList
