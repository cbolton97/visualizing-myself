import { locations } from "./locations.js";

var activeChapterName = "ubc";
function setActiveChapter(map, locationName) {
  if (locationName === activeChapterName) return;
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

export function scrollHandler(map) {
  var locationNames = Object.keys(locations);
  for (var i = 0; i < locationNames.length; i++) {
    var locationName = locationNames[i];
    if (isElementOnScreen(locationName)) {
      setActiveChapter(map, locationName);
      break;
    }
  }
}

export function showContent() {
  document
    .getElementById(`${activeChapterName}-content`)
    .setAttribute("class", "content show");
}

export function hideContent() {
  document
    .getElementById(`${activeChapterName}-content`)
    .setAttribute("class", "content");
}
