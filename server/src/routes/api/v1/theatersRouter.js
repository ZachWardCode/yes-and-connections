import express from "express"
import { Theater, Show } from "../../../models/index.js"

import TheaterSerializer from "../../../db/serializers/TheaterSerializer.js"
import theaterShowsRouter from "./theaterShowsRouter.js"
import ShowSerializer from "../../../db/serializers/ShowSerializer.js"

const theatersRouter = new express.Router()

theatersRouter.get("/", async (req, res) => {
  try {
    const theaters = await Theater.query()

    const serializedTheaters = await Promise.all(theaters.map(async (theater) => {
      return await TheaterSerializer.getSummary(theater)
    }))

    return res.status(200).json({ theaters: serializedTheaters })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

theatersRouter.get("/:theaterId", async (req, res) =>{
	const theaterId = req.params.theaterId
	try {
		const theater = await Theater.query().findById(theaterId)
		if (theater) {
			const serializedTheater = await TheaterSerializer.getSummary(theater)
			return res.status(200).json({ theater: serializedTheater })
		}
	} catch (error) {
		return res.status(500).json({ errors: error })
	}
})

theatersRouter.get("/:theaterId/shows/:showId", async (req, res) => {
	const theaterId = req.params.theaterId
	const showId = req.params.showId

	try {
		const theater = await Theater.query().findById(theaterId)
		const show = await theater.$relatedQuery('shows').findById(showId)

		if (show) {
			const serializedShow = await ShowSerializer.getSummary(show)
			serializedShow.theater = theater
			return res.status(200).json({ show: serializedShow })
		}
	} catch (error) {
		return res.status(500).json({ errors: error })
	}
})

theatersRouter.delete("/:theaterId/shows/:showId", async (req, res) =>{
	const { theaterId, showId } = req.params
	try {
		const rowsDeleted = await Show.query().deleteById(showId)
		if (rowsDeleted === 1) {
			return res.status(204).json("Show was deleted successfully!")
		}
		return res.status(404).json({ errors: "Show not found" })
	} catch (error) {
		return res.status(500).json({ errors: error })
	}
})

theatersRouter.use("/:theaterId/shows", theaterShowsRouter)

export default theatersRouter