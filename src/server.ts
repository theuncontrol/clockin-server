import * as express from 'express'

const app = express()

app.get('/', response => {
  return response.json({ message: 'Hello world' })
})

app.listen(3333)
