/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("teams", (table) => {
    table.bigInteger("theaterId")
      .unsigned().notNullable().index()
      .references("theaters.id")
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("teams", (table) => {
    table.dropColumn("theaterId")
  })
}
