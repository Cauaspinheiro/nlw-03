import { Request, Response } from 'express'
import Orphanage from '../../models/Orphanage'
import { getRepository } from 'typeorm'

export interface ICreateOrphanageRequest extends Request {
  body: Orphanage
}

export default async function CreateOrphanagesController(
  req: ICreateOrphanageRequest,
  res: Response
): Promise<Response> {
  const orphanagesRepository = getRepository(Orphanage)

  const orphanage = orphanagesRepository.create(req.body)

  await orphanagesRepository.save(orphanage)

  return res.status(201).json({ id: orphanage.id })
}
