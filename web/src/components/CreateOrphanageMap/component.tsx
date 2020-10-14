import React from 'react'

import { Map, TileLayer, Marker } from 'react-leaflet'
import {
  DEFAULT_COORDINATES,
  mapMarkerIcon,
  TILE_LAYER_URL
} from '../../common/mapOpts'

const CreateOrphanageMapWithSSR: React.FC = () => (
  <Map
    center={DEFAULT_COORDINATES}
    style={{ width: '100%', height: 280 }}
    zoom={15}
  >
    <TileLayer url={TILE_LAYER_URL} />

    <Marker
      interactive={false}
      icon={mapMarkerIcon}
      position={DEFAULT_COORDINATES}
    />
  </Map>
)

export default CreateOrphanageMapWithSSR
