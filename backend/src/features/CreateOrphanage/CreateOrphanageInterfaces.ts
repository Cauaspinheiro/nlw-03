import {Request} from 'express'
import Orphanage from 'models/Orphanage'

export interface ICreateOrphanageRequest extends Request {
  body: Orphanage
}
