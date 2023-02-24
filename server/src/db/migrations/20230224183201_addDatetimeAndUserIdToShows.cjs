/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("shows", (table) => {
    table.datetime("eventTiming").notNullable()
    table.bigInteger("userId")
      .unsigned().notNullable().index()
      .references("users.id")
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("shows", (table) => {
    table.dropColumn("eventTiming")
    table.dropColumn("userId")
  })
}
