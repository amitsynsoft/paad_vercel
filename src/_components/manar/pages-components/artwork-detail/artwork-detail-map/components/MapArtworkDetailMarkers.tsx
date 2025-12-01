import MapOverviewCard from '@/_components/manar/_ui/cards/map-overview-card/MapOverviewCard'
import { getMarkerIcon } from '@/utils'
import { Marker, OverlayView } from '@react-google-maps/api'
import React from 'react'

export default function MapArtworkDetailMarkers({ locations, selected, setSelected, googleReady, hoveredMarkerId, setHoveredMarkerId }: MapArtworkDetailMarkersProps) {
  return (
    <>
      {locations?.map((location: any) => {
        const lat = parseFloat(location?.lat)
        const lng = parseFloat(location?.lon)
        return (
          <Marker
            key={location?.id}
            position={{ lat, lng }}
            title={location?.name}
            icon={
              googleReady
                ? {
                    url: getMarkerIcon(location, hoveredMarkerId, selected, 'artwork'),
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
                <MapOverviewCard name={selected?.name} artworkName={selected?.artworkTitle} imageUrl={location?.images[0]?.card?.url || ''} onClose={() => setSelected(null)} lat={selected?.lat} lon={selected?.lon} />
              </OverlayView>
            )}
          </Marker>
        )
      })}
    </>
  )
}

type MapArtworkDetailMarkersProps = {
  locations: any
  selected: any
  setSelected: any
  googleReady: any
  hoveredMarkerId: any
  setHoveredMarkerId: any
}
