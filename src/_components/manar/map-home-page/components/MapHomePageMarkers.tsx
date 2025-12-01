'use client'
import { useEffect, useState } from 'react'
import { Marker, OverlayView } from '@react-google-maps/api'

import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import MapOverviewCard from '../../_ui/cards/map-overview-card/MapOverviewCard'
import { getMarkerIcon } from '@/utils'

export default function MapMarkers({ locations, selected, setSelected, googleReady }: any) {
  const locale = useLocale()
  const [hoveredMarkerId, setHoveredMarkerId] = useState<number | null>(null)

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
            title={loc.locationType}
            icon={
              googleReady
                ? {
                    url: getMarkerIcon(loc, hoveredMarkerId, selected, 'home'),
                    scaledSize: new google.maps.Size(30, 30),
                  }
                : undefined
            }
            onClick={() => setSelected(loc)}
            onMouseOver={() => setHoveredMarkerId(loc.id)}
            onMouseOut={() => setHoveredMarkerId(null)}
          >
            {selected?.id === loc.id && (
              <OverlayView position={{ lat, lng }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} key={loc.id + locale}>
                <MapOverviewCard
                  name={selected?.name}
                  artworkName={selected?.location?.artwork?.title}
                  imageUrl={selected?.location?.artwork?.images?.[0]?.card?.url}
                  onClose={() => setSelected(null)}
                  lat={selected?.location?.lat}
                  lon={selected?.location?.lon}
                  locationType={selected?.locationType}
                  slug={selected?.location?.artwork?.slug || ''}
                  pageType="home"
                />
              </OverlayView>
            )}
          </Marker>
        )
      })}
    </div>
  )
}
