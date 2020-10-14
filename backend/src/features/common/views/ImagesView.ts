import Image from 'models/Image'

export interface IImageView {
  id: number
  url: string
}

export default {
  render(images: Image[], host?: string): IImageView[] {
    return images.map((image) => ({
      id: image.id,
      url: `${host && 'http://localhost:3001'}/uploads/${image.path}`,
    }))
  },
}
