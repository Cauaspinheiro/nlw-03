import { Router } from 'express'
import { ListOrphanagesRoute } from './features/ListOrphanages'
import { CreateOrphanageRoute } from './features/CreateOrphanage'
import { ShowOrphanageRoute } from './features/ShowOrphanage'

const routes = Router()

routes.use(CreateOrphanageRoute)
routes.use(ListOrphanagesRoute)
routes.use(ShowOrphanageRoute)

export default routes
