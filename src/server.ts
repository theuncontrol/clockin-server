import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'
import * as path from 'path'
import * as bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 3333
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(cors())

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

import routes from './routes'
app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(port, () => {
  console.log('listening port ' + port)
})
