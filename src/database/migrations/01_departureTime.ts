import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('departure', table => {
    table.increments('id').notNullable()
    table.string('name').notNullable()
    table.string('login').notNullable()
    table.date('departureTime').notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('departure')
}
