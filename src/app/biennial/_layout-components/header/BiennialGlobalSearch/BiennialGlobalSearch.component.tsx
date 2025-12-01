import { Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import Portal from '@/_components/_globalUI/portal/Portal.component'
import { Input } from '@heroui/react'
import { useLockBodyScroll } from '@/hooks/lock-body-scroll.hook'
import { useState } from 'react'
import { useDebounce } from '@/hooks/debouce'
import { useBiennialGlobalSearchQuery } from '@/redux/services/biennial/global-search.api'
import { skip } from 'node:test'
import { hasAnyData } from '@/utils'
import Link from 'next/link'
import { paths } from '@/navigate/paths'
import SkeletonLoader from '@/_components/biennial/_ui/cards/skeleton-loader/SkeletonLoader'

export default function BiennialGlobalSearch({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useLockBodyScroll(isOpen)

  const [searchQuery, setSearchQuery] = useState('')

  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  const { data, isFetching, isSuccess } = useBiennialGlobalSearchQuery({
    organizationName: 'biennial',
    locale: 'en',
    searchTerm: debouncedSearchQuery,
  })

  function getFinalUrl(key: string, slug: string) {
    // last part of slug (after category)
    const cleanSlug = slug.split('/').filter(Boolean).pop()

    const map = {
      artist: paths.biennialArtistDetail(cleanSlug as string),
      artwork: paths.biennialArtworkDetail(cleanSlug as string),
      programs: paths.biennialProgramsDetail(cleanSlug as string),
    }

    return map[key as keyof typeof map] || ''
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <Portal>
          <motion.section
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.15 } }}
            transition={{
              duration: 0.2,
            }}
            className={`fixed top-0 left-0 w-screen h-screen pb-0 z-[100] biennial-light`}
          >
            <div className={`relative ${hasAnyData(data) ? 'h-full' : 'h-64'} bg-primary-100/95`} onClick={(e) => e.stopPropagation()}>
              <div className="text-end p-4">
                <button title="close" className="cursor-pointer text-large pr-6" type="submit" onClick={onClose}>
                  <X size={40} />
                </button>
              </div>

              <motion.div initial={{ opacity: 0.5, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0.5, y: 20 }} transition={{ duration: 0.3, delay: 0.2 }} className="max-w-[750px] pt-2 p-10 mx-auto overflow-hidden">
                <form action="">
                  <Input
                    placeholder="Search"
                    radius="none"
                    variant="bordered"
                    className="w-full max-w-4xl bg-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    classNames={{
                      inputWrapper: 'border-2 border-primary h-12 data-[hover=true]:border-primary group-data-[focus=true]:border-primary',
                      input: 'text-black',
                      innerWrapper: 'pr-2 text-primary',
                    }}
                    endContent={<Search />}
                  />
                </form>

                {isSuccess && (
                  <div className="max-h-[calc(100vh-150px)] overflow-y-auto pr-2">
                    {hasAnyData(data) &&
                      Object.entries(data).map(([key, items]) =>
                        Array.isArray(items) && items.length > 0 ? (
                          <div key={key} className="mb-2" onClick={onClose}>
                            <div className="flex flex-col gap-2">
                              {items.map((item) => (
                                <Link href={getFinalUrl(key as string, item.slug) || '#'} key={item.slug} className="block py-2 hover:underline">
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : null,
                      )}
                  </div>
                )}

                {isFetching && (
                  <div className="pt-5 flex flex-col gap-2 w-full">
                    <SkeletonLoader className="!h-4 !rounded-b-none" />
                    <SkeletonLoader className="!h-4 !rounded-b-none" />
                    <SkeletonLoader className="!h-4 !rounded-b-none" />
                    <SkeletonLoader className="!h-4 !rounded-b-none" />
                  </div>
                )}
              </motion.div>
            </div>
          </motion.section>
        </Portal>
      ) : null}
    </AnimatePresence>
  )
}
