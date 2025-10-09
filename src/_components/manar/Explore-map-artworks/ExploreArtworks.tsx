'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api'

import { useLocale } from 'next-intl'
import { locationData } from './location.data'
import { createImageFullUrl } from '@/utils'
import { X } from 'lucide-react'
import ImageGuard from '../_ui/image-guard/ImageGuard.component'
import { ManarButton } from '../_ui/buttons/ManarButton'

const containerStyle = {
  width: '100%',
  height: '480px',
}

const defaultCenter = { lat: 24.4539, lng: 54.3773 }

export default function ExploreMap({ isButtonFilter = true }: { isButtonFilter?: boolean }) {
  const locale = useLocale()
  const [selectedCity, setSelectedCity] = useState('All')
  const [selected, setSelected] = useState<any | null>(null)
  const [googleReady, setGoogleReady] = useState(false)
  const [hoveredMarkerId, setHoveredMarkerId] = useState<number | null>(null)

  const mapRef = useRef<google.maps.Map | null>(null)

  // Cities + All
  const cities = useMemo(() => ['All', ...locationData.cities.map((city) => city.name)], [])

  // All locations
  const allLocations = useMemo(() => locationData.cities.flatMap((city) => city.locations), [])

  // Location types (for future checkbox use)
  // const locationTypes = useMemo(() => {
  //   const types = new Set(allLocations.map((loc) => loc.locationType))
  //   return Array.from(types)
  // }, [allLocations])

  // Filter locations based on selected city
  const filteredLocations = useMemo(() => {
    if (selectedCity === 'All') return allLocations
    const cityData = locationData.cities.find((c) => c.name === selectedCity)
    return cityData ? cityData.locations : []
  }, [selectedCity, allLocations])

  // Update map when city changes
  useEffect(() => {
    if (!mapRef.current) return

    if (selectedCity === 'All') {
      const bounds = new window.google.maps.LatLngBounds()
      filteredLocations.forEach((loc) => {
        const lat = parseFloat(loc.location.lat)
        const lng = parseFloat(loc.location.lon)
        if (!isNaN(lat) && !isNaN(lng)) bounds.extend({ lat, lng })
      })
      mapRef.current.fitBounds(bounds)
    } else {
      const cityData = locationData.cities.find((c) => c.name === selectedCity)
      if (cityData) {
        const lat = parseFloat(cityData.lat)
        const lng = parseFloat(cityData.lon)
        if (!isNaN(lat) && !isNaN(lng)) {
          mapRef.current.setCenter({ lat, lng })
          mapRef.current.setZoom(14)
        }
      }
    }
  }, [selectedCity, filteredLocations])

  return (
    <div className="relative w-full h-full">
      {/* City Filters */}
      {isButtonFilter && (
        <div className="absolute top-2 left-2 right-2 z-10 flex flex-wrap gap-2 w-full max-w-[calc(100%-4rem)]">
          {cities.map((city) => (
            <ManarButton key={city} onPress={() => setSelectedCity(city)} color={selectedCity === city ? 'primary' : 'primaryOutline'}>
              {city}
            </ManarButton>
          ))}
        </div>
      )}

      {/* Location Type Filters (commented) */}
      {/*
      <div className="absolute top-16 left-2 z-10 flex flex-wrap gap-4">
        {locationTypes.map((type) => (
          <Checkbox
            key={type}
            isSelected={selectedTypes.includes(type)}
            onChange={(e) => handleTypeChange(type, e.target.checked)}
          >
            {type}
          </Checkbox>
        ))}
      </div>
      */}

      {/*  Google Map  */}
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string} language={locale} onLoad={() => setGoogleReady(true)}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={10}
          options={{ mapTypeControl: false }}
          onLoad={(map) => {
            mapRef.current = map
            // page load pe "All" ke liye fit bounds
            if (selectedCity === 'All') {
              const bounds = new window.google.maps.LatLngBounds()
              allLocations.forEach((loc) => {
                const lat = parseFloat(loc.location.lat)
                const lng = parseFloat(loc.location.lon)
                if (!isNaN(lat) && !isNaN(lng)) bounds.extend({ lat, lng })
              })
              map.fitBounds(bounds)
            }
          }}
        >
          {filteredLocations.map((loc) => {
            const lat = parseFloat(loc.location.lat)
            const lng = parseFloat(loc.location.lon)
            if (isNaN(lat) || isNaN(lng)) return null

            const isSelected = selected?.id === loc?.id
            const isHovered = hoveredMarkerId === loc?.id

            const getMarkerIcon = () => {
              if (isSelected) return '/images/Manar-star-01-primary.svg'
              if (isHovered) return '/images/Manar-star-01-primary.svg'
              return '/images/ic_map-white.svg'
            }

            return (
              <Marker
                key={loc.id}
                onClick={() => {
                  setSelected(loc)
                }}
                position={{ lat, lng }}
                title={loc.name}
                icon={
                  googleReady
                    ? {
                        url: getMarkerIcon(),
                        scaledSize: new google.maps.Size(30, 30),
                      }
                    : undefined
                }
                onMouseOver={() => setHoveredMarkerId(loc?.id)}
                onMouseOut={() => setHoveredMarkerId(null)}
              >
                {selected && (
                  <OverlayView position={{ lat: parseFloat(selected?.location?.lat), lng: parseFloat(selected?.location?.lon) }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                    <div className="bg-primary text-white p-4 w-64 flex flex-col gap-4 -translate-x-1/2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg">{selected?.name}</h3>

                        <div onClick={() => setSelected(null)} className="border border-white rounded-full p-1 cursor-pointer">
                          <X height={16} width={16} />
                        </div>
                      </div>
                      <div className="relative h-60 w-full">
                        <ImageGuard src={selected?.image} alt="image" fill />
                      </div>

                      <div className="flex justify-start">
                        <button className="text-medium text-white border-2 border-white rounded-full px-4 py-1 cursor-pointer">Directions</button>
                      </div>
                    </div>
                  </OverlayView>
                )}
              </Marker>
            )
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
