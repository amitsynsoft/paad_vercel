import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import ImageGuard from '@/_components/manar/_ui/image-guard/ImageGuard.component'
import Section from '@/_components/manar/_ui/section/Section'
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api'
import { X } from 'lucide-react'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import MapOverviewCard from '@/_components/manar/_ui/cards/map-overview-card/MapOverviewCard'

const containerStyle = { width: '100%', height: '800px' }
const defaultCenter = { lat: 24.4539, lng: 54.3773 }

export default function MapArtistDetail({ artworks }: { artworks: any }) {
  const mapRef = useRef<google.maps.Map | null>(null)
  const locale = useLocale()
  const t = useTranslations('CommonButton')
  const [selected, setSelected] = useState<any | null>(null)
  const [googleReady, setGoogleReady] = useState(false)
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null)

  const getMarkerIcon = (locationItem: any) => {
    if (hoveredMarkerId === locationItem.id || selected?.location?.id === locationItem.id) {
      return locationItem.hoverIcon
    }
    return locationItem.icon
  }

  return (
    <Section className="!pt-20">
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
          <>
            {artworks.map((item: any) => {
              const lat = parseFloat(item?.location?.lat)
              const lng = parseFloat(item?.location?.lon)
              if (isNaN(lat) || isNaN(lng)) return null
              return (
                <Marker
                  key={item?.location?.id}
                  position={{ lat, lng }}
                  title={item?.location?.name}
                  icon={
                    googleReady
                      ? {
                          url: getMarkerIcon(item?.location),
                          scaledSize: new google.maps.Size(30, 30),
                        }
                      : undefined
                  }
                  onClick={() => setSelected(item)}
                  onMouseOver={() => setHoveredMarkerId(item?.location?.id)}
                  onMouseOut={() => setHoveredMarkerId(null)}
                >
                  {selected?.location?.id === item?.location?.id && (
                    <OverlayView position={{ lat, lng }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                      <MapOverviewCard
                        name={selected?.location?.name}
                        city={selected?.location?.city || ''}
                        imageUrl={selected?.images?.[0]?.card?.url}
                        onClose={() => setSelected(null)}
                        lat={selected?.location?.lat}
                        lon={selected?.location?.lon}
                      />
                    </OverlayView>
                  )}
                </Marker>
              )
            })}
          </>
        </GoogleMap>
      </LoadScript>
    </Section>
  )
}
