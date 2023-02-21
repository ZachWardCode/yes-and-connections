/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("shows", (table) => {
    table.bigIncrements("id")
    table.string("name").notNullable()
    table.text("description")
    table.string("date").notNullable()
    table.string("time").notNullable()
    table.bigInteger("theaterId")
      .unsigned().notNullable().index()
      .references("theaters.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("shows", (table) => {
    table.dropTableIfExists("shows")
  })
}
