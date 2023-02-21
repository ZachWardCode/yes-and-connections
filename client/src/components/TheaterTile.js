import React from "react"
import { Link } from "react-router-dom"

const TheaterTile = props => {
  const { id, name, location, tagline, description } = props

  return (
    <div>
      <h3>{name}</h3>
      <h4>{location}</h4>
      <h5>{tagline}</h5>
      <p>{description}</p>
    </div>
  )
}

export default TheaterTile