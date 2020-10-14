import React from 'react'

import { TileLayer, Marker, Popup, Map as Leaflet } from 'react-leaflet'
import leaflet from 'leaflet'
import { StyledMap } from '../styles/components/Map'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

const mapIcon = leaflet.icon({
  iconUrl: '/logo.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

const Map: React.FC = () => {
  return (
    <StyledMap>
      <Leaflet id="leaflet" center={[-23.5131381, -46.8931377]} zoom={15}>
        <TileLayer
          url={
            'https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2F1YXNwaW5oZWlybyIsImEiOiJja2V4YmlpaHQyeDJpMnJsZ2x3OWQ4bmVwIn0.yiODtwk7FNHwPt68AaNBXA'
          }
        />

        <Marker position={[-23.5131381, -46.8931377]} icon={mapIcon}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            <span>Orf. Esperança</span>
            <Link href="/">
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
export default Map
