import { FLIGHT_DURATION, LOCATIONS } from "../data/space/locations.js";
import { PLACES } from "../data/space/places.js";
import { TIME_VIEWS } from "../data/time/views.js";
import { map } from "../map/init.js";

export var activeLocationId = Object.keys(LOCATIONS)[0];
export var activeViewId = TIME_VIEWS[0].id;

function showLocationContent() {
  document
    .getElementById(`${activeLocationId}-content`)
    .setAttribute("class", "content show");
}

function hideLocationContent() {
  document
    .getElementById(`${activeLocationId}-content`)
    .setAttribute("class", "content");
}

function foregroundTimeContainer(viewId) {
  if (viewId === TIME_VIEWS[0].id) {
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

function applyColorsToMap(view) {
  var activeBlocks = view.blocks;
  var activePlaceIds = [];

  activeBlocks.forEach(block => {
    block.placeIds.forEach(placeId => {
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
    map.setPaintProperty(placeId, "fill-extrusion-opacity", 0);
  });
}

function toggleBackButton(view) {
  var backElem = document.getElementById("time-back-button");
  var referringView = TIME_VIEWS.find(v => v.id === view.referringId);
  if (referringView) {
    backElem.setAttribute(
      "href",
      `#${referringView.locationId}-${referringView.id}`
    );
    backElem.classList.add("active");
  } else {
    backElem.classList.remove("active");
  }
}

export function handleMapMovement() {
  // hideLocationContent();

  setTimeout(() => {
    // showLocationContent();
  }, FLIGHT_DURATION / 1.2);
}

export function handleHashChange() {
  var hashLocationId = window.location.hash.split("#")[1].split("-")[0];
  var hashViewId = window.location.hash.split("#")[1].split("-")[1];

  console.log(activeLocationId, hashLocationId);
  if (activeLocationId === hashLocationId && activeViewId === hashViewId)
    return;

  var newView = TIME_VIEWS.find(view => view.id === hashViewId);

  map.flyTo(LOCATIONS[hashLocationId]);

  foregroundTimeContainer(hashViewId);
  // activateLocationElem(hashLocationId, activeLocationId);
  activateViewElem(hashViewId);
  applyColorsToMap(newView);
  toggleBackButton(newView);

  activeLocationId = hashLocationId;
  activeViewId = hashViewId;
}
