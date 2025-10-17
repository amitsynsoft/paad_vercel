import Link from 'next/link'
import { useRef, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api'

import ImageGuard from '@/_components/manar/_ui/image-guard/ImageGuard.component'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import MapOverviewCard from '@/_components/manar/_ui/cards/map-overview-card/MapOverviewCard'

const containerStyle = { width: '100%', height: '800px' }

export default function MapArtworkDetail({ location, images }: { location: any; images: any }) {
  const lat = parseFloat(location?.lat)
  const lng = parseFloat(location?.lon)

  const locale = useLocale()
  const t = useTranslations('CommonButton')

  const mapRef = useRef<google.maps.Map | null>(null)
  const [selected, setSelected] = useState<any | null>(null)
  const [googleReady, setGoogleReady] = useState(false)
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null)

  const getMarkerIcon = (locationItem: any) => {
    if (hoveredMarkerId === locationItem.id || selected?.id === locationItem.id) {
      return locationItem.hoverIcon
    }
    return locationItem.icon
  }
  return (
    <div key={locale} dir="ltr">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!} onLoad={() => setGoogleReady(true)}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat, lng }}
          zoom={10}
          options={{ mapTypeControl: false, fullscreenControl: false }}
          onLoad={(map) => {
            mapRef.current = map
          }}
        >
          <>
            {location && (
              <Marker
                key={location?.id}
                position={{ lat, lng }}
                title={location?.name}
                icon={
                  googleReady
                    ? {
                        url: getMarkerIcon(location),
                        scaledSize: new google.maps.Size(30, 30),
                      }
                    : undefined
                }
                onClick={() => setSelected(location)}
                onMouseOver={() => setHoveredMarkerId(location?.id)}
                onMouseOut={() => setHoveredMarkerId(null)}
              >
                {selected?.id === location?.id && (
                  <OverlayView position={{ lat, lng }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                    <MapOverviewCard name={selected.name} city={selected?.location?.city || ''} imageUrl={images[0]?.card?.url} onClose={() => setSelected(null)} lat={selected?.location?.lat} lon={selected?.location?.lon} />
                  </OverlayView>
                )}
              </Marker>
            )}
          </>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
