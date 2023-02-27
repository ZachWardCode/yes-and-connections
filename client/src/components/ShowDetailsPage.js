import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const ShowDetailsPage = (props) => {
  const [show, setShow] = useState({
    name: "",
    description: "",
    eventTiming: "",
    theaterId: "",
    userId: "",
    theater: [],
    teams: []
  })

  const [shouldRedirect, setShouldRedirect] = useState(false)

  const theaterId = props.match.params.theaterId
  const showId = props.match.params.showId 
  const currentUserId = props.currentUser?.id 

  const fetchShow = async () => {
		try {
			const response = await fetch(`/api/v1/theaters/${theaterId}/shows/${showId}`)

			if(!response.ok){
				const errorMessage = `${response.status} (${response.statusText})`
				const error = new Error(errorMessage)
				throw(error)
			}
			const body = await response.json()
			setShow(body.show)
		} catch (error) {
			console.error(`Error in fetch: ${error.message}`)
		}
	}

  const handleDelete = async () => {
		try {
			const response = await fetch(`/api/v1/theaters/${theaterId}/shows/${showId}`, {
				method: "DELETE",
				headers: new Headers({
					"Content-Type": "application/json"
				})
			})
			if (!response.ok) {
				const errorMessage = `${response.status} (${response.statusText})`
				const error = new Error(errorMessage)
				throw(error)
			}
			setShouldRedirect(true)
		} catch(err) {
			console.error(`Error in fetch: ${err.message}`)
		}
	}

	useEffect(() => {
		fetchShow()
	}, [])

	if (shouldRedirect) {
		return <Redirect push to={`/theaters/${theaterId}`} />
	}

	let showDeleteButton
	if (currentUserId === show.userId) {
		showDeleteButton = <>
			<input className="button button-delete" type="submit" value="Delete Show" onClick={handleDelete} />
		</>
	}

  const theater = show.theater
  const date = new Date(show.eventTiming)
  const dateString = date.toLocaleDateString("en-us", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
  const timeString = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })

  return (
    <>
    <div className="grid-container text-center">
        <div>
          <h1 className="theater-details-header">{theater.name}</h1>
          <h3 className="theater-details-location">{theater.location}</h3>
          <br />
          <br />
          <h2 className="theater-details-tagline">{theater.tagline}</h2>
          <br />
          <hr />
          <h2 className="theater-details-header-smaller">{show.name}</h2>
          <h5 className="theater-tile_header">at {timeString}</h5>
          <p className="theater-tile_body">on {dateString}</p>
        </div>
        <hr />
        <br />
        <p className="theater-details-description">{show.description}</p>
        {showDeleteButton}
        <br />
      </div>
		</>
  )
}

export default ShowDetailsPage