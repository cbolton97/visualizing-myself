export var FLIGHT_DURATION = 6000;
export var START_PROPS = {
  center: [-123.25427277450254, 49.26554818513219],
  zoom: 15,
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
  academics: {
    duration: FLIGHT_DURATION,
    center: [-123.25132322401032, 49.26320211687931],
    zoom: 15.9,
    pitch: 20,
    bearing: 62
  },
  personal: {
    duration: FLIGHT_DURATION,
    center: [-123.25427277450254, 49.26554818513219],
    zoom: 15.9,
    pitch: 20,
    bearing: -20
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
    center: [-123.24889687114123, 49.26129595583208],
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
  },
  biomeloc: {
    duration: FLIGHT_DURATION,
    center: [-123.25502310300199, 49.266642445950964],
    bearing: 200,
    zoom: 17.5,
    pitch: 100
  },
  nwloc: {
    duration: FLIGHT_DURATION,
    center: [-123.24976942708508, 49.26682228715609],
    bearing: 65,
    zoom: 17.5,
    pitch: 30
  },
  coffee: {
    duration: FLIGHT_DURATION,
    center: [-123.2513715411586, 49.26569390705748],
    bearing: 65,
    zoom: 17.5,
    pitch: 100
  },
  soloc: {
    duration: FLIGHT_DURATION,
    center: [-123.26222084140667, 49.2615444658056],
    bearing: 65,
    zoom: 16.8,
    pitch: 80
  },
  friendloc: {
    duration: FLIGHT_DURATION,
    center: [-123.25700687620133, 49.268324134616535],
    bearing: 120,
    zoom: 17,
    pitch: 100
  }
};
