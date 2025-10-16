import { X } from 'lucide-react'
import { useRef, useState } from 'react'
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api'

import ImageGuard from '@/_components/manar/_ui/image-guard/ImageGuard.component'

const containerStyle = { width: '100%', height: '800px' }

export default function MapArtworkDetail({ location, images }: { location: any; images: any }) {
  const lat = parseFloat(location?.lat)
  const lng = parseFloat(location?.lon)

  const mapRef = useRef<google.maps.Map | null>(null)
  const [selected, setSelected] = useState<any | null>(null)
  const [googleReady, setGoogleReady] = useState(false)
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null)

  const getMarkerIcon = (locationItem: any) => {
    if (hoveredMarkerId === locationItem.id) {
      return locationItem.hoverIcon
    }
    return locationItem.icon
  }
  return (
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
                  <div className="bg-primary dark:bg-background text-white p-4 w-64 flex flex-col gap-4 -translate-x-1/2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-base">{selected.name}</h3>
                      <div onClick={() => setSelected(null)} className=" border-white border-2 rounded-full p-2 cursor-pointer">
                        <ImageGuard src="/x-button.svg" alt="image" height={12} width={12} />
                      </div>
                    </div>
                    {images && (
                      <div className="relative h-[180px] w-full">
                        <ImageGuard src={images[0]?.card?.url} alt="image" fill />
                      </div>
                    )}
                    {/* Todo: remove hard-coded directions */}
                    <div className="flex justify-start">
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&origin=my+location&destination=${selected?.lat},${selected?.lon}`}
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
          )}
        </>
      </GoogleMap>
    </LoadScript>
  )
}
