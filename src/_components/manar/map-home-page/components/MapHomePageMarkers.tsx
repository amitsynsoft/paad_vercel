'use client'
import { useState } from 'react'
import { X } from 'lucide-react'
import { Marker, OverlayView } from '@react-google-maps/api'

import ImageGuard from '../../_ui/image-guard/ImageGuard.component'
import { ManarButton } from '../../_ui/buttons/ManarButton'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@heroui/react'

export default function MapMarkers({ locations, selected, setSelected, googleReady }: any) {
  const [hoveredMarkerId, setHoveredMarkerId] = useState<number | null>(null)

  const getMarkerIcon = (loc: any) => {
    if (selected?.id === loc?.id) return loc.hoverIcon
    if (hoveredMarkerId === loc?.id) return loc.hoverIcon
    return loc.icon
  }

  return (
    <>
      {locations.map((loc: any) => {
        const lat = parseFloat(loc.location.lat)
        const lng = parseFloat(loc.location.lon)
        if (isNaN(lat) || isNaN(lng)) return null
        return (
          <Marker
            key={loc.id}
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
                <div className="bg-primary dark:bg-background text-white p-4 w-69 flex flex-col gap-4 -translate-x-1/2">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex flex-col">
                      <h3 className="text-base">
                        <i>{selected?.location?.city}</i>
                      </h3>
                      <h3 className="text-base">{selected.name}</h3>
                    </div>
                    <div className="w-[24px] h-[24px] group border-2 border-white rounded-full p-1 cursor-pointer hover:bg-white" onClick={() => setSelected(null)}>
                      <img src="/x-button.svg" alt="close" height={12} width={12} className="transition-all group-hover:invert" />
                    </div>
                  </div>
                  {selected?.location?.artwork && (
                    <div className={`relative w-[245px] h-[180px] ${selected?.location?.artwork?.images?.[0]?.card?.url ? 'bg-[#eeedfb]' : ''}`}>
                      <ImageGuard src={selected?.location?.artwork?.images?.[0]?.card?.url} alt="image" fill />
                    </div>
                  )}
                  <div className="flex justify-start">
                    <ManarButton
                      as={Link}
                      href={`https://www.google.com/maps/dir/?api=1&origin=my+location&destination=${selected?.location?.lat},${selected?.location?.lon}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="directionOutlineHover"
                      className="text-sm h-8"
                    >
                      Directions
                    </ManarButton>
                  </div>
                </div>
              </OverlayView>
            )}
          </Marker>
        )
      })}
    </>
  )
}
