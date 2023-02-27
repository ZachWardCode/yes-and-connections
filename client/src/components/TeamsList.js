import React from "react"

import TeamTile from "./TeamTile"

const TeamsList = props => {
  const teamTiles = props.teams.map(team => {
    return (
      <TeamTile
        key={team.id}
        {...team}
      />
    )
  })

  let showTeams = teamTiles
  if (teamTiles.length === 0) {
    showTeams = <p className="message-no-entries">There aren't any teams for this theater yet.</p>
  }

  return (
    <>
      <h3 className="header_smaller">Our Improv Teams</h3>
      <div className="grid-x grid-margin-x text-center">
        {showTeams}
      </div>
    </>
  )
}

export default TeamsList

