import { Show, Theater } from "../../models/index.js"

class ShowSeeder {
  static async seed() {
    const launchNLaughs = await Theater.query().findOne({ name: "Launching Laughs Improv Theater" })

    const showData = [
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        date: "March 3",
        time: "7:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        date: "March 10",
        time: "7:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        date: "March 17",
        time: "7:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        date: "March 24",
        time: "7:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        date: "March 31",
        time: "7:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        date: "April 7",
        time: "7:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        date: "April 21",
        time: "7:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        date: "April 28",
        time: "7:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        date: "May 5",
        time: "7:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        date: "May 12",
        time: "7:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        date: "May 19",
        time: "7:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Kickoff",
        description: "Fridays are for fun, come check out our Friday Night Kickoff where one of our longform teams performs a dazzling 45 minute narrative that'll leave you laughing out of your seats. Followed by a jam!",
        date: "May 26",
        time: "7:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Launch",
        description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
        date: "March 4",
        time: "9:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Launch",
        description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
        date: "March 10",
        time: "9:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Launch",
        description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
        date: "March 17",
        time: "9:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Launch",
        description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
        date: "March 24",
        time: "9:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Launch",
        description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
        date: "March 31",
        time: "9:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Launch",
        description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
        date: "April 7",
        time: "9:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Launch",
        description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
        date: "April 14",
        time: "9:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Launch",
        description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
        date: "April 21",
        time: "9:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Launch",
        description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
        date: "April 28",
        time: "9:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Launch",
        description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
        date: "May 5",
        time: "9:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Launch",
        description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
        date: "May 12",
        time: "9:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Launch",
        description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
        date: "May 19",
        time: "9:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Friday Night Launch",
        description: "Late Fridays nights are for taking your mind off the week, come launch your worries into outer space at our Friday Night Launch where two of our teams will give you the hardest laughs of your week that'll leave your stress behind! Bar open before, during, and after the show!",
        date: "May 26",
        time: "9:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Saturday Night Extraterrestrial Spectatular",
        description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
        date: "March 4",
        time: "8:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Saturday Night Extraterrestrial Spectatular",
        description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
        date: "March 11",
        time: "8:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Saturday Night Extraterrestrial Spectatular",
        description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
        date: "March 18",
        time: "8:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Saturday Night Extraterrestrial Spectatular",
        description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
        date: "March 25",
        time: "8:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Saturday Night Extraterrestrial Spectatular",
        description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
        date: "April 1",
        time: "8:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Saturday Night Extraterrestrial Spectatular",
        description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
        date: "April 8",
        time: "8:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Saturday Night Extraterrestrial Spectatular",
        description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
        date: "April 15",
        time: "8:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Saturday Night Extraterrestrial Spectatular",
        description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
        date: "April 22",
        time: "8:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Saturday Night Extraterrestrial Spectatular",
        description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
        date: "April 29",
        time: "8:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Saturday Night Extraterrestrial Spectatular",
        description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
        date: "May 6",
        time: "8:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Saturday Night Extraterrestrial Spectatular",
        description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
        date: "May 13",
        time: "8:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Saturday Night Extraterrestrial Spectatular",
        description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
        date: "May 20",
        time: "8:00pm",
        theaterId: launchNLaughs.id
      },
      {
        name: "Saturday Night Extraterrestrial Spectatular",
        description: "Saturday nights are reserved at Launching Laughs for the most out of this world show in Boston. Come fly into a space where time stops and nothing but fun exists. Three teams will blow you away with their nonstop shenanigans! Bar open before, during, and after the show!",
        date: "May 27",
        time: "8:00pm",
        theaterId: launchNLaughs.id
      }
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