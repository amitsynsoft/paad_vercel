import React, { useRef, useState } from 'react'

import Section from '@/_components/manar/_ui/section/Section'
import MapArtistDetailMakers from './components/MapArtistDetailMakers'
import { defaultZoomNumber_16, getFitBounds, zoomLevel } from '@/utils'
import GoogleMapWrapper from '@/_components/manar/google-map-wrapper/GoogleMapWrapper'

export default function MapArtistDetail({ artworks }: MapArtistDetailProps) {
  const mapRef = useRef<google.maps.Map | null>(null)
  const [selected, setSelected] = useState<any | null>(null)
  const [googleReady, setGoogleReady] = useState(false)
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null)
  return (
    <div dir="ltr">
      <Section className="!pt-20">
        {/* <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!} onLoad={() => setGoogleReady(true)}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={defaultZoom}
            options={mapOptions}
            onLoad={(map) => {
              mapRef.current = map
              const bounds = getFitBounds(artworks)
              mapRef.current?.fitBounds(bounds)
            }}
          >
            <MapArtistDetailMakers artworks={artworks} selected={selected} setSelected={setSelected} googleReady={googleReady} hoveredMarkerId={hoveredMarkerId} setHoveredMarkerId={setHoveredMarkerId} />
          </GoogleMap>
        </LoadScript> */}

        <GoogleMapWrapper
          onMapLoad={(map) => {
            mapRef.current = map
            const bounds = getFitBounds(artworks, 'artist')
            if (bounds) {
              mapRef.current?.fitBounds(bounds)
              zoomLevel(map, defaultZoomNumber_16)
            }
          }}
          onGoogleReady={(ready) => setGoogleReady(ready)}
        >
          <MapArtistDetailMakers artworks={artworks} selected={selected} setSelected={setSelected} googleReady={googleReady} hoveredMarkerId={hoveredMarkerId} setHoveredMarkerId={setHoveredMarkerId} />
        </GoogleMapWrapper>
      </Section>
    </div>
  )
}

type MapArtistDetailProps = {
  artworks: any
}
