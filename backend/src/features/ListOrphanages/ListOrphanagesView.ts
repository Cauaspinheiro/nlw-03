import ImagesView, { IImageView } from '../common/views/ImagesView'
import Orphanage from '../../models/Orphanage'

export interface IListOrphanageView {
  id: number
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  images: IImageView[]
}

export default {
  render(orphanages: Orphanage[], host?: string): IListOrphanageView[] {
    return orphanages.map((orphanage) => ({
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: ImagesView.render(orphanage.images, host),
    }))
  },
}
