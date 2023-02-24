import { Theater } from "../../models/index.js"

class TheaterSeeder {
  static async seed() {
    const theaterData = [
      {
        name: "Launching Laughs Improv Theater",
        location: "77 Summer Street, Boston, MA",
        tagline: "Come laugh so hard that you start coding!",
        description: "Looking for more fun and more light-heartedness in your life? Look no farther than Launching Laughs, the tech industries leading improv theater here for your entertainment! Live show every Friday and Saturday night."
      },
      {
        name: "Improv Emporium",
        location: "34 Winter Road, Quincy, MA",
        tagline: "Quincy's home good times and laughs!",
        description: "Looking for more fun and more light-heartedness in your life? Look no farther than Launching Laughs, the tech industries leading improv theater here for your entertainment! Live show every Friday and Saturday night."
      },
      {
        name: "Boston Loves Improv Comedy Theater",
        location: "22 Spring Drive, Boston, MA",
        tagline: "The most fun you'll have all week!",
        description: "Looking for more fun and more light-heartedness in your life? Look no farther than Launching Laughs, the tech industries leading improv theater here for your entertainment! Live show every Friday and Saturday night."
      },
      {
        name: "Comedy Connection Improv Theater",
        location: "125 Fall Avenue, Boston, MA",
        tagline: "YES AND bring a friend!",
        description: "Looking for more fun and more light-heartedness in your life? Look no farther than Launching Laughs, the tech industries leading improv theater here for your entertainment! Live show every Friday and Saturday night."
      },
      {
        name: "Sit Down, Stand Up, Laugh Theater",
        location: "92 Seasonal Way, Wilkinson, RI",
        tagline: "Everyone is welcome to come let loose!",
        description: "Looking for more fun and more light-heartedness in your life? Look no farther than Launching Laughs, the tech industries leading improv theater here for your entertainment! Live show every Friday and Saturday night."
      },
      {
        name: "Elevated Comedy",
        location: "10th Floor, 3 Weather Boulevard, Wilkinson, RI",
        tagline: "We take comedy to all new heights!",
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