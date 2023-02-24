import React, { useState, useEffect } from "react";

import { TheaterDetailsSliderData } from "./TheaterDetailsSliderData";
import TheaterDetailsImageSlider from "./TheaterDetailsImageSlider";

import TeamsList from "./TeamsList";

const TheaterDetailsPage = (props) => {
  const [theater, setTheater] = useState({
    name: "",
    location: "",
    tagline: "",
    description: "",
    teams: []
  })

  const theaterId = props.match.params.theaterId 

  const fetchTheater = async () => {
    try {
      const response = await fetch(`/api/v1/theaters/${theaterId}`)
      if(!response.ok){
				const errorMessage = `${response.status} (${response.statusText})`
				const error = new Error(errorMessage)
				throw(error)
			}
			const body = await response.json()
			setTheater(body.theater)
		} catch (error) {
			console.error(`Error in fetch: ${error.message}`)
		}
	}

	useEffect(() => {
		fetchTheater()
	}, [])

  return(
    <>
      <TheaterDetailsImageSlider slides={TheaterDetailsSliderData} />
      <br />
      <div className="grid-container text-center">
        <div id="theater-details-header">
          <h1>{theater.name}</h1>
          <h3>{theater.location}</h3>
          <h2>{theater.tagline}</h2>
          <p className="subtitle">{theater.description}</p>
        </div>
        <TeamsList
          key={theater.theaterId}
          theaterId={theaterId}
          teams={theater.teams}
        />
      </div>
		</>
	)
}

export default TheaterDetailsPage