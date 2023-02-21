const Model = require("./Model.js")

const uniqueFactory = require("objection-unique")

const unique = uniqueFactory({
  fields: ["name'"]
})

class Theater extends unique(Model) {
  static get tableName() {
    return "theaters"
  }

  static get relationMappings() {
    const { Show, Team } = require("./index")

    return {
      shows: {
        relation: Model.HasManyRelation,
        modelClass: Show,
        join: {
          from: "theaters.id",
          to: "shows.theaterId"
        }
      },

      teams: {
        relation: Model.HasManyRelation,
        modelClass: Team,
        join: {
          from: "theaters.id",
          to: "teams.theaterId"
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "location"],
      properties: {
        name: { type: "string" },
        location: { type: "string" },
        tagline: { type: "string" },
        description: { type: "string" }
      }
    }
  }
}

module.exports = Theater;