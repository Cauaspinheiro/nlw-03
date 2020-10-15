import Orphanage from 'models/Orphanage'
import * as Yup from 'yup'
import { RequestHandler } from 'express'
import { ICreateOrphanageRequest } from './CreateOrphanageInterfaces'

export type CreateOrphanageValidatorSchema = Omit<Orphanage, 'id'>

const schema = Yup.object().shape<CreateOrphanageValidatorSchema>({
  name: Yup.string().required(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
  about: Yup.string().required().max(300),
  instructions: Yup.string().required(),
  opening_hours: Yup.string().required(),
  open_on_weekends: Yup.boolean().required(),
  images: Yup.array() as never,
})

const CreateOrphanageValidator: RequestHandler = async (
  req: ICreateOrphanageRequest,
  res,
  next
) => {
  try {
    await schema.validate(req.body, { abortEarly: false })

    return next()
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return res.status(400).json({ error: error.inner })
    }

    console.log(error)

    return res.status(500).json('SOMETHING WENT WRONG')
  }
}

export default CreateOrphanageValidator
