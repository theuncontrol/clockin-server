import knex from 'knex'
import path from 'path'

const db = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '',
    database: 'clocking'
  },
  useNullAsDefault: true
})

export default db
