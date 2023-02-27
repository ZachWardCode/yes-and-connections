import React from "react"

import ShowTile from "./ShowTile"

const ShowsList = (props) => {
  const { theaterId } = props
  const showTiles = props.shows.map(show => {
    return (
      <ShowTile
        key={show.id}
        {...show}
        showId={show.id}
        theaterId={theaterId}
      />
    )
  })

  let showShows = showTiles
  if (showTiles.length === 0) {
    showShows = <p className="message-no-entries">There aren't any shows for this theater yet.</p>
  }

  return (
    <>
      <h3 className="header_smaller">Our Upcoming Shows</h3>
      <div className="grid-x grid-margin-x text-center">
        {showShows}
      </div>
    </>
  )
}

export default ShowsList
