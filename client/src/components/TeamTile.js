import React from "react"
import { Link } from "react-router-dom"

const TeamTile = props => {
  const { id, name, description } = props

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default TeamTile