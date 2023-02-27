import ShowSerializer from "./ShowSerializer.js"
import TeamSerializer from "./TeamSerializer.js"

class TheaterSerializer {
  static async getSummary(theater) {

    const allowedAttributes = ["id", "name", "location", "tagline", "description"]

    let serializedTheater = {}

    for (const attribute of allowedAttributes) {
      serializedTheater[attribute] = theater[attribute]
    }

    const showsData = await theater.$relatedQuery("shows")
    const shows = await Promise.all(showsData.map( async (show) => {
      const serializedShow = ShowSerializer.getSummary(show)

      return serializedShow
    }))

    serializedTheater.shows = shows

    const teamsData = await theater.$relatedQuery("teams")
    const teams = await Promise.all(teamsData.map( async (team) => {
      const serializedTeam = TeamSerializer.getSummary(team)

      return serializedTeam
    }))

    serializedTheater.teams = teams

    return serializedTheater
  }
}

export default TheaterSerializer