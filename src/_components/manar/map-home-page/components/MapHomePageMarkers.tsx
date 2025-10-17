'use client'
import { useState } from 'react'
import { Marker, OverlayView } from '@react-google-maps/api'

import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import MapOverviewCard from '../../_ui/cards/map-overview-card/MapOverviewCard'

export default function MapMarkers({ locations, selected, setSelected, googleReady }: any) {
  const t = useTranslations('CommonButton')
  const locale = useLocale()
  const [hoveredMarkerId, setHoveredMarkerId] = useState<number | null>(null)

  const getMarkerIcon = (loc: any) => {
    if (selected?.id === loc?.id) return loc.hoverIcon
    if (hoveredMarkerId === loc?.id) return loc.hoverIcon
    return loc.icon
  }

  return (
    <div>
      {locations.map((loc: any) => {
        const lat = parseFloat(loc.location.lat)
        const lng = parseFloat(loc.location.lon)
        if (isNaN(lat) || isNaN(lng)) return null
        return (
          <Marker
            key={loc.id + locale}
            position={{ lat, lng }}
            title={loc.name}
            icon={
              googleReady
                ? {
                    url: getMarkerIcon(loc),
                    scaledSize: new google.maps.Size(30, 30),
                  }
                : undefined
            }
            onClick={() => setSelected(loc)}
            onMouseOver={() => setHoveredMarkerId(loc.id)}
            onMouseOut={() => setHoveredMarkerId(null)}
          >
            {selected?.id === loc.id && (
              <OverlayView position={{ lat, lng }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                <MapOverviewCard
                  name={selected.name}
                  city={selected?.location?.city || ''}
                  imageUrl={selected?.location?.artwork?.images?.[0]?.card?.url}
                  onClose={() => setSelected(null)}
                  lat={selected?.location?.lat}
                  lon={selected?.location?.lon}
                />
              </OverlayView>
            )}
          </Marker>
        )
      })}
    </div>
  )
}
