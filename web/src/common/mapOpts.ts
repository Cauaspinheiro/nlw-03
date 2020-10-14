import leaflet, { LatLngExpression } from 'leaflet'

export const mapMarkerIcon = leaflet.icon({
  iconUrl: '/logo.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

export const MAP_BOX_TOKEN =
  'pk.eyJ1IjoiY2F1YXNwaW5oZWlybyIsImEiOiJja2V4YmlpaHQyeDJpMnJsZ2x3OWQ4bmVwIn0.yiODtwk7FNHwPt68AaNBXA'

export const TILE_LAYER_URL = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_BOX_TOKEN}`

export const DEFAULT_COORDINATES = [
  -23.5131381,
  -46.8931377
] as LatLngExpression
