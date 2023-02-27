/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("shows", (table) => {
    table.dropColumn("date")
    table.dropColumn("time")
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("shows", (table) => {
    table.string("date")
    table.string("time")
  })
}
