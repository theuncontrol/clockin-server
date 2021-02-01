import path from 'path'

module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '',
    database: 'clocking'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true
}
