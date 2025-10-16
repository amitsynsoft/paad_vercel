'use client'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'

export default function MapHomePageFilters({ cities, locationTypes, selectedCity, selectedType, activeTab, setActiveTab, setSelectedCity, setSelectedType }: MapHomePageFiltersProps) {
  return (
    <>
      <div className="absolute top-2 left-2 right-2 z-20 flex flex-wrap gap-2 w-full max-w-[calc(100%-4rem)]">
        <ManarButton
          onPress={() => {
            setActiveTab(activeTab === 'locations' ? null : 'locations')
            setSelectedType(null)
          }}
          color={activeTab === 'locations' ? 'primary' : 'primaryOutline'}
        >
          Locations
        </ManarButton>

        <ManarButton
          onPress={() => {
            setActiveTab(activeTab === 'filter' ? null : 'filter')
            setSelectedCity(null)
          }}
          color={activeTab === 'filter' ? 'primary' : 'primaryOutline'}
        >
          Filter
        </ManarButton>
      </div>

      {activeTab === 'locations' && (
        <div className="absolute top-14 left-2 right-2 z-10 flex flex-wrap gap-2">
          {cities.map((city) => (
            <ManarButton key={city} onPress={() => setSelectedCity(selectedCity === city ? null : city)} color={selectedCity === city ? 'primary' : 'primaryOutline'}>
              {city}
            </ManarButton>
          ))}
        </div>
      )}

      {activeTab === 'filter' && (
        <div className="absolute top-14 left-2 right-2 z-10 flex flex-wrap gap-2">
          {locationTypes.map((type) => (
            <ManarButton key={type} size="sm" onPress={() => setSelectedType(selectedType === type ? null : type)} color={selectedType === type ? 'primary' : 'primaryOutline'}>
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
