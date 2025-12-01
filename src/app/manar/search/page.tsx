'use client'

import React, { useEffect, useState } from 'react'

import Section from '@/_components/manar/_ui/section/Section'
import { useLazyGetSearchResultsQuery } from '@/redux/services/manar/search.api'
import { SearchField } from '@/_components/manar/_ui/form-elements/SearchField'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { SearchResults } from './_components/searchResults/SearchResults'
import { useLocale, useTranslations } from 'next-intl'

export default function Page() {
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const t = useTranslations('Manar.search')

  const [query, setQuery] = useState('')

  const [getSearchResults, { data: searchData, isLoading, isFetching, isError }] = useLazyGetSearchResultsQuery()

  useEffect(() => {
    const initial = searchParams.get('searchterm') || ''

    if (!initial) return

    setQuery(initial)

    const fetchData = async () => {
      await getSearchResults({
        locale,
        organizationName: 'Manar',
        searchTerm: initial,
      })
    }

    fetchData()
  }, [])

  const handleSearch = async (searchTerm: string) => {
    const trimmedSearch = searchTerm.trim()
    setQuery(trimmedSearch)

    if (trimmedSearch) await getSearchResults({ locale: locale, organizationName: 'Manar', searchTerm: trimmedSearch })

    const params = new URLSearchParams()
    if (trimmedSearch) params.set('searchterm', trimmedSearch)

    const newUrl = `${pathname}?${params.toString()}`

    router.replace(newUrl, { scroll: false })
  }

  return (
    <Section className="flex flex-col items-center !pt-12 md:!pt-20 pb-6">
      <div className="w-full max-w-[1140px] flex flex-col gap-6">
        {/* Search Bar */}
        <div className="flex flex-col items-center gap-3">
          <SearchField placeholder={t('placeholderText')} value={query} onChange={setQuery} onSearch={handleSearch} />
        </div>
      </div>
      {/* Results */}
      <SearchResults query={query} searchData={searchData} isLoading={isLoading || isFetching} isError={isError} />
    </Section>
  )
}
