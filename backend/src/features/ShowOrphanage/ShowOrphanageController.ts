import { Request, Response } from 'express'
import Orphanage from '../../models/Orphanage'
import { getRepository } from 'typeorm'
import ShowOrphanagesView from './ShowOrphanagesView'

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
    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    })

    return res
      .status(200)
      .json(ShowOrphanagesView.render(orphanage, req.get('host')))
  } catch (error) {
    return res.status(404).json({ error: 'ORPHANAGE NOT FOUND' })
  }
}
