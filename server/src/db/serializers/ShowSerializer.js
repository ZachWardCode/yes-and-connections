import TeamSerializer from "./TeamSerializer.js"

class ShowSerializer {
  static async getSummary(show) {

    const allowedAttributes = ["id", "name", "description", "eventTiming", "theaterId", "userId"]

    let serializedShow = {}

    for (const attribute of allowedAttributes) {
      serializedShow[attribute] = show[attribute]
    }

    const teamsData = await show.$relatedQuery("teams")
    const teams = await Promise.all(teamsData.map( async (team) => {
      const serializedTeam = TeamSerializer.getSummary(team)

      return serializedTeam
    }))
    serializedShow.teams = teams

    return serializedShow
  }
}

export default ShowSerializer