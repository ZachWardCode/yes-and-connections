import UserSerializer from "./UserSerializer.js"

class TeamSerializer {
  static async getSummary(team) {

    const allowedAttributes = ["id", "name", "description"]

    let serializedTeam = {}

    for (const attribute of allowedAttributes) {
      serializedTeam[attribute] = team[attribute]
    }

    const performersData = await team.$relatedQuery("users")
    const performers = await Promise.all(performersData.map( async (performer) => {
      const serializedPerformer = UserSerializer.getSummary(performer)

      return serializedPerformer
    }))
    serializedTeam.performers = performers

    return serializedTeam
  }
}

export default TeamSerializer