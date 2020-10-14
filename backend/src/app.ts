import express from 'express'
import 'express-async-errors'
import routes from './routes'
import './database/connection'
import errorHandler from './errors/handler'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.use(errorHandler)

export default app
