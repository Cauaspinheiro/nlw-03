import React from 'react'

import { Map as Leaflet, TileLayer } from 'react-leaflet'

const Map: React.FC = () => {
  return (
    <Leaflet
      center={[-23.5131381, -46.8931377]}
      zoom={15}
      style={{ width: '100%', height: '100%', zIndex: 1 }}
    >
      <TileLayer
        url={
          'https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2F1YXNwaW5oZWlybyIsImEiOiJja2V4YmlpaHQyeDJpMnJsZ2x3OWQ4bmVwIn0.yiODtwk7FNHwPt68AaNBXA'
        }
      />
    </Leaflet>
  )
}
export default Map
