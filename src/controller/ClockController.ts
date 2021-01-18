import * as express from 'express'
import { Request, Response } from 'express'

export default {
  async index(request: Request, response: Response) {
    return response.json({ message: 'Hello World' })
  }
}
