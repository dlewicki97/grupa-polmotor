import availableCarsLayout from "./availableCarsLayout.js";
import customSelect from "../custom-select/customSelect.js";
import accordion from "../accordion/accordion.js";
import carouselInit from "../carousel/carousel.js";
import detailsCarouselPhotosClickEvent from "../singleUsedCars/detailsCarouselPhotosClickEvent.js";

window.addEventListener("load", () => {
  carouselInit({
    containerClass: "details",
    items: {
      0: 1,
      576: 2,
      992: 3,
      1200: 4,
    },
  });
});
