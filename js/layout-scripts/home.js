import layout from "./layout.js";
import carouselInit from "../carousel/carousel.js";
import sliderInit from "../slider/slider.js";
import customSelect from "../custom-select/customSelect.js";
import setMaxHeight from "../helpers/setMaxHeight.js";
import accordion from "../accordion/accordion.js";
import asideButton from "../aside-button/asideButton.js";

window.addEventListener("load", () => {
  carouselInit({ containerClass: "offer" });
  sliderInit({ containerClass: "slider" });
  sliderInit({ containerClass: "sponsorship" });
});

setMaxHeight(".saloons-title");
