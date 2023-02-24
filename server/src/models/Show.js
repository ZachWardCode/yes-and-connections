const Model = require("./Model.js")

class Show extends Model {
  static get tableName() {
    return "shows"
  }

  static get relationMappings() {
    const { User, Theater, Team, TeamShowRegistration } = require("./index")

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "shows.userId",
          to: "users.id"
        }
      },

      theater: {
        relation: Model.BelongsToOneRelation,
        modelClass: Theater,
        join: {
          from: "shows.theaterId",
          to: "theaters.id"
        }
      },

      teams: {
        relation: Model.ManyToManyRelation,
        modelClass: Team,
        join: {
          from: "shows.id",
          through: {
            from: "teamShowRegistrations.showId",
            to: "teamShowRegistrations.teamId"
          },
          to: "teams.id"
        }
      },

      teamShowRegistrations: {
        relation: Model.HasManyRelation,
        modelClass: TeamShowRegistration,
        join: {
          from: "shows.id",
          to: "teamShowRegistrations.showId"
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "eventTiming"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        eventTiming: { type: "string" }
      }
    }
  }
}

module.exports = Show;