import { User, Show, Theater } from "../../models/index.js"

class ShowSeeder {
  static async seed() {
    const launchNLaughs = await Theater.query().findOne({ name: "Launching Laughs Improv Theater" })

    const user1 = await User.query().findOne({ email: "jfranco@email.com" })

    const showData = [
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        eventTiming: "2023-03-01 19:30:00",
        userId: user1.id,
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        eventTiming: "2023-03-02 19:30:00",
        userId: user1.id,
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        eventTiming: "2023-03-03 19:30:00",
        userId: user1.id,
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        eventTiming: "2023-03-04 19:30:00",
        userId: user1.id,
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        eventTiming: "2023-03-05 19:30:00",
        userId: user1.id,
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        eventTiming: "2023-03-06 19:30:00",
        userId: user1.id,
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        eventTiming: "2023-03-07 19:30:00",
        userId: user1.id,
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        date: "April 28",
        eventTiming: "2023-03-08 19:30:00",
        userId: user1.id,
        theaterId: launchNLaughs.id
      },
      // {
      //   name: "Friday Night Kickoff",
      //   description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Kickoff",
      //   description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Kickoff",
      //   description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Kickoff",
      //   description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Launch",
      //   description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Launch",
      //   description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Launch",
      //   description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Launch",
      //   description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Launch",
      //   description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Launch",
      //   description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Launch",
      //   description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Launch",
      //   description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Launch",
      //   description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Launch",
      //   description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Launch",
      //   description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Launch",
      //   description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Friday Night Launch",
      //   description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Saturday Night Extraterrestrial Spectatular",
      //   description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Saturday Night Extraterrestrial Spectatular",
      //   description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Saturday Night Extraterrestrial Spectatular",
      //   description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Saturday Night Extraterrestrial Spectatular",
      //   description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Saturday Night Extraterrestrial Spectatular",
      //   description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Saturday Night Extraterrestrial Spectatular",
      //   description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Saturday Night Extraterrestrial Spectatular",
      //   description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Saturday Night Extraterrestrial Spectatular",
      //   description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Saturday Night Extraterrestrial Spectatular",
      //   description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Saturday Night Extraterrestrial Spectatular",
      //   description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Saturday Night Extraterrestrial Spectatular",
      //   description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Saturday Night Extraterrestrial Spectatular",
      //   description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // },
      // {
      //   name: "Saturday Night Extraterrestrial Spectatular",
      //   description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
      //   eventTiming: "2023-03-01 19:30:00",
      //   userId: user1.id,
      //   theaterId: launchNLaughs.id
      // }
    ]

    for (const singleShowData of showData) {
      const currentShow = await Show.query().findOne(singleShowData)
      if (!currentShow) {
        await Show.query().insert(singleShowData)
      }
    }
  }
}

export default ShowSeeder