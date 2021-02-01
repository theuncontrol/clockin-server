import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('entry_relationship', table => {
    table.increments('id').notNullable()
    table.string('user_id').notNullable()
    table.string('user_entry').notNullable()
    table.string('user_departure').notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('entry_relationship')
}
