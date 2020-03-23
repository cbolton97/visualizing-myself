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
        placeIds: ["biz", "work", "dorm", "hci", "nw", "proj", "seng"]
      }
    ]
  },
  {
    id: "everything",
    locationId: "hci",
    blocks: [
      {
        name: "School",
        time: "60",
        backgroundColor: "blue",
        color: "white",
        targetId: "school",
        placeIds: ["biz", "hci", "nw", "proj", "seng"]
      },
      {
        name: "Work",
        time: "20",
        backgroundColor: "green",
        color: "white",
        targetId: "work",
        placeIds: ["work"]
      },
      {
        name: "Personal",
        time: "20",
        backgroundColor: "red",
        color: "black",
        targetId: "personal",
        placeIds: ["dorm"]
      }
    ]
  }
];
