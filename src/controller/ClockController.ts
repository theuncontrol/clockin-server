import { Request, Response } from 'express'
import db from '../database/conn'
import { format } from 'date-fns'

const today = format(new Date(), 'dd/MM/yyyy - HH:mm:ss')

export default {
  async entry(request: Request, response: Response) {
    const { identity } = request.body

    const trx = await db.transaction()

    try {
      const user = await trx('users')
        .select('*')
        .where({ login: identity })
        .first()
      const entryTime = await trx('entry').insert({
        name: user.name,
        entryTime: today,
        login: identity
      })
      const relation = await trx('entry_relationship').insert({
        user_id: user.id,
        user_entry: today,
        user_departure: 'notDeparture'
      })

      await trx.commit()
      return response.json({ status_message: `Sucesso` })
    } catch (err) {
      await trx.rollback()
      return response.json({ status_message: err })
    }
  },
  async departure(request: Request, response: Response) {
    const { identity } = request.body

    const trx = await db.transaction()

    try {
      const user = await trx('users')
        .select('*')
        .where({ login: identity })
        .first()
      const entryTime = await trx('departure').insert({
        name: user.name,
        departureTime: today,
        login: identity
      })
      const relation = await trx('entry_relationship')
        .update({
          user_departure: today
        })
        .where({ user_id: user.id })
      await trx.commit()
      return response.json({ status_message: `Sucesso` })
    } catch (err) {
      await trx.rollback()
      return response.json({ status_message: err })
    }
  }
}
