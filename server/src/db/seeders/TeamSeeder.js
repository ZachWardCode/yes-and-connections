import { User, Team } from "../../models/index.js"

class TeamSeeder {
  static async seed() {
    const teamData = [
      {
        name: "Breakneck Jam",
        description: "Short Form"
      },
      {
        name: "Dead Man's Life",
        description: "The Harold"
      },
      {
        name: "Tremendous Dancing Party",
        description:"The Harold"
      },
      {
        name: "The Great Crunch",
        description: "Spokane"
      },
      {
        name: "Sub-Prime Party",
        description: "The Armando"
      },
      {
        name: "The Unwed Society",
        description: "Long Form Narrative"
      }
    ]

    for (const singleTeamData of teamData) {
      const currentTeam = await Team.query().findOne(singleTeamData)
      if (!currentTeam) {
        await Team.query().insert(singleTeamData)
      }
    }
  }
}

export default TeamSeeder