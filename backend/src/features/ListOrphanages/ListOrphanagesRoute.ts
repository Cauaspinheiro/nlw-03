import { Router } from 'express'

import ListOrphanagesController from './ListOrphanagesController'

const ListOrphanagesRoute = Router()

ListOrphanagesRoute.get('/orphanages', ListOrphanagesController)

export default ListOrphanagesRoute
