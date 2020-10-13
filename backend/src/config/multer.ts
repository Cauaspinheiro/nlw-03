import { randomBytes } from 'crypto'
import multer, { Options } from 'multer'
import path from 'path'

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      randomBytes(8, (err, hash) => {
        if (err) {
          return cb(
            err,
            `${Date.now()}${file.originalname.substring(
              file.originalname.lastIndexOf('.')
            )}`
          )
        }

        const filename = `${hash.toString(
          'hex'
        )}-${Date.now()}${file.originalname.substring(
          file.originalname.lastIndexOf('.')
        )}`

        cb(null, filename)
      })
    },
  }),
} as Options
