import { addPlacesAndBuildings } from "./loaders.js";
import { START_PROPS } from "../data/space/locations.js";
import { handleMapMovement } from "../ui/locationViewManager.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2JvbHR0IiwiYSI6ImNrN21ob2I4bjA1cmIzbm4ybG15a2FlY3QifQ.M-B8cEc5iiACTupwOD8qtg";

export var map = new mapboxgl.Map({
  style: "mapbox://styles/cboltt/ck84t6imp07fz1jo67ktnqgjf",
  container: "map",
  antialias: true,
  ...START_PROPS
});

map.addControl(
  new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true,
    visualizePitch: true
  })
);

map.on("load", () => {
  addPlacesAndBuildings();
  window.location.hash = "start-all";
  map.setLight({ color: "#6ef", intensity: 0.5, position: [1.15, 135, 45] });
});
map.on("movestart", handleMapMovement);
