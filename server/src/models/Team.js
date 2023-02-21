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
    const { User, Theater, Show, TeamShowRegistration } = require("./index")

    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "teams.id",
          to: "users.teamId"
        }
      },

      theater: {
        relation: Model.BelongsToOneRelation,
        modelClass: Theater,
        join: {
          from: "teams.theaterId",
          to: "theaters.id"
        }
      },

      shows: {
        relation: Model.ManyToManyRelation,
        modelClass: Show,
        join: {
          from: "teams.id",
          through: {
            from: "teamShowRegistrations.teamId",
            to: "teamShowRegistrations.showId"
          },
          to: "shows.id"
        }
      },

      teamShowRegistrations: {
        relation: Model.HasManyRelation,
        modelClass: TeamShowRegistration,
        join: {
          from: "teams.id",
          to: "teamShowRegistrations.teamId"
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