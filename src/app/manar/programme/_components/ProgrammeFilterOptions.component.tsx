import { X } from 'lucide-react'
import { Button } from '@heroui/react'
import { useLocale, useTranslations } from 'next-intl'
import React, { useEffect, useRef, useState } from 'react'

import { useQueryParam } from '@/hooks/query-param.hook'
import { FilterKey } from '@/types/manar/Filter.type'
import { getActiveFilterKey } from '@/utils/filter.utils'
import { useGetFilterOptionsQuery } from '@/redux/services/common.api'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'

export default function ArtWorkFilterOptions() {
  const locale = useLocale()
  const prevLocale = useRef(locale)
  const t = useTranslations('Manar.PageHeaders.filterOptions')

  const [filterOption, setFilterOption] = useState<any>(null)
  const [selectedFilterOption, setSelectedFilterOption] = useState<any>(null)

  const { value: selectedLocation, setValue: setLocation, resetParams } = useQueryParam('locations')
  const { value: selectedKeyword, setValue: setKeyword } = useQueryParam('keywords')
  const { value: selectedTypes, setValue: setTypes } = useQueryParam('types')
  const { value: selectedParticipating, setValue: setSelectedParticipating } = useQueryParam('participatingArtists')

  const queryParamConfig = {
    locations: {value: selectedLocation,set: setLocation},
    keywords: {value: selectedKeyword,set: setKeyword},
    types: {value: selectedTypes,set: setTypes},
    participatingArtists: {value: selectedParticipating,set: setSelectedParticipating},
  } as const

  const { data: filterOptionsData, refetch } = useGetFilterOptionsQuery({ locale, type: 'program', orgName: 'Manar' })

  useEffect(() => {
    const valuesMap: Record<FilterKey, string | null> = {
      locations: selectedLocation,
      keywords: selectedKeyword,
      types: selectedTypes,
      participatingArtists: selectedParticipating,
      medium: null,
      date: null,
    }
    const activeKey = getActiveFilterKey(valuesMap)
    setSelectedFilterOption(activeKey)

    if (filterOptionsData && activeKey) setFilterOption(filterOptionsData[activeKey])

    if (prevLocale.current === locale) return

    refetch()
    setFilterOption(null)
    setSelectedFilterOption(null)
    resetParams(['locations', 'keywords', 'types', 'participatingArtists'])
    prevLocale.current = locale
  }, [locale, filterOptionsData])

  const handleFilterOption = (option: string) => {
    setSelectedFilterOption(option)
    setFilterOption(filterOptionsData?.[option])
  }

  const handleFilterItemClick = (item: string) => {
    if (!selectedFilterOption) return

    const config = queryParamConfig[selectedFilterOption as keyof typeof queryParamConfig]
    if (!config) return

    const { value, set } = config

    if (value === item) {
      set(null)
    } else {
      set(item)
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2 md:justify-end">
        <ManarButton color={selectedLocation ? 'primaryFilled' : 'primaryFilledOutLine'} onPress={() => handleFilterOption('locations')}>
          {t('locations')}
        </ManarButton>
        {/* <ManarButton color={selectedKeyword ? 'primaryFilled' : 'primaryFilledOutLine'} onPress={() => handleFilterOption('keywords')}>
          {t('keywords')}
        </ManarButton> */}
        <ManarButton color={selectedTypes ? 'primaryFilled' : 'primaryFilledOutLine'} onPress={() => handleFilterOption('types')}>
          {t('types')}
        </ManarButton>
        <ManarButton color={selectedParticipating ? 'primaryFilled' : 'primaryFilledOutLine'} onPress={() => handleFilterOption('participatingArtists')}>
          {t('participatingArtists')}
        </ManarButton>
    
        {(selectedKeyword || selectedLocation || selectedTypes || selectedParticipating) && (
          <Button
            color="primary"
            className="rounded-full"
            isIconOnly
            variant="ghost"
            onPress={() => {
              setFilterOption(null)
              setSelectedFilterOption(null)
              resetParams(['locations', 'keywords', 'types', 'participatingArtists'])
            }}
          >
            <X />
          </Button>
        )}
      </div>

      {selectedFilterOption && (
        <div className="flex gap-2 flex-wrap md:justify-end" key={locale}>
          {filterOption?.map((item: any, index: number) => {
            const config = selectedFilterOption && queryParamConfig[selectedFilterOption as keyof typeof queryParamConfig]

            const isSelected = config?.value === item

            return (
              <ManarButton key={`${index + locale}`} size='sm' color={isSelected ? 'primaryFilled' : 'primaryFilledOutLine'} onPress={() => handleFilterItemClick(item)}>
                {item}
              </ManarButton>
            )
          })}
        </div>
      )}
    </div>
  )
}
