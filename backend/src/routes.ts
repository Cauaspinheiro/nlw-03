import express, { Router } from 'express'
import { ListOrphanagesRoute } from './features/ListOrphanages'
import { CreateOrphanageRoute } from './features/CreateOrphanage'
import { ShowOrphanageRoute } from './features/ShowOrphanage'
import path from 'path'

const routes = Router()

routes.use(CreateOrphanageRoute)
routes.use(ListOrphanagesRoute)
routes.use(ShowOrphanageRoute)
routes.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

export default routes
