import { Router } from 'express'
import CreateOrphanageController from './CreateOrphanageController'

const CreateOrphanageRoute = Router()

CreateOrphanageRoute.post('/orphanages', CreateOrphanageController)

export default CreateOrphanageRoute
