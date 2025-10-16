import { useMemo, useState } from 'react'

export function useMapFilters(locationData: any) {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)

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
    if (selectedCity) result = result.filter((loc: any) => loc.location.city?.trim().toLowerCase() === selectedCity.trim().toLowerCase())

    if (selectedType) result = result.filter((loc: any) => loc.locationType && loc.locationType.trim().toLowerCase() === selectedType.trim().toLowerCase())

    return result
  }, [selectedCity, selectedType, allLocations])

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
