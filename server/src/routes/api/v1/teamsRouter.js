import express from "express";

import { Team } from "../../../models/index.js";
import TeamSerializer from "../../../db/serializers/TeamSerializer.js";

const teamsRouter = new express.Router()

teamsRouter.get("/", async (req, res) => {
  try {
    const teams = await Team.query()
    
    const serializedTeams = await Promise.all(
      teams.map(async (team) => {
        return await TeamSerializer.getSummary(team)
      })
    )
    
    return res.status(200).json({ teams: serializedTeams })
  } catch (error) {
    res.status(500).json({ errors: error})
  }
})

export default teamsRouter