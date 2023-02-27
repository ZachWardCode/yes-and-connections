import React, { useEffect, useState } from "react"

import ShowTile from "./ShowTile"

const ShowsList = props => {
  const showTiles = props.shows.map(show => {
    return (
      <ShowTile
        key={show.id}
        {...show}
      />
    )
  })

  let showShows = showTiles
  if (showTiles.length === 0) {
    showShows = <p className="message-no-entries">There aren't any shows for this theater yet.</p>
  }

  return (
    <>
      <h3 className="header_smaller">Improv Shows</h3>
      <div className="grid-x grid-margin-x text-center">
        {showShows}
      </div>
    </>
  )
}

export default ShowsList
