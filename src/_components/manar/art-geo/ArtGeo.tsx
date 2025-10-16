'use client'

import { X } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useState, useMemo, useRef, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api'

import ImageGuard from '../_ui/image-guard/ImageGuard.component'
import { ManarButton } from '../_ui/buttons/ManarButton'

const containerStyle = {
  width: '100%',
  height: '800px',
}

const defaultCenter = { lat: 24.4539, lng: 54.3773 }

export default function ArtGeo({ isButtonFilter = true, locationData }: { isButtonFilter?: boolean; locationData: any }) {
  const locale = useLocale()
  const [selectedCity, setSelectedCity] = useState(locale === 'ar' ? 'الكل' : 'All')
  const [selected, setSelected] = useState<any | null>(null)
  const [googleReady, setGoogleReady] = useState(false)
  const [hoveredMarkerId, setHoveredMarkerId] = useState<number | null>(null)

  const mapRef = useRef<google.maps.Map | null>(null)

  const cities = useMemo(() => [locale === 'ar' ? 'الكل' : 'All', ...locationData.cities.map((city: any) => city.name)], [locale])

  const allLocations = useMemo(() => locationData.cities.flatMap((city: any) => city.locations), [locale])

  const filteredLocations = useMemo(() => {
    if (selectedCity === (locale === 'ar' ? 'الكل' : 'All')) return allLocations
    const cityData = locationData.cities.find((c: any) => c.name === selectedCity)
    return cityData ? cityData.locations : []
  }, [selectedCity, allLocations, locale])

  useEffect(() => {
    if (!mapRef.current) return

    if (selectedCity === (locale === 'ar' ? 'الكل' : 'All')) {
      const bounds = new window.google.maps.LatLngBounds()
      filteredLocations.forEach((loc: any) => {
        const lat = parseFloat(loc.location.lat)
        const lng = parseFloat(loc.location.lon)
        if (!isNaN(lat) && !isNaN(lng)) bounds.extend({ lat, lng })
      })
      mapRef.current.fitBounds(bounds)
    } else {
      const cityData = locationData.cities.find((c: any) => c.name === selectedCity)
      if (cityData) {
        const lat = parseFloat(cityData.lat)
        const lng = parseFloat(cityData.lon)
        if (!isNaN(lat) && !isNaN(lng)) {
          mapRef.current.setCenter({ lat, lng })
          mapRef.current.setZoom(14)
        }
      }
    }
  }, [selectedCity, filteredLocations, locale])

  return (
    <div className="relative w-full h-full" key={locale} dir="ltr">
      {isButtonFilter && (
        <div className="absolute top-2 left-2 right-2 z-10 flex flex-wrap gap-2 w-full max-w-[calc(100%-4rem)]">
          {cities.map((city) => (
            <ManarButton key={city} onPress={() => setSelectedCity(city)} color={selectedCity === city ? 'primary' : 'primaryOutline'}>
              {city}
            </ManarButton>
          ))}
        </div>
      )}

      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string} language={locale} onLoad={() => setGoogleReady(true)}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={10}
          options={{ mapTypeControl: false }}
          onLoad={(map) => {
            mapRef.current = map
            if (selectedCity === (locale === 'ar' ? 'الكل' : 'All')) {
              const bounds = new window.google.maps.LatLngBounds()
              allLocations.forEach((loc: any) => {
                const lat = parseFloat(loc.location.lat)
                const lng = parseFloat(loc.location.lon)
                if (!isNaN(lat) && !isNaN(lng)) bounds.extend({ lat, lng })
              })
              map.fitBounds(bounds)
            }
          }}
        >
          {filteredLocations.map((loc: any) => {
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
                  <OverlayView key={selected?.id} position={{ lat: parseFloat(selected?.location?.lat), lng: parseFloat(selected?.location?.lon) }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                    <div className="bg-[#1d136a] text-white p-4 w-64 flex flex-col gap-4 -translate-x-1/2">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-base">{selected?.name}</h3>
                        <div onClick={() => setSelected(null)} className="border border-white rounded-full p-1 cursor-pointer">
                          <X height={16} width={16} />
                        </div>
                      </div>
                      <div className="relative h-[180px] w-full">
                        <ImageGuard src={selected?.location?.artwork?.images?.[0]?.card?.url} alt="image" fill />
                      </div>

                      <div className="flex justify-start">
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&origin=my+location&destination=${selected?.location?.lat},${selected?.location?.lon}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-medium text-white border-2 border-white rounded-full px-4 py-1 cursor-pointer"
                        >
                          Directions
                        </a>
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
