import { useLocale } from 'next-intl'
import { useCallback, useEffect } from 'react'

export default function useAutoFit({ mapRef, googleReady, filteredLocations = [], allLocations = [], selectedCity, getFitBounds, zoomLevel = (m: any, z = 16) => m.setZoom?.(z), defaultZoom = 16 }: props) {
  const locale = useLocale()

  const toLatLng = useCallback((loc?: Loc) => {
    const lat = loc?.location?.lat
    const lon = loc?.location?.lon
    if (lat == null || lon == null) return null
    const nLat = typeof lat === 'string' ? parseFloat(lat) : lat
    const nLon = typeof lon === 'string' ? parseFloat(lon) : lon
    return Number.isFinite(nLat) && Number.isFinite(nLon) ? { lat: nLat, lng: nLon } : null
  }, [])

  const fitAndZoom = useCallback(
    (locs: Loc[], z = defaultZoom) => {
      if (!mapRef.current) return false
      const b = getFitBounds(locs)
      if (!b) return false
      mapRef.current.fitBounds(b)
      zoomLevel(mapRef.current, z)
      return true
    },
    [getFitBounds, mapRef, zoomLevel, defaultZoom],
  )

  const run = useCallback(() => {
    if (!mapRef.current || !googleReady) return

    const fl = filteredLocations ?? []
    const all = allLocations ?? []
    if (!fl.length && !all.length) return

    if (fl.length === all.length) {
      fitAndZoom(all)
      return
    }
    // TODO: remove location type to  type
    const target = selectedCity ? fl.filter((item) => item.locationType === (locale === 'ar' ? 'عمل فني' : 'Artwork')) : fl

    // try fit; fallback to center first
    if (!fitAndZoom(target)) {
      const p = toLatLng(target[0])
      if (p) {
        mapRef.current.setCenter(p)
        zoomLevel(mapRef.current, defaultZoom)
      }
    }

    // ensure single-location centering
    if (target.length === 1) {
      const p = toLatLng(target[0])
      if (p) {
        mapRef.current.setCenter(p)
        zoomLevel(mapRef.current, defaultZoom)
      }
    }
  }, [mapRef, googleReady, filteredLocations, allLocations, selectedCity, fitAndZoom, toLatLng, zoomLevel, defaultZoom])

  useEffect(() => {
    run()
  }, [run, filteredLocations, allLocations, googleReady, selectedCity])

  return { forceFit: run }
}

type Loc = { locationType?: string; location?: { lat?: string | number; lon?: string | number } }

type props = {
  mapRef: React.RefObject<any | null>
  googleReady: boolean
  filteredLocations?: Loc[]
  allLocations?: Loc[]
  selectedCity?: string | null
  getFitBounds: (locs: Loc[]) => any | null
  zoomLevel?: (map: any, z?: number) => void
  defaultZoom?: number
}
