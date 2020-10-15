import { ErrorRequestHandler } from 'express'

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err)

  return res.status(500).json({ error: 'SOMETHING WENT WRONG' })
}

export default errorHandler
