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
      <h1>Yes And Connections</h1>
      <h3>The Best Platform for Improv Performers to Stay Connected</h3>
      <h4>What is Yes and Connections?</h4>
      <p>Yes And Connections is a platform made for improv performers, by an improv performer. Performing at an improv theaters is a wonderful experience and the community and friends it brings you is often the best part! This site is the best place to stay connected with your fellow cast members at the theater you perform at!</p> 
      <p>Bonding and connection plays a huge role in improv and Yes And Connections makes sure your cast stays in touch with each other as well as up-to-date with what's happening at your theater. This leads a stronger community, happier performers, and, wouldn't you know it, better shows!</p> 
      <p>If you are the owner of a theater that isn't using this site, register now! Your performers will thank you and your community will become even closer. We all know that performers come for the laugh, but in the end we stay for the people.</p>
      <p>Yes And Connections breaks down the barriers of mismatching social media use and get rid of the difficulty of performers needing to maintain handfuls of group chats just to stay in the loop and makes plans with their friends for showtime.</p> 
      <p>If you're a performer at a theater that is registered on this site, find your theater below and sign in or sign up if you haven't and get connected to your community! If you're a performer at a theater that hasn't registered, reach out to management and let them know you've found Yes And Connections and the theater needs to register to make your life and theirs a whole lot easier!</p>
      {theaterTiles}
    </div>
  )
}

export default TheatersListPage