export var FLIGHT_DURATION = 6000;
export var START_PROPS = {
  center: [-123.25427277450254, 49.26554818513219],
  zoom: 15.5,
  pitch: 0,
  bearing: 0
};

export var locations = {
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
  hci: {
    duration: FLIGHT_DURATION,
    center: [-123.24802304607663, 49.2614084501968],
    bearing: 120,
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
    center: [-123.24802304607663, 49.2614084501968],
    bearing: 50,
    zoom: 18,
    pitch: 15
  },
  biz: {
    duration: FLIGHT_DURATION,
    center: [-123.25427277450254, 49.26554818513219],
    bearing: 100,
    zoom: 18,
    pitch: 100
  }
};
