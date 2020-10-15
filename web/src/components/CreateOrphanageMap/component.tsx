import { LeafletMouseEvent } from 'leaflet'
import React from 'react'

import { Map, TileLayer, Marker } from 'react-leaflet'
import {
  DEFAULT_COORDINATES,
  mapMarkerIcon,
  TILE_LAYER_URL
} from '../../common/mapOpts'

export interface CreateOrphanageMapProps {
  onclick: (e: LeafletMouseEvent) => unknown
  latitude: number
  longitude: number
}

const CreateOrphanageMapWithSSR: React.FC<CreateOrphanageMapProps> = ({
  onclick,
  latitude,
  longitude
}) => {
  return (
    <Map
      center={DEFAULT_COORDINATES}
      style={{ width: '100%', height: 280 }}
      zoom={15}
      onclick={onclick}
    >
      <TileLayer url={TILE_LAYER_URL} />

      {latitude !== 0 && (
        <Marker
          interactive={false}
          icon={mapMarkerIcon}
          position={[latitude, longitude]}
        />
      )}
    </Map>
  )
}

export default CreateOrphanageMapWithSSR
