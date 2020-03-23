import { TIME_VIEWS } from "../data/time/views.js";
import { map } from "../map/init.js";

function createBlockElement(block) {
  var blockElem = document.createElement("button");
  blockElem.addEventListener("click", handleBlockClick);
  blockElem.setAttribute("type", "button");
  blockElem.setAttribute("class", "block");
  blockElem.setAttribute(
    "style",
    `background: ${block.backgroundColor}; color: ${block.color}; width: ${block.time}%;`
  );
  blockElem.innerText = `${block.name} (${block.time}%)`;

  return blockElem;
}

export function addTimeViews() {
  var timeElem = document.getElementById("time");

  TIME_VIEWS.forEach((view, idx) => {
    var viewElem = document.createElement("div");
    viewElem.id = view.id;

    if (idx === 0) {
      viewElem.setAttribute("class", "view active");
    } else {
      viewElem.setAttribute("class", "view");
    }

    view.blocks.forEach(block => {
      var blockElem = createBlockElement(block);
      if (block.targetId) {
        blockElem.setAttribute("data-targetId", block.targetId);
      }
      viewElem.append(blockElem);
    });

    timeElem.append(viewElem);
  });
}

function handleBlockClick() {
  this.blur();
  var newViewId = this.getAttribute("data-targetid");
  var newLocationId = TIME_VIEWS.find(view => view.id === newViewId).locationId;

  window.location.hash = `${newLocationId}-${newViewId}`;
}
