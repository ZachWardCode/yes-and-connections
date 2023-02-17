import { User, Team } from "../../models/index.js"

class UserSeeder {
  static async seed() {
    const breakneckJamTeam = await Team.query().findOne({ name: "Breakneck Jam" })
    const deadMansLifeTeam = await Team.query().findOne({ name: "Dead Man's Life" })
    const tremendousDancingPartyTeam = await Team.query().findOne({ name: "Tremendous Dancing Party" })
    const theGreatCrunchTeam = await Team.query().findOne({ name: "The Great Crunch" })
    const subPrimePartyTeam = await Team.query().findOne({ name: "Sub-Prime Party" })
    const theUnwedSocietyTeam = await Team.query().findOne({ name: "The Unwed Society" })

    const userData = [
      {
        email: "jfranco@email.com",
        firstName: "Javier",
        lastName: "Franco",
        password: "jfranco",
        bio: "2 years experience",
        teamId: breakneckJamTeam.id
      },      
      {
        email: "lcaldwell@email.com",
        firstName: "Lucia",
        lastName: "Caldwell",
        password: "lcaldwell",
        bio: "5 years experience",
        teamId: breakneckJamTeam.id
      },      
      {
        email: "jmclaughlin@email.com",
        firstName: "Jayla",
        lastName: "McLaughlin",
        password: "jmclaughlin",
        bio: "1 year experience",
        teamId: breakneckJamTeam.id
      },      
      {
        email: "nfrye@email.com",
        firstName: "Natalia",
        lastName: "Frye",
        password: "nfrye",
        bio: "2 years experience",
        teamId: breakneckJamTeam.id
      },      
      {
        email: "bschaefer@email.com",
        firstName: "Beatrice",
        lastName: "Schaefer",
        password: "bschaefer",
        bio: "5 years experience",
        teamId: breakneckJamTeam.id
      },      
      {
        email: "cparsons@email.com",
        firstName: "Chaim",
        lastName: "Parsons",
        password: "cparsons",
        bio: "5 years experience",
        teamId: breakneckJamTeam.id
      },      
      {
        email: "asingh@email.com",
        firstName: "Alvaro",
        lastName: "Singh",
        password: "asingh",
        bio: "1 year experience",
        teamId: breakneckJamTeam.id
      },      
      {
        email: "dbond@email.com",
        firstName: "Deacon",
        lastName: "Bond",
        password: "dbond",
        bio: "2 years experience",
        teamId: breakneckJamTeam.id
      },      
      {
        email: "amays@email.com",
        firstName: "Aimee",
        lastName: "Mays",
        password: "amays",
        bio: "5 years experience",
        teamId: deadMansLifeTeam.id
      },      
      {
        email: "tmacdonald@email.com",
        firstName: "Trystan",
        lastName: "MacDonald",
        password: "tmacdonald",
        bio: "2 years experience",
        teamId: deadMansLifeTeam.id
      },      
      {
        email: "sduarte@email.com",
        firstName: "Shiloh",
        lastName: "Duarte",
        password: "sduarte",
        bio: "1 year experience",
        teamId: deadMansLifeTeam.id
      },      
      {
        email: "jfisher@email.com",
        firstName: "Jamie",
        lastName: "Fisher",
        password: "jfisher",
        bio: "1 year experience",
        teamId: deadMansLifeTeam.id
      },
      {
        email: "sacosta@email.com",
        firstName: "Samson",
        lastName: "Acosta",
        password: "sacosta",
        bio: "2 years experience",
        teamId: deadMansLifeTeam.id
      },
      {
        email: "jpatel@email.com",
        firstName: "Jocelyn",
        lastName: "Patel",
        password: "jpatel",
        bio: "2 years experience",
        teamId: deadMansLifeTeam.id
      },
      {
        email: "kvillanueva@email.com",
        firstName: "Katie",
        lastName: "Villanueva",
        password: "kvillanueva",
        bio: "1 year experience",
        teamId: deadMansLifeTeam.id
      },
      {
        email: "jstevens@email.com",
        firstName: "Judah",
        lastName: "Stevens",
        password: "jstevens",
        bio: "5 years experience",
        teamId: deadMansLifeTeam.id
      },
      {
        email: "jbradley@email.com",
        firstName: "Jamir",
        lastName: "Bradley",
        password: "jbradley",
        bio: "2 years experience",
        teamId: tremendousDancingPartyTeam.id
      },
      {
        email: "smoore@email.com",
        firstName: "Salvador",
        lastName: "Moore",
        password: "smoore",
        bio: "1 year experience",
        teamId: tremendousDancingPartyTeam.id
      },
      {
        email: "rcochran@email.com",
        firstName: "Ruben",
        lastName: "Cochran",
        password: "rcochran",
        bio: "7 years experience",
        teamId: tremendousDancingPartyTeam.id
      },
      {
        email: "mbeard@email.com",
        firstName: "Melvin",
        lastName: "Beard",
        password: "mbeard",
        bio: "2 years experience",
        teamId: tremendousDancingPartyTeam.id
      },
      {
        email: "sshepherd@email.com",
        firstName: "Summer",
        lastName: "Shepherd",
        password: "ssheperd",
        bio: "5 years experience",
        teamId: tremendousDancingPartyTeam.id
      },
      {
        email: "cfields@email.com",
        firstName: "Chace",
        lastName: "Fields",
        password: "cfields",
        bio: "1 year experience",
        teamId: tremendousDancingPartyTeam.id
      },
      {
        email: "esullivan@email.com",
        firstName: "Erik",
        lastName: "Sullivan",
        password: "esullivan",
        bio: "2 years experience",
        teamId: tremendousDancingPartyTeam.id
      },
      {
        email: "kmoreno",
        firstName: "Kenyon",
        lastName: "Moreno",
        password: "kmoreno",
        bio: "1 year experience",
        teamId: tremendousDancingPartyTeam.id
      },
      {
        email: "drichardson@email.com",
        firstName: "Duncan",
        lastName: "Richardson",
        password: "drichardson",
        bio: "5 years experience",
        teamId: theGreatCrunchTeam.id
      },
      {
        email: "xhowe@email.com",
        firstName: "Xander",
        lastName: "Howe",
        password: "xhowe",
        bio: "2 years experience",
        teamId: theGreatCrunchTeam.id
      },
      {
        email: "gschroeder@email.com",
        firstName: "Gretchen",
        lastName: "Schroeder",
        password: "gschroeder",
        bio: "1 year experience",
        teamId: theGreatCrunchTeam.id
      },
      {
        email: "asteele@email.com",
        firstName: "Ashley",
        lastName: "Steele",
        password: "asteele",
        bio: "7 years experience",
        teamId: theGreatCrunchTeam.id
      },
      {
        email: "ymalone@email.com",
        firstName: "Yaritza",
        lastName: "Malone",
        password: "ymalone",
        bio: "5 years experience",
        teamId: theGreatCrunchTeam.id
      },
      {
        email: "esloan@email.com",
        firstName: "Evelyn",
        lastName: "Sloane",
        password: "esloane",
        bio: "2 years experience",
        teamId: theGreatCrunchTeam.id
      },
      {
        email: "amoses@email.com",
        firstName: "Anthony",
        lastName: "Moses",
        password: "amoses",
        bio: "1 year experience",
        teamId: theGreatCrunchTeam.id
      },
      {
        email: "mwall@email.com",
        firstName: "Mckenzie",
        lastName: "Wall",
        password: "mwall",
        bio: "5 years experience",
        teamId: theGreatCrunchTeam.id
      },
      {
        email: "enewton@email.com",
        firstName: "Elisa",
        lastName: "Newton",
        password: "enewton",
        bio: "2 years experience",
        teamId: subPrimePartyTeam.id
      },
      {
        email: "rbridges@email.com",
        firstName: "Rubi",
        lastName: "Bridges",
        password: "rbridges",
        bio: "2 years experience",
        teamId: subPrimePartyTeam.id
      },
      {
        email: "klarsen@email.com",
        firstName: "Keyon",
        lastName: "Larson",
        password: "klarson",
        bio: "5 years experience",
        teamId: subPrimePartyTeam.id
      },
      {
        email: "tnash@email.com",
        firstName: "Tristen",
        lastName: "Nash",
        password: "tnash",
        bio: "1 year experience",
        teamId: subPrimePartyTeam.id
      },
      {
        email: "jvasquez@email.com",
        firstName: "Jaylynn",
        lastName: "Vasquez",
        password: "jvasquez",
        bio: "2 years experience",
        teamId: subPrimePartyTeam.id
      },
      {
        email: "kavery@email.com",
        firstName: "Kierra",
        lastName: "Avery",
        password: "kavery",
        bio: "1 year experience",
        teamId: subPrimePartyTeam.id
      },
      {
        email: "scortez@email.com",
        firstName: "Sophia",
        lastName: "Cortez",
        password: "scortez",
        bio: "2 years experience",
        teamId: subPrimePartyTeam.id
      },
      {
        email: "chendricks@email.com",
        firstName: "Carmen",
        lastName: "Hendricks",
        password: "chendricks",
        bio: "5 years experience",
        teamId: subPrimePartyTeam.id
      },
      {
        email: "nsummers@email.com",
        firstName: "Nico",
        lastName: "Summers",
        password: "nsummers",
        bio: "7 years experience",
        teamId: theUnwedSocietyTeam.id
      },
      {
        email: "gskinner@email.com",
        firstName: "Gisselle",
        lastName: "Skinner",
        password: "gskinner",
        bio: "2 years experience",
        teamId: theUnwedSocietyTeam.id
      },
      {
        email: "ssuarez@email.com",
        firstName: "Shania",
        lastName: "Suarez",
        password: "ssuarez",
        bio: "1 year experience",
        teamId: theUnwedSocietyTeam.id
      },
      {
        email: "myates@email.com",
        firstName: "Marlon",
        lastName: "Yates",
        password: "myates",
        bio: "5 years experience",
        teamId: theUnwedSocietyTeam.id
      },
      {
        email: "jhart@email.com",
        firstName: "Janet",
        lastName: "Hart",
        password: "jhart",
        bio: "7 years experience",
        teamId: theUnwedSocietyTeam.id
      },
      {
        email: "jwalker@email.com",
        firstName: "Juliette",
        lastName: "Walker",
        password: "jwalker",
        bio: "5 years experience",
        teamId: theUnwedSocietyTeam.id
      },
      {
        email: "lharrell@email.com",
        firstName: "Landin",
        lastName: "Harrell",
        password: "lharrell",
        bio: "2 years experience",
        teamId: theUnwedSocietyTeam.id
      },
      {
        email: "afay@email.com",
        firstName: "Alisa",
        lastName: "Fay",
        password: "afay",
        bio: "2 years experience",
        teamId: theUnwedSocietyTeam.id
      }
    ]

    for (const singleUserData of userData) {
      const currentUser = await User.query().findOne({ email: singleUserData.email })
      if (!currentUser) {
        await User.query().insert(singleUserData)
      }
    }
  }
}

export default UserSeeder