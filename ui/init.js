import { addTimeViews } from "./loaders.js";
import { handleHashChange } from "./locationViewManager.js";

window.addEventListener("DOMContentLoaded", addTimeViews, false);
window.addEventListener("hashchange", handleHashChange, false);
