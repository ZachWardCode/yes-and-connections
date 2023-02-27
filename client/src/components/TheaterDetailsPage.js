import React, { useState, useEffect } from "react";

import { TheaterDetailsSliderData } from "./TheaterDetailsSliderData";
import TheaterDetailsImageSlider from "./TheaterDetailsImageSlider";

import TeamsList from "./TeamsList";
import ShowsList from "./ShowsList";
import NewShowForm from "./NewShowForm";

const TheaterDetailsPage = (props) => {
  const [theater, setTheater] = useState({
    name: "",
    location: "",
    tagline: "",
    description: "",
    shows: [],
    teams: []
  })

  const theaterId = props.match.params.theaterId 
  const currentUserId = props.currentUser?.id

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

  let newShowForm = ""
	if (props.currentUser !== null) {
		newShowForm = <NewShowForm theaterId={theaterId} theater={theater} setTheater={setTheater} />
	}

  return(
    <>
      <TheaterDetailsImageSlider slides={TheaterDetailsSliderData} />
      <br />
      <div className="grid-container text-center">
        <div>
          <h1 className="theater-details-header">{theater.name}</h1>
          <h3 className="theater-details-location">{theater.location}</h3>
          <br />
          <br />
          <h2 className="theater-details-tagline">{theater.tagline}</h2>
          <br />
          <hr />
          <p className="theater-details-description">{theater.description}</p>
        </div>
        <hr />
        <br />
        <br />
        <ShowsList
          key={theater.theaterId}
          theaterId={theaterId}
          shows={theater.shows}
        />
        <TeamsList
          key={theater.theaterId}
          theaterId={theaterId}
          teams={theater.teams}
        />
        {newShowForm}
      </div>
		</>
	)
}

export default TheaterDetailsPage