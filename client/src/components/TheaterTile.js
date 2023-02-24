import React from "react"
import { Link } from "react-router-dom"

const TheaterTile = props => {
  const { id, name, location, tagline, description } = props

  return (
    <div className="callout cell large-4 medium-6 small-12 text-center theater-tile">
      <h3 className="theater-tile_header">{name}</h3>
      <h4 className="theater-tile_body">{location}</h4>
      
      <hr />
      
      <h5 className="theater-tile_body tagline">{tagline}</h5>
    </div>
  )
}

export default TheaterTile