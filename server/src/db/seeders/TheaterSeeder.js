import { Theater } from "../../models/index.js"

class TheaterSeeder {
  static async seed() {
    const theaterData = [
      {
        name: "Launching Laughs Improv Theater",
        location: "77 Summer Street, Boston MA",
        tagline: "Come laugh so hard that you start coding!",
        description: "Looking for more fun and more light-heartedness in your life? Look no farther than Launching Laughs, the tech industries leading improv theater here for your entertainment! Live show every Friday and Saturday night."
      }
    ]

    for (const singleTheaterData of theaterData) {
      const currentTheater = await Theater.query().findOne(singleTheaterData)
      if (!currentTheater) {
        await Theater.query().insert(singleTheaterData)
      }
    }
  }
}

export default TheaterSeeder