import { useMemo, useState } from 'react'
import { useLocale } from 'next-intl'

export function useMapFilters(locationData: any) {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const locale = useLocale()

  const cities = useMemo(() => locationData?.cities?.map((city: any) => city.name) || [], [locationData])

  const allLocations = useMemo(() => locationData?.cities?.flatMap((c: any) => c.locations) || [], [locationData])

  const locationTypes = useMemo(() => {
    const types = new Set<string>()
    locationData?.cities?.forEach((c: any) =>
      c.locations.forEach((loc: any) => {
        if (loc.locationType) types.add(loc.locationType)
      }),
    )
    return Array.from(types)
  }, [locationData])

  const filteredLocations = useMemo(() => {
    let result = allLocations
    // as per this logic by backend team
    if (selectedCity) {
      const cityName = selectedCity.trim().toLowerCase()
      const cityLocations = result.filter((loc: any) => loc.location.city?.trim().toLowerCase() === cityName)
      // TODO: remove location type to  type
      const nonArtworkLocations = allLocations.filter((item: any) => item.locationType !== (locale === 'ar' ? 'عمل فني' : 'Artwork'))

      // merge and remove duplicates by id
      const combined = [...cityLocations, ...nonArtworkLocations]
      const uniqueLocations = Array.from(new Map(combined.map((loc: any) => [loc.id, loc])).values())

      result = uniqueLocations
    }
    if (selectedType) {
      result = result.filter((loc: any) => loc.locationType && loc.locationType.trim().toLowerCase() === selectedType.trim().toLowerCase())
    }

    return result
  }, [selectedCity, selectedType, allLocations, locale])

  return {
    selectedCity,
    setSelectedCity,
    selectedType,
    setSelectedType,
    cities,
    locationTypes,
    allLocations,
    filteredLocations,
  }
}
