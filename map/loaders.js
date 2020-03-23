import { map } from "./init.js";
import { PLACES } from "../data/space/places.js";
import { BUILDINGS } from "../data/space/buildings.js";

function addDataSource(name, folder) {
  map.addSource(name, {
    type: "geojson",
    data: `../data/space/geojson/${folder}/${name}.json`
  });
}

function addExtrusionLayer(source, color, opacity) {
  map.addLayer({
    id: source,
    type: "fill-extrusion",
    source: source,
    paint: {
      "fill-extrusion-color": color,

      "fill-extrusion-height": [
        "interpolate",
        ["linear"],
        ["zoom"],
        15,
        0,
        15.05,
        ["get", "height"]
      ],
      "fill-extrusion-base": [
        "interpolate",
        ["linear"],
        ["zoom"],
        15,
        0,
        15.05,
        ["get", "base_height"]
      ],
      "fill-extrusion-opacity": opacity
    }
  });
}

function addPlaceLayers() {
  PLACES.forEach(name => {
    addDataSource(name, "places");
    addExtrusionLayer(name, "black", 1);
  });
}

function addBuildingLayers() {
  BUILDINGS.forEach(name => {
    addDataSource(name, "buildings");
    addExtrusionLayer(name, "black", 0.2);
  });
}

export function addPlacesAndBuildings() {
  addPlaceLayers();
  addBuildingLayers();
}
