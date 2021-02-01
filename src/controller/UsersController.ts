import { Request, Response } from 'express'
import db from '../database/conn'

export default {
  async createUser(request: Request, response: Response) {
    const { name, login } = request.body

    const trx = await db.transaction()

    try {
      const addUser = await trx('users').insert({
        name,
        login
      })
      await trx.commit()
      return response.json({
        status_message: `Usuario ${name} criado com sucesso`
      })
    } catch (err) {
      await trx.rollback()
      return response.json({ err })
    }
  }
}
