import React, { useState } from "react"

import ErrorList from "./layout/ErrorList"
import translateServerErrors from "../services/translateServerErrors"

const NewShowForm = (props) => {
  const [newShow, setNewShow] = useState({
    name: "",
    description: "",
    eventTiming: ""
  })

  const [errors, setErrors] = useState([])

  const setTheater = props.setTheater
  const theater = props.Theater

  const addNewShow = async () => {
    const theaterId = props.theaterId

    try {
      const response = await fetch(`/api/v1/theaters/${theaterId}/shows`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newShow)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }  
      } else {
        const body = await response.json()
        const shows = [...theater.shows, body.newShow]
        setTheater({
          ...theater,
          shows: shows
        })
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.errorMessage}`)
    }
  }

  const handleInputChange = event => {
    setNewShow({
      ...newShow,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewShow()
    clearForm()
  }

  const clearForm = () => {
    setNewShow({
      name: "",
      description: "",
      eventTiming: ""
    })
  }

  return (
    <div className="form-section_show">
      <hr />
      <h4 className="text-center form_header">Add a Show!</h4>
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit} className="callout form-section_box">
        <label>
          Name of Show
          <textarea 
            id="name" 
            name="name" 
            onChange={handleInputChange} 
            value={newShow.name} 
          />
        </label>
        <label>
          Show Description
          <textarea 
            id="description" 
            name="description" 
            onChange={handleInputChange} 
            value={newShow.description} 
          />
        </label>
        <label>Enter a date and time for this show
          <input
            id="eventTiming"
            type="datetime-local"
            name="eventTiming"
            value={newShow.eventTiming}
            onChange={handleInputChange} 
          />
        </label>
        <div className="button-group align-center">
					<input className="button" type="submit" value="Submit New Show" />
				</div>
      </form>
    </div>
  )
}

export default NewShowForm