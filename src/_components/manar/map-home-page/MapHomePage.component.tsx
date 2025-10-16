'use client'

import { useState, useRef } from 'react'
import { LoadScript, GoogleMap } from '@react-google-maps/api'

import { useMapFilters } from './hooks/useMapFilters.hook'
import MapFilters from './components/MapHomePageFilters'
import MapMarkers from './components/MapHomePageMarkers'

const containerStyle = { width: '100%', height: '800px' }
const defaultCenter = { lat: 24.4539, lng: 54.3773 }

export default function MapHomePage({ locationData, showFilterButtons = true }: { locationData: any; showFilterButtons?: boolean }) {
  const { selectedCity, setSelectedCity, selectedType, setSelectedType, cities, locationTypes, filteredLocations, allLocations } = useMapFilters(locationData)

  const [activeTab, setActiveTab] = useState<'locations' | 'filter' | null>(null)
  const [googleReady, setGoogleReady] = useState(false)
  const [selected, setSelected] = useState<any | null>(null)
  const mapRef = useRef<google.maps.Map | null>(null)

  return (
    <div className="relative w-full h-full">
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

      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!} onLoad={() => setGoogleReady(true)}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={10}
          options={{ mapTypeControl: false, fullscreenControl: false }}
          onLoad={(map) => {
            mapRef.current = map
          }}
        >
          <MapMarkers locations={filteredLocations} selected={selected} setSelected={setSelected} googleReady={googleReady} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
