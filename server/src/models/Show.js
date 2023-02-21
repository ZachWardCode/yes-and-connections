const Model = require("./Model.js")

class Show extends Model {
  static get tableName() {
    return "shows"
  }

  static get relationMappings() {
    const { Theater, Team, TeamShowRegistration } = require("./index")

    return {
      theater: {
        relation: Model.BelongsToOneRelation,
        modelClass: Theater,
        join: {
          from: "show.theaterId",
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
      required: ["name", "date", "time"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        date: { type: ["string", "integer"] },
        time: { type: ["string", "integer"] }
      }
    }
  }
}

module.exports = Show;