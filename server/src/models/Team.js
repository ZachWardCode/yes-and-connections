const Model = require("./Model.js")

const uniqueFactory = require("objection-unique")

const unique = uniqueFactory({
  fields: ["name'"]
})

class Team extends unique(Model) {
  static get tableName() {
    return "teams"
  }

  static get relationMappings() {
    const { User } = require("./index")

    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "teams.id",
          to: "users.teamId"
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
        description: { type: "string" }
      }
    }
  }
}

module.exports = Team;