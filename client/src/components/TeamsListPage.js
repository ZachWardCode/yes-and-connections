import React, { useEffect, useState } from "react"

import TeamTile from "./TeamTile"

const TeamsListPage = props => {
  const [teams, setTeams] = useState([])

	const fetchTeams = async () => {
		try {
			const response = await fetch("/api/v1/teams")
			if (!response.ok) {
				const errorMessage = `${response.status} (${response.statusText})`
				const error = new Error(errorMessage)
				throw(error)
			}
			const teamData = await response.json()
			setTeams(teamData.teams)
		} catch(err) {
			console.error(`Error in fetch: ${err.message}`)
		}
	}

  useEffect(() => {
    fetchTeams()
  }, [])

  const teamTiles = teams.map(team => {
    return (
      <TeamTile
        key={team.id}
        id={team.id}
        name={team.name}
        description={team.description}
      />
    )
  })

  return (
    <div>
      <h1>Teams List Page</h1>
      {teamTiles}
    </div>
  )
}

export default TeamsListPage