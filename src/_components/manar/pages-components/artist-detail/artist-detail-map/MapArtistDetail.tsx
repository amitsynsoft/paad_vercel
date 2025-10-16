import ImageGuard from '@/_components/manar/_ui/image-guard/ImageGuard.component'
import Section from '@/_components/manar/_ui/section/Section'
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api'
import { X } from 'lucide-react'
import React, { useRef, useState } from 'react'

const containerStyle = { width: '100%', height: '800px' }
const defaultCenter = { lat: 24.4539, lng: 54.3773 }

// const artworks = [
//   {
//     title: 'CONTINGENT OBJECT, SALINE BODIES: THE LANDSCAPE AS HARVEST',
//     slug: 'contingent-object-saline-bodies-the-landscape-as-harvest',
//     images: [],
//     location: {
//       id: 6643,
//       name: 'Shaikha Al Mazrou',
//       lat: '24.541586',
//       lon: '54.495752',
//       address: '',
//       description: '',
//       city: 'Jubail Island',
//       locationType: null,
//       icon: '/media/ckvj2tie/artworks.svg',
//       hoverIcon: '/media/glephtxm/artworks_hover.svg',
//       categories: [
//         {
//           type: 'Jubail Island',
//         },
//       ],
//     },
//   },
//   {
//     title: 'CONTINGENT OBJECT, SALINE BODIES: THE LANDSCAPE AS HARVEST',
//     slug: 'contingent-object-saline-bodies-the-landscape-as-harvest',
//     images: [],
//     location: {
//       id: 6644,
//       name: 'Shaikha Al Mazrou',
//       lat: '24.542826',
//       lon: '54.495752',
//       address: '',
//       description: '',
//       city: 'Jubail Island',
//       locationType: null,
//       icon: '/media/ckvj2tie/artworks.svg',
//       hoverIcon: '/media/glephtxm/artworks_hover.svg',
//       categories: [
//         {
//           type: 'Jubail Island',
//         },
//       ],
//     },
//   },
// ]

export default function MapArtistDetail({ artworks }: { artworks: any }) {
  const mapRef = useRef<google.maps.Map | null>(null)
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
    <Section>
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
                      <div className="bg-primary dark:bg-background text-white p-4 w-64 flex flex-col gap-4 -translate-x-1/2">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-bold text-base">{selected?.location?.name}</h3>
                          <div onClick={() => setSelected(null)} className=" border-white border-2 rounded-full p-2 cursor-pointer">
                            <ImageGuard src="/x-button.svg" alt="image" height={12} width={12} />
                          </div>
                        </div>
                        {selected?.images?.length && (
                          <div className="relative h-[180px] w-full">
                            <ImageGuard src={selected?.images?.[0]?.card?.url} alt="image" fill />
                          </div>
                        )}
                        <div className="flex justify-start">
                          <a
                            href={`https://www.google.com/maps/dir/?api=1&origin=my+location&destination=${selected?.location?.lat},${selected?.location?.lon}`}
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
              )
            })}
          </>
        </GoogleMap>
      </LoadScript>
    </Section>
  )
}
