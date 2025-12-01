import { Skeleton } from '@heroui/react'

export const SearchSkeleton = () => {
  return (
    <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-[400px] bg-gray-300/40 " />
      ))}
    </div>
  )
}
