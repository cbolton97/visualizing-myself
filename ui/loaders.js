import { TIME_VIEWS, calculateOpacity } from "../data/time/views.js";

function createBlockElement(block) {
  var blockElem = document.createElement("a");
  blockElem.setAttribute("type", "button");
  blockElem.setAttribute("class", "block");
  blockElem.setAttribute(
    "style",
    `background: ${block.backgroundColor}; color: ${block.color}; width: ${
      block.time
    }%; opacity: ${calculateOpacity(block.time)};`
  );

  return blockElem;
}

function generateMetaContent(name, meta) {
  var containerElem = document.createElement("div");
  containerElem.setAttribute("class", "meta-container");

  var titleElm = document.createElement("p");
  titleElm.setAttribute("class", "meta-title");
  titleElm.innerText = name;

  var hoursElm = document.createElement("p");
  hoursElm.setAttribute("class", "meta-hours");
  hoursElm.innerHTML = `<span>${meta.hours}hrs</span> spent in October 2019`;

  var percentElm = document.createElement("p");
  percentElm.setAttribute("class", "meta-precent");
  percentElm.innerHTML = `<span>${meta.percent}%</span> of the entire month`;

  containerElem.append(titleElm);
  containerElem.append(hoursElm);
  containerElem.append(percentElm);

  return containerElem;
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
        var targetView = TIME_VIEWS.find(view => view.id === block.targetId);

        if (targetView) {
          blockElem.setAttribute(
            "href",
            `#${targetView.locationId}-${block.targetId}`
          );
        }
        blockElem.innerText = `↓ ${block.name} (${block.time}%)`;
      } else {
        blockElem.append(generateMetaContent(block.name, block.meta || ""));
      }

      viewElem.append(blockElem);
    });

    timeElem.append(viewElem);
  });
}
