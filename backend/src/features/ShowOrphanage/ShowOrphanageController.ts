import { Request, Response } from 'express'
import Orphanage from '../../models/Orphanage'
import { getRepository } from 'typeorm'

export interface IShowOrphanageRequest extends Request {
  params: {
    id: string
  }
}

export default async function ShowOrphanageController(
  req: IShowOrphanageRequest,
  res: Response
): Promise<Response> {
  const { id } = req.params

  const orphanagesRepository = getRepository(Orphanage)

  try {
    const orphanages = await orphanagesRepository.findOneOrFail(id)

    return res.status(200).json(orphanages)
  } catch (error) {
    return res.status(404).json({ error: 'ORPHANAGE NOT FOUND' })
  }
}
