'use client'
import React from 'react'

export default function PageRender({ data, registry }: { data: any; registry: Record<string, React.ComponentType<any>> }) {
  console.log(data)
  return (
    <div className="w-full">
      {data?.components?.map((block: any, i: number) => {
        const Component = registry[block.component]
        if (!Component) return null
        return <Component key={i} data={block} />
      })}
    </div>
  )
}
