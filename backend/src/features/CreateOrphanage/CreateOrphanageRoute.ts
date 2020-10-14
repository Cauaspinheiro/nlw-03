import { Router } from 'express'
import CreateOrphanageController from './CreateOrphanageController'
import multer from 'multer'

import multerConfig from '../../config/multer'
import CreateOrphanageValidator from './CreateOrphanageValidator'

const multerMiddleware = multer(multerConfig)

const CreateOrphanageRoute = Router()

CreateOrphanageRoute.post(
  '/orphanages',
  multerMiddleware.array('images'),
  CreateOrphanageValidator,
  CreateOrphanageController
)

export default CreateOrphanageRoute
