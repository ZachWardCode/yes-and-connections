import express from "express";
import objection from "objection";
const { ValidationError } = objection;
import cleanUserInput from "../../../services/cleanUserInput.js";
import Show from "../../../models/Show.js";
import ShowSerializer from "../../../db/serializers/ShowSerializer.js";

const theaterShowsRouter = new express.Router({mergeParams: true})

theaterShowsRouter.post("/", async (req, res) => {
  const formInput = cleanUserInput(req.body)
  const { name, description, eventTiming } = formInput
  const userId = req.user.id
  const theaterId = req.params.theaterId

  try{
    const newShowData = await Show.query().insertAndFetch({ name, description, eventTiming, userId, theaterId})
    const serializedShow = await ShowSerializer.getSummary(newShowData)
    return res.status(201).json({ newShow: serializedShow })
  } catch(error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default theaterShowsRouter