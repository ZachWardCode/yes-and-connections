import React from "react"
import { Link } from "react-router-dom"

const ShowTile = props => {
  const { name, eventTiming } = props


  return (
    <div className="callout cell large-4 medium-6 small-12 text-center theater-tile">
      <h5 className="theater-tile_header">{name}</h5>
      <p className="theater-tile_body">{eventTiming}</p>
    </div>
  )
}

export default ShowTile