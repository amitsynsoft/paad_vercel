'use client'

import { useLocale } from 'next-intl'
import { useState, useRef, useEffect } from 'react'

import useMapAutoFit from './hooks/useMapAutoFit.hook'
import MapMarkers from './components/MapHomePageMarkers'
import MapFilters from './components/MapHomePageFilters'
import GoogleMapWrapper from '../google-map-wrapper/GoogleMapWrapper'
import { useMapFilters } from './hooks/useMapFilters.hook'
import { defaultZoomNumber_16, getFitBounds, zoomLevel } from '@/utils'

export default function MapHomePage({ locationData, showFilterButtons = true }: MapHomePageProps) {
  const { selectedCity, setSelectedCity, selectedType, setSelectedType, cities, locationTypes, filteredLocations, allLocations } = useMapFilters(locationData)

  const locale = useLocale()
  const mapRef = useRef<google.maps.Map | null>(null)

  const [activeTab, setActiveTab] = useState<'locations' | 'filter' | null>(null)
  const [googleReady, setGoogleReady] = useState(false)
  const [selected, setSelected] = useState<any | null>(null)
  const [currentLocale, setCurrentLocale] = useState(locale)

  useMapAutoFit({
    mapRef,
    googleReady,
    filteredLocations,
    allLocations,
    selectedCity,
    getFitBounds,
    zoomLevel,
    defaultZoom: defaultZoomNumber_16,
  })

  useEffect(() => {
    if (locale !== currentLocale) {
      setSelected(null)
      setCurrentLocale(locale)
      setActiveTab(null)
      setSelectedCity(null)
      setSelectedType(null)
    }
  }, [locale])

  return (
    <div key={locale} className="relative w-full h-full" dir="ltr">
      {showFilterButtons && (
        <MapFilters
          cities={cities}
          locationTypes={locationTypes}
          selectedCity={selectedCity}
          selectedType={selectedType}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setSelectedCity={setSelectedCity}
          setSelectedType={setSelectedType}
        />
      )}

      <GoogleMapWrapper
        onMapLoad={(map) => {
          mapRef.current = map
          const bounds = getFitBounds(allLocations)
          if (bounds) {
            map.fitBounds(bounds)
            zoomLevel(map, defaultZoomNumber_16)
          }
        }}
        onGoogleReady={(ready) => setGoogleReady(ready)}
      >
        <MapMarkers locations={filteredLocations} selected={selected} setSelected={setSelected} googleReady={googleReady} />
      </GoogleMapWrapper>
    </div>
  )
}

type MapHomePageProps = {
  locationData: any
  showFilterButtons?: boolean
}
