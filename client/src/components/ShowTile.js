import React from "react"
import { Link } from "react-router-dom"

const ShowTile = props => {
  const { name, eventTiming } = props

  const date = new Date(eventTiming)
  const dateString = date.toLocaleDateString("en-us", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
  const timeString = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })

  return (
    <div className="callout cell large-4 medium-6 small-12 text-center theater-tile">
      <h5 className="theater-tile_header">{name} at {timeString}</h5>
      <p className="theater-tile_body">{dateString}</p>
    </div>
  )
}

export default ShowTile