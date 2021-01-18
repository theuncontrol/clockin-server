import knex from 'knex'

export default {
  async up(knex) {
    return (
      knex.schema.createTable('users'),
      table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('login').notNullable()
      }
    )
  },
  async down(knex) {
    return knex.schema.dropTable('users')
  }
}
