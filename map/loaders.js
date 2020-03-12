export function addDataSource(map, name) {
  map.addSource(name, {
    type: "geojson",
    data: `../data/${name}.json`
  });
}

function addExtrusionLayer(map, source, color, opacity) {
  map.addLayer({
    id: `${source}-extrusion`,
    type: "fill-extrusion",
    source: source,
    paint: {
      // See the Mapbox Style Specification for details on data expressions.
      // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions

      // Get the fill-extrusion-color from the source 'color' property.
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

export function addPlaceExtrusion(map, source, color) {
  addExtrusionLayer(map, source, color, 1);
}

export function addBuildingExtrusion(map, source) {
  addExtrusionLayer(map, source, "black", 0.2);
}
