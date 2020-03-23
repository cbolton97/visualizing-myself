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
        placeIds: [
          "biz",
          "hci",
          "proj",
          "seng",
          "ethics",
          "hcilab",
          "csstudy",
          "work"
        ]
      },
      {
        name: "Work",
        time: "12",
        backgroundColor: "#97CC04",
        color: "white",
        targetId: "works",
        placeIds: ["work", "dorm", "nw", "biomespot", "lifespace"]
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
          "saveon",
          "wreck"
        ]
      }
    ]
  },
  {
    id: "personal",
    referringId: "everything",
    locationId: "personal",
    blocks: [
      {
        name: "Shopping and Eating",
        time: "22",
        backgroundColor: "#FF3366",
        color: "white",
        targetId: "eating",
        placeIds: [
          "sbuxbook",
          "sbuxlife",
          "jj",
          "gal",
          "kpub",
          "saveon",
          "wreck"
        ]
      },
      {
        name: "Socializing",
        time: "14",
        backgroundColor: "#FF3366",
        color: "white",
        targetId: "socializing",
        placeIds: ["dorm", "gal", "kpub", "wreck"]
      },
      {
        name: "Sleeping",
        time: "48",
        backgroundColor: "#FF3366",
        color: "white",
        targetId: "sleepdorm",
        placeIds: ["dorm"]
      },
      {
        name: "Relaxing",
        time: "16",
        backgroundColor: "#FF3366",
        color: "white",
        targetId: "relaxing",
        placeIds: ["dorm"]
      }
    ]
  },
  {
    id: "eating",
    referringId: "personal",
    locationId: "personal",
    blocks: [
      {
        name: "Save on Foods",
        time: "14",
        backgroundColor: "#FF3366",
        color: "white",
        targetId: "shopsaveon",
        placeIds: ["saveon"]
      },
      {
        name: "Coffee",
        time: "17",
        backgroundColor: "#FF3366",
        color: "white",
        targetId: "starbucks",
        placeIds: ["sbuxlife", "sbuxbook", "jj"]
      },
      {
        name: "Cooking",
        time: "49",
        backgroundColor: "#FF3366",
        color: "white",
        targetId: "cooking",
        placeIds: ["dorm"]
      },
      {
        name: "Other",
        time: "20",
        backgroundColor: "grey",
        color: "black",
        placeIds: []
      }
    ]
  },
  {
    id: "socializing",
    referringId: "personal",
    locationId: "personal",
    blocks: [
      {
        name: "Significant Other",
        time: "50",
        backgroundColor: "#FF3366",
        color: "white",
        targetId: "so",
        placeIds: ["dorm", "wreck"]
      },
      {
        name: "Drinks with Friends",
        time: "27",
        backgroundColor: "#FF3366",
        color: "white",
        targetId: "friends",
        placeIds: ["kpub", "gal"]
      },
      {
        name: "Off-Campus Events",
        time: "13",
        backgroundColor: "grey",
        color: "black",
        placeIds: []
      },
      {
        name: "Other",
        time: "10",
        backgroundColor: "grey",
        color: "black",
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
        backgroundColor: "#FF3366",
        color: "white",
        targetId: "streaming",
        placeIds: ["dorm"]
      },
      {
        name: "Reading",
        time: "17",
        backgroundColor: "#FF3366",
        color: "white",
        targetId: "reading",
        placeIds: ["dorm"]
      },
      {
        name: "Other",
        time: "10",
        backgroundColor: "grey",
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
        placeIds: ["biomespot", "dorm"]
      },
      {
        name: "nwPlus Club",
        time: "38",
        backgroundColor: "#97CC04",
        targetId: "nwclub",
        color: "white",
        placeIds: ["nw", "lifespace"]
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
        placeIds: ["biz", "work"]
      },
      {
        name: "Computer Science Courses",
        time: "82",
        backgroundColor: "#44A3C9",
        color: "white",
        targetId: "cs",
        placeIds: ["hci", "seng", "proj", "ethics", "csstudy", "hcilab"]
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
        placeIds: ["hci", "hcilab"]
      },
      {
        name: "Advanced Software Engineering",
        time: "15",
        backgroundColor: "#44A3C9",
        color: "white",
        targetId: "cs410",
        placeIds: ["seng", "csstudy"]
      },
      {
        name: "Software Project Management",
        time: "32",
        backgroundColor: "#44A3C9",
        color: "white",
        targetId: "cs319",
        placeIds: ["proj", "hci", "csstudy"]
      },
      {
        name: "Ethics in Computer Science",
        time: "19",
        backgroundColor: "#44A3C9",
        color: "white",
        targetId: "cs430",
        placeIds: ["hci", "csstudy"]
      }
    ]
  },
  {
    id: "cs344",
    referringId: "cs",
    locationId: "hci",
    blocks: [
      {
        name: "CPSC344: Human Computer Interaction Design",
        time: "100",
        backgroundColor: "#44A3C9",
        color: "white",
        placeIds: ["hci", "hcilab"],
        meta: {
          desc: "classroom (left) and lab (right)",
          hours: 63,
          percent: 8.5
        }
      }
    ]
  },
  {
    id: "cs410",
    referringId: "cs",
    locationId: "seng",
    blocks: [
      {
        name: "CPSC410: Advanced Software Engineering",
        time: "100",
        backgroundColor: "#44A3C9",
        color: "white",
        placeIds: ["seng", "csstudy"],
        meta: {
          desc: "classroom (left) and study space (right)",
          hours: 27,
          percent: 3.6
        }
      }
    ]
  },
  {
    id: "cs319",
    referringId: "cs",
    locationId: "proj",
    blocks: [
      {
        name: "CPSC319: Software Project Management",
        time: "100",
        backgroundColor: "#44A3C9",
        color: "white",
        placeIds: ["proj", "hci", "csstudy"],
        meta: {
          desc: "study space (left), project room (middle), classroom (right)",
          hours: 58,
          percent: 7.8
        }
      }
    ]
  },
  {
    id: "comm436",
    referringId: "academics",
    locationId: "biz",
    blocks: [
      {
        name: "COMM436: Business Process Design",
        time: "100",
        backgroundColor: "#44A3C9",
        color: "white",
        placeIds: ["biz", "work"],
        meta: {
          desc: "classroom (left) and library (right)",
          hours: 40,
          percent: 5.4
        }
      }
    ]
  },
  {
    id: "cs430",
    referringId: "cs",
    locationId: "ethics",
    blocks: [
      {
        name: "CPSC430: Ethics in Computer Science",
        time: "100",
        backgroundColor: "#44A3C9",
        color: "white",
        placeIds: ["hci", "csstudy"],
        meta: {
          desc: "classroom (left) and study space (right)",
          hours: 38,
          percent: 5.1
        }
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
        backgroundColor: "#FF3366",
        color: "white",
        placeIds: ["dorm"],
        meta: { desc: "dorm", hours: 206, percent: 27.8 }
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
        meta: { desc: "library", hours: 29, percent: 3.9 }
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
        backgroundColor: "#FF3366",
        color: "white",
        placeIds: ["saveon"],
        meta: {
          desc: "grocery store",
          hours: 12,
          percent: 1.6
        }
      }
    ]
  },
  {
    id: "starbucks",
    referringId: "eating",
    locationId: "coffee",
    blocks: [
      {
        name: "Grabbing Coffee",
        time: "100",
        backgroundColor: "#FF3366",
        color: "white",
        placeIds: ["jj", "sbuxlife", "sbuxbook"],
        meta: {
          desc: "LIFE (left) and Bookstore (right) Starbucks, JJ Bean (middle)",
          hours: 16,
          percent: 2.2
        }
      }
    ]
  },
  {
    id: "nwclub",
    referringId: "works",
    locationId: "nwloc",
    blocks: [
      {
        name: "nwPlus Club",
        time: "100",
        backgroundColor: "#97CC04",
        color: "white",
        placeIds: ["nw", "lifespace"],
        meta: {
          desc: "event space (left) and club room (right)",
          hours: 34,
          percent: 4.7
        }
      }
    ]
  },
  {
    id: "biome",
    referringId: "works",
    locationId: "biomeloc",
    blocks: [
      {
        name: "Search Platform Development",
        time: "100",
        backgroundColor: "#97CC04",
        color: "white",
        placeIds: ["biomespot", "dorm"],
        meta: {
          desc: "project room (front) and dorm (back)",
          hours: 26,
          percent: 3.5
        }
      }
    ]
  },
  {
    id: "cooking",
    referringId: "eating",
    locationId: "dorm",
    blocks: [
      {
        name: "Cooking",
        time: "100",
        backgroundColor: "#FF3366",
        color: "white",
        placeIds: ["dorm"],
        meta: {
          desc: "dorm",
          hours: 46,
          percent: 3.5
        }
      }
    ]
  },
  {
    id: "so",
    referringId: "socializing",
    locationId: "soloc",
    blocks: [
      {
        name: "Time with S.O.",
        time: "100",
        backgroundColor: "#FF3366",
        color: "white",
        placeIds: ["dorm", "wreck"],
        meta: {
          desc: "Wreck beach (front) and dorm (back)",
          hours: 46,
          percent: 3.5
        }
      }
    ]
  },
  {
    id: "reading",
    referringId: "relaxing",
    locationId: "dorm",
    blocks: [
      {
        name: "Reading",
        time: "100",
        backgroundColor: "#FF3366",
        color: "white",
        placeIds: ["dorm"],
        meta: {
          desc: "dorm",
          hours: 12,
          percent: 1.6
        }
      }
    ]
  },
  {
    id: "streaming",
    referringId: "relaxing",
    locationId: "dorm",
    blocks: [
      {
        name: "Streaming TV/Movies",
        time: "100",
        backgroundColor: "#FF3366",
        color: "white",
        placeIds: ["dorm"],

        meta: {
          desc: "dorm",
          hours: 51,
          percent: 6.9
        }
      }
    ]
  },
  {
    id: "friends",
    referringId: "socializing",
    locationId: "friendloc",
    blocks: [
      {
        name: "Drinks with Friends",
        time: "100",
        backgroundColor: "#FF3366",
        color: "white",
        placeIds: ["kpub", "gal"],
        meta: {
          desc: "Koerner Pub (front) and The Gallery (back)",
          hours: 16,
          percent: 2.1
        }
      }
    ]
  }
];
