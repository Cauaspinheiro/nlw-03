import { ErrorRequestHandler } from 'express'

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  return res.status(500).json({ error: 'SOMETHING WENT WRONG' })
}

export default errorHandler
