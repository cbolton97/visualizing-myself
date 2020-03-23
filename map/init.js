import { addPlacesAndBuildings } from "./loaders.js";
import { START_PROPS } from "../data/space/locations.js";
import { handleMapMovement } from "../ui/locationViewManager.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2JvbHR0IiwiYSI6ImNrN21ob2I4bjA1cmIzbm4ybG15a2FlY3QifQ.M-B8cEc5iiACTupwOD8qtg";

export var map = new mapboxgl.Map({
  style: "mapbox://styles/mapbox/light-v10",
  container: "map",
  antialias: true,
  ...START_PROPS
});

map.addControl(
  new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: false,
    visualizePitch: true
  })
);
map.scrollZoom.disable();

map.on("load", addPlacesAndBuildings);
map.on("movestart", handleMapMovement);

// map.on("load", function() {
//   addPlacesAndBuildings();
//   addDataSource(map, "dorm");
//   addPlaceExtrusion(map, "dorm", "#F2D600");

//   addDataSource(map, "work");
//   addPlaceExtrusion(map, "work", "#bbe5b3");

//   addDataSource(map, "seng");
//   addPlaceExtrusion(map, "seng", "#EB5A46");

//   addDataSource(map, "hci");
//   addPlaceExtrusion(map, "hci", "#0079BF");

//   addDataSource(map, "proj");
//   addPlaceExtrusion(map, "proj", "#00c2e0");

//   addDataSource(map, "biz");
//   addPlaceExtrusion(map, "biz", "#ff9f1a");

//   addDataSource(map, "nw");
//   addPlaceExtrusion(map, "nw", "#ff78cb");

//   addDataSource(map, "ponderosa");
//   addBuildingExtrusion(map, "ponderosa");

//   addDataSource(map, "dmp");
//   addBuildingExtrusion(map, "dmp");

//   addDataSource(map, "XWing");
//   addBuildingExtrusion(map, "XWing");

//   addDataSource(map, "HA");
//   addBuildingExtrusion(map, "HA");
//   addDataSource(map, "CLC");
//   addBuildingExtrusion(map, "CLC");
// });
