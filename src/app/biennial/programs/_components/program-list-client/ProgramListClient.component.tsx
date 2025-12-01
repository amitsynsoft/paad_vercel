'use client'
import React from 'react'
import { Button, ButtonGroup, cn } from '@heroui/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Container from '@/_components/biennial/_ui/container/Container.component'
import ProgramCard from '@/_components/biennial/_ui/cards/program-card/ProgramCard.component'
import NoRecordFound from '@/_components/biennial/_ui/cards/no-record-found/NoRecordFound'

export default function ProgramListClient({ programs, labels }: { programs: any; labels: any }) {
  const options = [
    { id: 'all', label: 'All' },
    { id: 'today', label: 'Today' },
    { id: 'this-week', label: 'This Week' },
    { id: 'this-month', label: 'This Month' },
    { id: 'past-event', label: 'Past Events' },
  ]

  const defaultActiveId = 'all'

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const initial = searchParams.get('dateRanges') ?? defaultActiveId
  const [active, setActive] = React.useState(initial)

  React.useEffect(() => {
    const next = searchParams.get('dateRanges') ?? defaultActiveId
    setActive(next)
  }, [searchParams, defaultActiveId])

  function updateURL(id: string) {
    const params = new URLSearchParams(searchParams.toString())

    if (id === 'all') params.delete('dateRanges')
    else params.set('dateRanges', id)

    const q = params.toString()
    router.replace(q ? `${pathname}?${q}` : pathname)
  }

  function handleClick(id: string) {
    setActive(id)
    updateURL(id)
  }

  const sortedList = (programs: any) => {
    return programs.sort((a: any, b: any) => {
      const dateA = new Date(a.startDate || 0).getTime()
      const dateB = new Date(b.startDate || 0).getTime()
      return dateA - dateB
    })
  }

  return (
    <Container>
      <div className="flex flex-wrap gap-4 items-center">
        {options.map((opt) => {
          const isActive = opt.id === active

          return (
            <Button
              size="sm"
              key={opt.id}
              onPress={() => handleClick(opt.id)}
              variant={isActive ? 'solid' : 'bordered'}
              color="primary"
              className={cn('text-sm', isActive ? 'primary text-white' : 'text-primary border-primary')}
            >
              {opt.label}
            </Button>
          )
        })}
      </div>

      {programs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
          {sortedList(programs).map((program: any, index: number) => (
            <ProgramCard key={index} title={program.title} images={program.images} label={labels?.readMore} slug={program.slug} />
          ))}
        </div>
      )}

      {programs.length === 0 && (
        <div className="flex justify-center">
          <NoRecordFound />
        </div>
      )}
    </Container>
  )
}
