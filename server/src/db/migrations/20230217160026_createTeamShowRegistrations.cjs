/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("teamShowRegistrations", (table) => {
    table.bigIncrements("id")
    table.bigInteger("teamId")
      .unsigned().notNullable().index()
      .references("teams.id")
    table.bigInteger("showId")
      .unsigned().notNullable().index()
      .references("shows.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("teamShowRegistrations")
}
