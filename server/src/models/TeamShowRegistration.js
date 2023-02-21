const Model = require("./Model.js")

class TeamShowRegistration extends Model {
  static get tableName() {
    return "teamShowRegistrations"
  }

  static get relationMappings() {
    const { Team, Show } = require("./index")

    return {
      team: {
        relation: Model.BelongsToOneRelation,
        modelClass: Team,
        join: {
          from: "teamShowRegistrations.teamId",
          to: "teams.id"
        }
      },

      show: {
        relation: Model.BelongsToOneRelation,
        modelClass: Show,
        join: {
          from: "teamShowRegistrations.showId",
          to: "shows.id"
        }
      }
    }
  }
}

module.exports = TeamShowRegistration;