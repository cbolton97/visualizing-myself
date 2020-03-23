export var FLIGHT_DURATION = 6000;
export var START_PROPS = {
  center: [-123.25427277450254, 49.26554818513219],
  zoom: 15.5,
  pitch: 0,
  bearing: 0
};

export var LOCATIONS = {
  start: {
    duration: FLIGHT_DURATION,
    ...START_PROPS
  },
  dorm: {
    duration: FLIGHT_DURATION,
    center: [-123.255922, 49.264355],
    zoom: 18,
    pitch: 100,
    bearing: -50.6
  },
  work: {
    duration: FLIGHT_DURATION,
    center: [-123.25427277450254, 49.26554818513219],
    bearing: -100,
    zoom: 17.5,
    pitch: 100
  },
  csarea: {
    duration: FLIGHT_DURATION,
    center: [-123.24833347805694, 49.26123705145426],
    bearing: 140,
    zoom: 17.6,
    pitch: 100
  },
  hci: {
    duration: FLIGHT_DURATION,
    center: [-123.24802304607663, 49.2614084501968],
    bearing: 160,
    zoom: 18,
    pitch: 100
  },
  ethics: {
    duration: FLIGHT_DURATION,
    center: [-123.24802304607663, 49.2614084501968],
    bearing: 200,
    zoom: 18,
    pitch: 100
  },
  seng: {
    duration: FLIGHT_DURATION,
    center: [-123.24802304607663, 49.2614084501968],
    bearing: 150,
    zoom: 18,
    pitch: 15
  },
  proj: {
    duration: FLIGHT_DURATION,
    center: [-123.24833347805694, 49.26123705145426],
    bearing: 350,
    zoom: 18,
    pitch: 100
  },
  biz: {
    duration: FLIGHT_DURATION,
    center: [-123.25453973015568, 49.26575229715229],
    bearing: 100,
    zoom: 18,
    pitch: 100
  },
  saveon: {
    duration: FLIGHT_DURATION,
    center: [-123.23657547013907, 49.25471180166775],
    bearing: 50,
    zoom: 18,
    pitch: 100
  },
  workoverview: {
    duration: FLIGHT_DURATION,
    center: [-123.25307358173384, 49.26601062953216],
    bearing: 50,
    zoom: 17,
    pitch: 100
  }
};
