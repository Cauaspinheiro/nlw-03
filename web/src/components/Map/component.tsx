import React from 'react'

import { TileLayer, Marker, Popup, Map as Leaflet } from 'react-leaflet'

import { StyledMap } from '../../styles/components/Map'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import {
  DEFAULT_COORDINATES,
  mapMarkerIcon,
  TILE_LAYER_URL
} from '../../common/mapOpts'

const MapWithSSR: React.FC = () => {
  return (
    <StyledMap>
      <Leaflet id="leaflet" center={DEFAULT_COORDINATES} zoom={15}>
        <TileLayer url={TILE_LAYER_URL} />

        <Marker position={DEFAULT_COORDINATES} icon={mapMarkerIcon}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            <span>Orf. Esperança</span>
            <Link href="/orphanages">
              <a>
                <FiArrowRight size={20} color="#fff" />
              </a>
            </Link>
          </Popup>
        </Marker>
      </Leaflet>
    </StyledMap>
  )
}
export default MapWithSSR
