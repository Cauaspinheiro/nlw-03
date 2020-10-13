import { Router } from 'express'
import CreateOrphanageController from './CreateOrphanageController'
import multer from 'multer'

import multerConfig from '../../config/multer'

const multerMiddleware = multer(multerConfig)

const CreateOrphanageRoute = Router()

CreateOrphanageRoute.post(
  '/orphanages',
  multerMiddleware.array('images'),
  CreateOrphanageController
)

export default CreateOrphanageRoute
