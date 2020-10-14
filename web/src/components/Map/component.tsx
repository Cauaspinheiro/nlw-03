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
import { IOrphanage } from '../../entities/Orphanage'

export interface IMapProps {
  orphanages: IOrphanage[]
}

const MapWithSSR: React.FC<IMapProps> = ({ orphanages }) => {
  return (
    <StyledMap>
      <Leaflet id="leaflet" center={DEFAULT_COORDINATES} zoom={15}>
        <TileLayer url={TILE_LAYER_URL} />

        {orphanages.map(value => (
          <Marker
            key={value.id}
            position={[value.latitude, value.longitude]}
            icon={mapMarkerIcon}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              <span>{value.name}</span>
              <Link href={`/orphanages/${value.id}`}>
                <a>
                  <FiArrowRight size={20} color="#fff" />
                </a>
              </Link>
            </Popup>
          </Marker>
        ))}
      </Leaflet>
    </StyledMap>
  )
}
export default MapWithSSR
