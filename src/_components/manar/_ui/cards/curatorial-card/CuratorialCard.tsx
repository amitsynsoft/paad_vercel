import React from 'react'
import ImageGuard from '@/_components/manar/_ui/image-guard/ImageGuard.component'

interface curatorialData {
  name: string
  role: string
  image: {
    url: string
  }
}

export default function CuratorialCard({ curatorialData }: { curatorialData: curatorialData }) {
  return (
    <div className="flex flex-col items-start bg-transparent hover:bg-danger transition-all cursor-pointer text-foreground hover:text-hovertext">
      {/* Image */}
      <div className="p-4 relative w-full h-100">
        <ImageGuard src={curatorialData?.image?.url} alt={curatorialData?.name} fill className="object-cover" />
      </div>

      {/* Title */}
      <div className="px-2 py-2">
        <h4 className="text-base font-semibold ">{curatorialData?.name}</h4>
        <p className="text-sm font-semibold">{curatorialData?.role}</p>
      </div>
    </div>
  )
}
