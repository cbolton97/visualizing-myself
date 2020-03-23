import { FLIGHT_DURATION, LOCATIONS } from "../data/space/locations.js";
import { PLACES } from "../data/space/places.js";
import { TIME_VIEWS } from "../data/time/views.js";
import { map } from "../map/init.js";

export var activeLocation = Object.keys(LOCATIONS)[0];
export var activeView = TIME_VIEWS[0].id;

function showLocationContent() {
  document
    .getElementById(`${activeLocation}-content`)
    .setAttribute("class", "content show");
}

function hideLocationContent() {
  document
    .getElementById(`${activeLocation}-content`)
    .setAttribute("class", "content");
}

function foregroundTimeContainer(view) {
  if (view === Object.keys(TIME_VIEWS)[0].id) {
    document
      .getElementById("time-container")
      .setAttribute("class", "foreground");
  } else {
    document.getElementById("time-container").setAttribute("class", "");
  }
}

function activateLocationElem(newLocation, oldLocation) {
  document.getElementById(newLocation).setAttribute("class", "active");
  document.getElementById(oldLocation).setAttribute("class", "");
}

function activateViewElem(view) {
  document
    .getElementById("time")
    .querySelectorAll(".active")
    .forEach(elem => elem.classList.remove("active"));

  document.getElementById(view).classList.add("active");
}

function applyColorsToMap(viewId) {
  var activeBlocks = TIME_VIEWS.find(view => view.id === viewId).blocks;
  var activePlaceIds = [];

  activeBlocks.forEach(block => {
    block.placeIds.forEach(placeId => {
      console.log("coloring", placeId);
      activePlaceIds.push(placeId);
      map.setPaintProperty(placeId, "fill-extrusion-opacity", 1);
      map.setPaintProperty(
        placeId,
        "fill-extrusion-color",
        block.backgroundColor
      );
    });
  });

  var inactivePlaceIds = PLACES.filter(
    placeId => !activePlaceIds.includes(placeId)
  );

  inactivePlaceIds.forEach(placeId => {
    console.log("hiding", placeId);
    map.setPaintProperty(placeId, "fill-extrusion-opacity", 0);
  });
}

export function handleMapMovement() {
  hideLocationContent();

  setTimeout(() => {
    showLocationContent();
  }, FLIGHT_DURATION / 1.2);
}

export function handleHashChange() {
  var hashLocation = window.location.hash.split("#")[1].split("-")[0];
  var hashView = window.location.hash.split("#")[1].split("-")[1];

  console.log(activeLocation, hashLocation);
  if (activeLocation === hashLocation && activeView === hashView) return;

  map.flyTo(LOCATIONS[hashLocation]);

  foregroundTimeContainer(hashView);
  activateLocationElem(hashLocation, activeLocation);
  activateViewElem(hashView);
  applyColorsToMap(hashView);

  activeLocation = hashLocation;
  activeView = hashView;
}
