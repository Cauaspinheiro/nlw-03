import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import {
  DEFAULT_COORDINATES,
  mapMarkerIcon,
  TILE_LAYER_URL
} from '../../common/mapOpts'

const OrphanageMapWithSSR: React.FC = () => (
  <Map
    center={DEFAULT_COORDINATES}
    zoom={16}
    style={{ width: '100%', height: 280 }}
    dragging={false}
    touchZoom={false}
    zoomControl={false}
    scrollWheelZoom={false}
    doubleClickZoom={false}
  >
    <TileLayer url={TILE_LAYER_URL} />
    <Marker
      interactive={false}
      icon={mapMarkerIcon}
      position={DEFAULT_COORDINATES}
    />
  </Map>
)

export default OrphanageMapWithSSR
