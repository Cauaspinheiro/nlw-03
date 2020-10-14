import { Response } from 'express'
import Orphanage from '../../models/Orphanage'
import { getRepository } from 'typeorm'
import { ICreateOrphanageRequest } from './CreateOrphanageInterfaces'

export default async function CreateOrphanagesController(
  req: ICreateOrphanageRequest,
  res: Response
): Promise<Response> {
  const orphanagesRepository = getRepository(Orphanage)

  const reqFiles = req.files as Express.Multer.File[]

  const images = reqFiles.map((image) => {
    return { path: image.filename }
  })

  const orphanage = orphanagesRepository.create({ ...req.body, images })

  await orphanagesRepository.save(orphanage)

  return res.status(201).json({ id: orphanage.id })
}
