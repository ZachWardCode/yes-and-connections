import express from "express"
import { Theater } from "../../../models/index.js"

import TheaterSerializer from "../../../db/serializers/TheaterSerializer.js"
import theaterShowsRouter from "./theaterShowsRouter.js"

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

theatersRouter.get("/:id", async (req, res) =>{
	const { id } = req.params
	try {
		const theater = await Theater.query().findById(id)
		if (theater) {
			const serializedTheater = await TheaterSerializer.getSummary(theater)
			return res.status(200).json({ theater: serializedTheater })
		}
	} catch (error) {
		return res.status(500).json({ errors: error })
	}
})

theatersRouter.use("/:theaterId/shows", theaterShowsRouter)

export default theatersRouter