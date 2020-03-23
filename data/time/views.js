import { PLACES } from "../space/places.js";

export function calculateOpacity(time) {
  return Math.min(1, Math.ceil(parseInt(time, 10) * 1.9) / 100 + 0.3);
}

export var TIME_VIEWS = [
  {
    id: "all",
    locationId: "start",
    blocks: [
      {
        name: "All Time",
        time: "100",
        backgroundColor: "black",
        color: "white",
        targetId: "everything",
        placeIds: PLACES
      }
    ]
  },
  {
    id: "everything",
    locationId: "start",
    referringId: "all",
    blocks: [
      {
        name: "Academics",
        time: "30",
        backgroundColor: "#44A3C9",
        color: "white",
        targetId: "academics",
        placeIds: ["biz", "hci", "proj", "seng", "ethics"]
      },
      {
        name: "Work",
        time: "12",
        backgroundColor: "#97CC04",
        color: "white",
        targetId: "works",
        placeIds: ["work", "dorm", "nw", "biomespot"]
      },
      {
        name: "Personal",
        time: "58",
        backgroundColor: "#FF3366",
        color: "white",
        targetId: "personal",
        placeIds: [
          "dorm",
          "sbuxbook",
          "sbuxlife",
          "jj",
          "gal",
          "kpub",
          "saveon"
        ]
      }
    ]
  },
  {
    id: "personal",
    referringId: "everything",
    locationId: "start",
    blocks: [
      {
        name: "Shopping and Eating",
        time: "22",
        backgroundColor: "blue",
        color: "white",
        targetId: "eating",
        placeIds: ["sbuxbook", "sbuxlife", "jj", "saveon"]
      },
      {
        name: "Socializing",
        time: "14",
        backgroundColor: "green",
        color: "white",
        targetId: "socialzing",
        placeIds: ["dorm", "gal", "kpub"]
      },
      {
        name: "Sleeping",
        time: "48",
        backgroundColor: "red",
        color: "white",
        targetId: "sleepdorm",
        placeIds: ["dorm"]
      },
      {
        name: "Relaxing",
        time: "16",
        backgroundColor: "purple",
        color: "white",
        targetId: "relaxing",
        placeIds: ["dorm"]
      }
    ]
  },
  {
    id: "eating",
    referringId: "personal",
    locationId: "start",
    blocks: [
      {
        name: "Save on Foods",
        time: "14",
        backgroundColor: "blue",
        color: "white",
        targetId: "shopsaveon",
        placeIds: ["saveon"]
      },
      {
        name: "Coffee",
        time: "17",
        backgroundColor: "green",
        color: "white",
        targetId: "starbucks",
        placeIds: ["sbuxlife", "sbuxbook"]
      },
      {
        name: "Cooking",
        time: "49",
        backgroundColor: "blue",
        color: "white",
        targetId: "dorm",
        placeIds: ["dorm"]
      },
      {
        name: "Other",
        time: "20",
        backgroundColor: "red",
        color: "white",
        placeIds: []
      }
    ]
  },
  {
    id: "socializing",
    referringId: "personal",
    locationId: "start",
    blocks: [
      {
        name: "Significant Other",
        time: "50",
        backgroundColor: "blue",
        color: "white",
        targetId: "dorm",
        placeIds: ["dorm"]
      },
      {
        name: "Drinks with Friends",
        time: "27",
        backgroundColor: "green",
        color: "white",
        placeIds: ["kpup", "gal"]
      },
      {
        name: "Off-Campus Events",
        time: "13",
        backgroundColor: "blue",
        color: "white",
        placeIds: []
      },
      {
        name: "Other",
        time: "20",
        backgroundColor: "red",
        color: "white",
        placeIds: []
      }
    ]
  },
  {
    id: "relaxing",
    referringId: "personal",
    locationId: "dorm",
    blocks: [
      {
        name: "Streaming",
        time: "73",
        backgroundColor: "blue",
        color: "white",
        placeIds: ["dorm"]
      },
      {
        name: "Reading",
        time: "17",
        backgroundColor: "green",
        color: "white",
        placeIds: ["dorm"]
      },
      {
        name: "Other",
        time: "10",
        backgroundColor: "blue",
        color: "white",
        placeIds: []
      }
    ]
  },
  {
    id: "works",
    referringId: "everything",
    locationId: "workoverview",
    blocks: [
      {
        name: "Canaccord Learning Commons",
        time: "33",
        backgroundColor: "#97CC04",
        color: "white",
        targetId: "clc",
        placeIds: ["work"]
      },
      {
        name: "Biome Search",
        time: "29",
        backgroundColor: "#97CC04",
        targetId: "biome",
        color: "white",
        placeIds: ["biomespot"]
      },
      {
        name: "nwPlus Club",
        time: "38",
        backgroundColor: "#97CC04",
        targetId: "nwclub",
        color: "white",
        placeIds: ["nw"]
      }
    ]
  },
  {
    id: "academics",
    referringId: "everything",
    locationId: "academics",
    blocks: [
      {
        name: "Business Course",
        time: "18",
        backgroundColor: "#44A3C9",
        color: "white",
        targetId: "comm436",
        placeIds: ["biz"]
      },
      {
        name: "Computer Science Courses",
        time: "82",
        backgroundColor: "#44A3C9",
        color: "white",
        targetId: "cs",
        placeIds: ["hci", "seng", "proj", "ethics", "csstudy"]
      }
    ]
  },
  {
    id: "cs",
    referringId: "academics",
    locationId: "csarea",
    blocks: [
      {
        name: "Human Computer Interaction Design",
        time: "34",
        backgroundColor: "#44A3C9",
        color: "white",
        targetId: "cs344",
        placeIds: ["hci"]
      },
      {
        name: "Advanced Software Engineering",
        time: "15",
        backgroundColor: "#44A3C9",
        color: "white",
        targetId: "cs410",
        placeIds: ["seng"]
      },
      {
        name: "Software Project Management",
        time: "32",
        backgroundColor: "#44A3C9",
        color: "white",
        targetId: "cs319",
        placeIds: ["proj"]
      },
      {
        name: "Ethics in Computer Science",
        time: "19",
        backgroundColor: "#44A3C9",
        color: "white",
        targetId: "cs430",
        placeIds: ["csstudy"]
      }
    ]
  },
  {
    id: "cs344",
    referringId: "cs",
    locationId: "hci",
    blocks: [
      {
        name: "Class – CPSC344: Human Computer Interaction Design",
        time: "100",
        backgroundColor: "#44A3C9",
        color: "white",
        placeIds: ["hci"]
      }
    ]
  },
  {
    id: "cs410",
    referringId: "cs",
    locationId: "seng",
    blocks: [
      {
        name: "Class – CPSC410: Advanced Software Engineering",
        time: "100",
        backgroundColor: "#44A3C9",
        color: "white",
        placeIds: ["seng"]
      }
    ]
  },
  {
    id: "cs319",
    referringId: "cs",
    locationId: "proj",
    blocks: [
      {
        name: "Class – CPSC319: Software Project Management",
        time: "100",
        backgroundColor: "#44A3C9",
        color: "white",
        placeIds: ["proj"]
      }
    ]
  },
  {
    id: "comm436",
    referringId: "academics",
    locationId: "biz",
    blocks: [
      {
        name: "Class – COMM436: Business Process Design",
        time: "100",
        backgroundColor: "#44A3C9",
        color: "white",
        placeIds: ["biz"]
      }
    ]
  },
  {
    id: "cs430",
    referringId: "cs",
    locationId: "ethics",
    blocks: [
      {
        name: "Class – CPSC430: Ethics in Computer Science",
        time: "100",
        backgroundColor: "#44A3C9",
        color: "white",
        placeIds: ["csstudy"]
      }
    ]
  },
  {
    id: "sleepdorm",
    referringId: "personal",
    locationId: "dorm",
    blocks: [
      {
        name: "Sleeping",
        time: "100",
        backgroundColor: "green",
        color: "white",
        placeIds: ["dorm"]
      }
    ]
  },
  {
    id: "clc",
    referringId: "works",
    locationId: "work",
    blocks: [
      {
        name: "Canaccord Learning Commons",
        time: "100",
        backgroundColor: "#97CC04",
        color: "white",
        placeIds: ["work"],
        meta: {
          hours: 29,
          percent: 4
        }
      }
    ]
  },
  {
    id: "shopsaveon",
    referringId: "eating",
    locationId: "saveon",
    blocks: [
      {
        name: "Save-on-Foods",
        time: "100",
        backgroundColor: "green",
        color: "white",
        placeIds: ["saveon"]
      }
    ]
  },
  {
    id: "starbucks",
    referringId: "eating",
    locationId: "coffee",
    blocks: [
      {
        name: "Coffee",
        time: "100",
        backgroundColor: "green",
        color: "white",
        placeIds: ["jj", "sbuxlife", "sbuxbook"]
      }
    ]
  },
  {
    id: "nwclub",
    referringId: "works",
    locationId: "nwLoc",
    blocks: [
      {
        name: "nwPlus Club",
        time: "100",
        backgroundColor: "#97CC04",
        color: "white",
        placeIds: ["nw"]
      }
    ]
  },
  {
    id: "biome",
    referringId: "works",
    locationId: "biomeLoc",
    blocks: [
      {
        name: "Biome Search",
        time: "100",
        backgroundColor: "#97CC04",
        color: "white",
        placeIds: ["biomespot"]
      }
    ]
  }
];
