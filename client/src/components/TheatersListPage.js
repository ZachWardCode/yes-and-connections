import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { TheatersListSliderData } from "./TheatersListSliderData.js"
import TheatersListImageSlider from "./TheatersListImageSlider.js"

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
    <>
      <TheatersListImageSlider slides={TheatersListSliderData} />
      <div className="grid-container text-center">
        <div>
          <h1 className="header">Yes And Connections</h1>
          <p className="subheader">A Personalized Platform For Improv Theater Communities</p>
        </div>
        <hr></hr>
        <div>
          <h4 className="header_smaller">What is Yes and Connections?</h4>
          <div className="subtitle">
            <p>Yes And Connections is a communication platform for improv theater's performers and staff to communicate, coordinate, and keep in touch. Improv is about fun and the community that comes with it is often the best part. In this busy day age Yes And Connections offers your theaters community a convenient way to stay connected without all the hassle of juggling group texts or forever nested email chains that no one reads or sees.</p> 
            <br />
            <p>Bonding and connection plays a huge role in improv and Yes And Connections makes sure your cast has an easy way to coordinate after show hangouts and makes it possible for your cast and staff to stay in touch with each other, as well as up-to-date with what's happening at your theater. This leads a stronger community, happier performers, and, wouldn't you know it, better shows!</p> 
            <br />
            <p>If you are the owner of a theater or a performer at one and the theater isn't using this site, register now! Your performers will thank you and your community will become even closer. We all know that performers come for the laugh, but in the end we stay for the people.</p>
          </div>
        </div>
        <br />
        <hr></hr>
        <br />
        <div className="grid-x grid-margin-x text-center">
          {theaterTiles}
        </div>
      </div>
    </>
  )
}

export default TheatersListPage