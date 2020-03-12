import {
  addDataSource,
  addPlaceExtrusion,
  addBuildingExtrusion
} from "./loaders.js";
import { locations } from "./locations.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2JvbHR0IiwiYSI6ImNrN21ob2I4bjA1cmIzbm4ybG15a2FlY3QifQ.M-B8cEc5iiACTupwOD8qtg";
var map = new mapboxgl.Map({
  style: "mapbox://styles/mapbox/light-v10",
  center: [-123.2520763207973, 49.2655882833588],
  zoom: 12,
  pitch: 100,
  bearing: -70,
  container: "map",
  antialias: true
});

function rotateCamera(timestamp) {
  // clamp the rotation between 0 -360 degrees
  // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
  map.rotateTo((timestamp / 500) % 360, { duration: 0 });
  // Request the next frame of the animation.
  requestAnimationFrame(rotateCamera);
}

// On every scroll event, check which element is on screen
window.onscroll = function() {
  var locationNames = Object.keys(locations);
  for (var i = 0; i < locationNames.length; i++) {
    var locationName = locationNames[i];
    if (isElementOnScreen(locationName)) {
      setActiveChapter(locationName);
      break;
    }
  }
};

var activeChapterName = "ubc";
function setActiveChapter(locationName) {
  if (locationName === activeChapterName) return;
  console.log(locations[locationName]);
  map.flyTo(locations[locationName]);

  document.getElementById(locationName).setAttribute("class", "active");
  document.getElementById(activeChapterName).setAttribute("class", "");

  activeChapterName = locationName;
}

function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}

map.on("load", function() {
  var nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "top-left");

  // rotateCamera(0);

  addDataSource(map, "dorm");
  addPlaceExtrusion(map, "dorm", "black");

  addDataSource(map, "work");
  addPlaceExtrusion(map, "work", "green");

  addDataSource(map, "ponderosa");
  addBuildingExtrusion(map, "ponderosa");

  addDataSource(map, "dmp");
  addBuildingExtrusion(map, "dmp");

  addDataSource(map, "XWing");
  addBuildingExtrusion(map, "XWing");

  addDataSource(map, "HA");
  addBuildingExtrusion(map, "HA");
  addDataSource(map, "CLC");
  addBuildingExtrusion(map, "CLC");
});
