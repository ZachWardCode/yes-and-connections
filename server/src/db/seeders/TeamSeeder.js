import { Team, Theater } from "../../models/index.js"

class TeamSeeder {
  static async seed() {
    const launchNLaughs = await Theater.query().findOne({ name: "Launching Laughs Improv Theater" })

    const teamData = [
      {
        name: "Breakneck Jam",
        description: "Short Form",
        theaterId: launchNLaughs.id
      },
      {
        name: "Dead Man's Life",
        description: "The Harold",
        theaterId: launchNLaughs.id
      },
      {
        name: "Tremendous Dancing Party",
        description:"The Harold",
        theaterId: launchNLaughs.id
      },
      {
        name: "The Great Crunch",
        description: "Spokane",
        theaterId: launchNLaughs.id
      },
      {
        name: "Sub-Prime Party",
        description: "The Armando",
        theaterId: launchNLaughs.id
      },
      {
        name: "The Unwed Society",
        description: "Long Form Narrative",
        theaterId: launchNLaughs.id
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