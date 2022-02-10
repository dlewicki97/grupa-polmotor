import layout from "./layout.js";
import carouselInit from "../carousel/carousel.js";
import customSelect from "../custom-select/customSelect.js";
import setMaxHeight from "../helpers/setMaxHeight.js";
import accordion from "../accordion/accordion.js";

window.addEventListener("load", () => {
  carouselInit({
    containerClass: "history",
    firstItemHideLeftArrow: true,
    lastItemHideRightArrow: true,
  });
  carouselInit({
    containerClass: "ambassadors",
    firstItemHideLeftArrow: true,
    lastItemHideRightArrow: true,
  });
});
