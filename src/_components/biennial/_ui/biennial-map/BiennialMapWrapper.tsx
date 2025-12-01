'use client'

import { useLocale } from 'next-intl'
import { useState, useRef } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { containerStyle, defaultCenter, defaultZoom, mapOptions } from '@/utils'

export default function GoogleMapWrapper({ mapContainerStyle = containerStyle, center = defaultCenter, zoom = defaultZoom, options = mapOptions, onMapLoad, onGoogleReady, children, className = '' }: GoogleMapWrapperProps) {
  const [googleReady, setGoogleReady] = useState(false)
  const mapRef = useRef<google.maps.Map | null>(null)
  const locale = useLocale()

  return (
    <div className={className} dir="ltr">
      <LoadScript
        language={locale}
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!}
        onLoad={() => {
          setGoogleReady(true)
          onGoogleReady?.(true)
        }}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={{
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => {
            mapRef.current = map
            onMapLoad?.(map)
          }}
        >
          {googleReady && children}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

type GoogleMapWrapperProps = {
  mapContainerStyle?: React.CSSProperties
  center?: google.maps.LatLngLiteral
  zoom?: number
  options?: google.maps.MapOptions
  onMapLoad?: (map: google.maps.Map) => void
  children?: React.ReactNode
  onGoogleReady?: (ready: boolean) => void
  className?: string
}
