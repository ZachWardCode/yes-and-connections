import React, { useEffect, useState } from "react"

import TheaterTile from "./TheaterTile.js"

const TheatersListPage = props => {
  const [theaters, setTheaters] = useState([])

  const fetchTheaters = async () => {
    try {
      const response = await fetch("/api/v1/theaters")
      if (!response.ok) {
				const errorMessage = `${response.status} (${response.statusText})`
				const error = new Error(errorMessage)
				throw(error)
			}
			const theaterData = await response.json()
			setTheaters(theaterData.theaters)
		} catch(err) {
			console.error(`Error in fetch: ${err.message}`)
		}
	}

  useEffect(() => {
    fetchTheaters()
  }, [])

  const theaterTiles = theaters.map(theater => {
    return (
      <TheaterTile
        key={theater.id}
        id={theater.id}
        name={theater.name}
        location={theater.location}
        tagline={theater.tagline}
        description={theater.description}
      />
    )
  })

  return (
    <div>
      <h2>Improv is fun! Find a theater! Find a show!</h2>
      {theaterTiles}
    </div>
  )
}

export default TheatersListPage