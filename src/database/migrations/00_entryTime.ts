import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('entry', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('login').notNullable()
    table.date('entryTime').notNullable()
  })
}
export async function down(knex: Knex) {
  return knex.schema.dropTable('entry')
}
