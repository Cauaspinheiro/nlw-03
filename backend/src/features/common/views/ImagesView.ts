import Image from 'models/Image'

export interface IImageView {
  id: number
  url: string
}

export default {
  render(images: Image[]): IImageView[] {
    return images.map((image) => ({
      id: image.id,
      url: `http://localhost:3001/uploads/${image.path}`,
    }))
  },
}
