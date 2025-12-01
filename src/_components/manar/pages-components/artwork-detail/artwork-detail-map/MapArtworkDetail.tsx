import { useRef, useState } from 'react'
import { useLocale } from 'next-intl'
import MapArtworkDetailMarkers from './components/MapArtworkDetailMarkers'
import GoogleMapWrapper from '@/_components/manar/google-map-wrapper/GoogleMapWrapper'
import { defaultZoomNumber_16, getFitBounds, zoomLevel } from '@/utils'

export default function MapArtworkDetail({ locations }: MapArtworkDetailProps) {
  const locale = useLocale()
  const mapRef = useRef<google.maps.Map | null>(null)
  const [selected, setSelected] = useState<any | null>(null)
  const [googleReady, setGoogleReady] = useState(false)
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null)
  console.log({ locations })

  return (
    <div key={locale} dir="ltr">
      {/* <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!} onLoad={() => setGoogleReady(true)}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat, lng }}
          zoom={16}
          options={mapOptions}
          onLoad={(map) => {
            mapRef.current = map
          }}
        >
          <MapArtworkDetailMarkers location={location} selected={selected} setSelected={setSelected} googleReady={googleReady} hoveredMarkerId={hoveredMarkerId} setHoveredMarkerId={setHoveredMarkerId} />
        </GoogleMap>
      </LoadScript> */}

      <GoogleMapWrapper
        onMapLoad={(map) => {
          mapRef.current = map
          const bounds = getFitBounds(locations)
          if (bounds) {
            mapRef.current?.fitBounds(bounds)
            zoomLevel(map, defaultZoomNumber_16)
          }
        }}
        onGoogleReady={(ready) => setGoogleReady(ready)}
      >
        <MapArtworkDetailMarkers locations={locations} selected={selected} setSelected={setSelected} googleReady={googleReady} hoveredMarkerId={hoveredMarkerId} setHoveredMarkerId={setHoveredMarkerId} />
      </GoogleMapWrapper>
    </div>
  )
}

type MapArtworkDetailProps = {
  locations: any
}
