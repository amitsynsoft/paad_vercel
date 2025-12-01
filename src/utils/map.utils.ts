export const mapOptions = {
  mapTypeControl: false,
  fullscreenControl: false,
  mapId: process.env.NEXT_PUBLIC_MAP_ID!,
}

export const containerStyle = { width: '100%', height: '800px' }
export const defaultCenter = { lat: 24.4539, lng: 54.3773 }
export const defaultZoom = 10
export const defaultZoomNumber_16 = 16

export const getFitBounds = (locations: any, pageType?: 'home' | 'artworks' | 'artist') => {
  if (typeof window === 'undefined' || !window?.google || !window?.google?.maps || !window?.google?.maps?.LatLngBounds) {
    return null
  }

  const bounds = new google.maps.LatLngBounds()

  if (pageType === 'artist') {
    locations.forEach((loc: any) => {
      loc.locations.forEach((loc: any) => {
        const lat = parseFloat(loc?.lat)
        const lng = parseFloat(loc?.lon)
        if (!isNaN(lat) && !isNaN(lng)) bounds.extend({ lat, lng })
      })
    })
  } else {
    locations.forEach((loc: any) => {
      const lat = parseFloat(loc?.location?.lat || loc?.lat)
      const lng = parseFloat(loc?.location?.lon || loc?.lon)
      if (!isNaN(lat) && !isNaN(lng)) bounds.extend({ lat, lng })
    })
  }

  return bounds
}

export const zoomLevel = (map: any, zoomNumber: number = defaultZoomNumber_16) => {
  google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
    const zoom = map.getZoom()
    if (typeof zoom === 'number' && zoom > zoomNumber) {
      map.setZoom(zoomNumber)
    }
  })
}

export const getMarkerIcon = (locationItem: any, hoveredMarkerId: any, selected: any, type: string) => {
  const typeConfigs: Record<string, (selected: any) => string | undefined> = {
    artist: (selected) => selected?.location?.id,
    artwork: (selected) => selected?.id,
    home: (selected) => selected?.id,
  }

  const DEFAULT_ICON = '/images/manar/Manar-star-01-primary.svg'
  const getSelectedId = typeConfigs[type]?.(selected) ?? selected?.id
  const isActive = hoveredMarkerId === locationItem?.id || getSelectedId === locationItem?.id

  return isActive ? locationItem?.hoverIcon : locationItem?.icon || DEFAULT_ICON
}
