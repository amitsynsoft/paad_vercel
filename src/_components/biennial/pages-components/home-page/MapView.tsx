'use client'

import { useLocale } from 'next-intl'
import { useState, useRef, useEffect } from 'react'

import { defaultZoomNumber_16, getFitBounds, zoomLevel } from '@/utils'
import GoogleMapWrapper from '@/_components/biennial/_ui/biennial-map/BiennialMapWrapper'
import Container from '../../_ui/container/Container.component'
import { useScrollToSection } from '@/hooks/scroll-to-hash.hook'

export default function MapView({ data }: MapViewProps) {
  const locale = useLocale()
  const mapRef = useRef<google.maps.Map | null>(null)
  const [googleReady, setGoogleReady] = useState(false)
  useScrollToSection('#map-view')

  return (
    <>
      <Container id="map-view">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-black md:text-4xl">{data?.title}</h2>
        </div>

        <div key={locale} className="relative w-full h-full" dir="ltr">
          <GoogleMapWrapper
            onMapLoad={(map) => {
              mapRef.current = map
            }}
            onGoogleReady={(ready) => setGoogleReady(ready)}
          ></GoogleMapWrapper>
        </div>
      </Container>
    </>
  )
}

type MapViewProps = {
  data: any
}
