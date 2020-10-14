import { ErrorRequestHandler } from 'express'

const errorHandler: ErrorRequestHandler = (error, req, res) => {
  return res.status(500).json({ error: 'SOMETHING WENT WRONG' })
}

export default errorHandler
