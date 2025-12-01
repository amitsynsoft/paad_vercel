import React from 'react'
import { Marker, OverlayView } from '@react-google-maps/api'
import MapOverviewCard from '@/_components/manar/_ui/cards/map-overview-card/MapOverviewCard'
import { getMarkerIcon } from '@/utils'

export default function MapArtistDetailMakers({ artworks, selected, setSelected, googleReady, hoveredMarkerId, setHoveredMarkerId }: MapArtistDetailMakersProps) {
  return (
    <>
      {artworks?.map((artwork: any) =>
        artwork?.locations?.map((item: any) => {
          const lat = parseFloat(item?.lat)
          const lng = parseFloat(item?.lon)
          if (isNaN(lat) || isNaN(lng)) return null

          return (
            <Marker
              key={item?.id}
              position={{ lat, lng }}
              title={item?.name}
              icon={
                googleReady
                  ? {
                      url: getMarkerIcon(item, hoveredMarkerId, selected, 'artist'),
                      scaledSize: new google.maps.Size(30, 30),
                    }
                  : undefined
              }
              onClick={() => setSelected(item)}
              onMouseOver={() => setHoveredMarkerId(item?.id)}
              onMouseOut={() => setHoveredMarkerId(null)}
            >
              {selected?.id === item?.id && (
                <OverlayView position={{ lat, lng }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                  <MapOverviewCard
                    name={selected?.name}
                    artworkName={selected?.artworkTitle}
                    imageUrl={selected?.images?.[0]?.card?.url}
                    onClose={() => setSelected(null)}
                    lat={selected?.lat}
                    lon={selected?.lon}
                    slug={artworks?.find((artwork: any) => artwork?.title === selected?.artworkTitle)?.slug || ''}
                  />
                </OverlayView>
              )}
            </Marker>
          )
        }),
      )}
    </>
  )
}

type MapArtistDetailMakersProps = {
  artworks: any
  selected: any
  setSelected: any
  googleReady: any
  hoveredMarkerId: any
  setHoveredMarkerId: any
}
