/* eslint-disable no-console */
import { connection } from "../boot.js"
import UserSeeder from "./seeders/UserSeeder.js"
import TeamSeeder from "./seeders/TeamSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding teams")
    await TeamSeeder.seed()

    console.log("seeding users...")
    await UserSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder