import { Request, Response } from 'express'
import Orphanage from '../../models/Orphanage'
import { getRepository } from 'typeorm'

export interface IListOrphanagesResponse extends Response {
  body: Orphanage
}

export default async function ListOrphanagesController(
  req: Request,
  res: IListOrphanagesResponse
): Promise<Response> {
  const orphanagesRepository = getRepository(Orphanage)

  const orphanages = await orphanagesRepository.find()

  return res.status(200).json(orphanages)
}
