'use client'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import { useTranslations } from 'next-intl'

export default function MapHomePageFilters({ cities, locationTypes, selectedCity, selectedType, activeTab, setActiveTab, setSelectedCity, setSelectedType }: MapHomePageFiltersProps) {
  const t = useTranslations('Manar.HomePage.MapSection')

  return (
    <>
      <div className="absolute top-2 left-2 right-2 z-20 flex flex-wrap gap-2 w-full max-w-[calc(100%-4rem)]">
        <ManarButton
          disableAnimation={true}
          disableRipple={true}
          onPress={() => {
            setActiveTab(activeTab === 'locations' ? null : 'locations')
            setSelectedType(null)
          }}
          color={activeTab === 'locations' ? 'primaryMapButton' : 'primaryOutline'}
        >
          {t('Locations')}
        </ManarButton>

        <ManarButton
          disableAnimation={true}
          disableRipple={true}
          onPress={() => {
            setActiveTab(activeTab === 'filter' ? null : 'filter')
            setSelectedCity(null)
          }}
          color={activeTab === 'filter' ? 'primaryMapButton' : 'primaryOutline'}
        >
          {t('Filter')}
        </ManarButton>
      </div>

      {activeTab === 'locations' && (
        <div className="absolute top-14 left-2 right-2 z-10 flex flex-wrap gap-2">
          {cities.map((city) => (
            <ManarButton key={city} disableAnimation={true} disableRipple={true} onPress={() => setSelectedCity(selectedCity === city ? null : city)} color={selectedCity === city ? 'primaryMapButton' : 'primaryOutline'}>
              {city}
            </ManarButton>
          ))}
        </div>
      )}

      {activeTab === 'filter' && (
        <div className="absolute top-14 left-2 right-2 z-10 flex flex-wrap gap-2">
          {locationTypes.map((type) => (
            <ManarButton
              key={type}
              disableAnimation={true}
              disableRipple={true}
              size="sm"
              onPress={() => setSelectedType(selectedType === type ? null : type)}
              color={selectedType === type ? 'primaryMapButton' : 'primaryOutline'}
            >
              {type}
            </ManarButton>
          ))}
        </div>
      )}
    </>
  )
}

type MapHomePageFiltersProps = {
  cities: string[]
  locationTypes: string[]
  selectedCity: string | null
  selectedType: string | null
  activeTab: 'locations' | 'filter' | null
  setActiveTab: (tab: 'locations' | 'filter' | null) => void
  setSelectedCity: (city: string | null) => void
  setSelectedType: (type: string | null) => void
}
