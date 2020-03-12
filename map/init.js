import {
  addDataSource,
  addPlaceExtrusion,
  addBuildingExtrusion
} from "./loaders.js";
import { FLIGHT_DURATION } from "./locations.js";
import { scrollHandler, showContent, hideContent } from "./scroll.js";

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

map.scrollZoom.disable();
window.onscroll = () => scrollHandler(map);

map.on("movestart", function() {
  hideContent();

  setTimeout(() => {
    showContent();
  }, FLIGHT_DURATION / 1.2);
});

map.on("load", function() {
  addDataSource(map, "dorm");
  addPlaceExtrusion(map, "dorm", "black");

  addDataSource(map, "work");
  addPlaceExtrusion(map, "work", "#bbe5b3");

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
