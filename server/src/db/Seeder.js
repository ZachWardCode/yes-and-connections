/* eslint-disable no-console */
import { connection } from "../boot.js"
import TheaterSeeder from "./seeders/TheaterSeeder.js"
import ShowSeeder from "./seeders/ShowSeeder.js"
import TeamSeeder from "./seeders/TeamSeeder.js"
import UserSeeder from "./seeders/UserSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding theaters")
    await TheaterSeeder.seed()

    console.log("seeding shows")
    await ShowSeeder.seed()

    console.log("seeding teams")
    await TeamSeeder.seed()

    console.log("seeding users...")
    await UserSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder