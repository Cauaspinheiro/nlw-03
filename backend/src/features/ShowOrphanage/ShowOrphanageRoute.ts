import { Router } from 'express'
import ShowOrphanageController from './ShowOrphanageController'

const ShowOrphanageRoute = Router()

ShowOrphanageRoute.get('/orphanages/:id', ShowOrphanageController)

export default ShowOrphanageRoute
