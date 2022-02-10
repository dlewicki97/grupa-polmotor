export default (function () {
  window.addEventListener("load", () => {
    let accordions = document.querySelectorAll(".accordion");
    setAccordions();

    function setAccordions() {
      accordions.forEach((accordion) => {
        let accordionTrigger = accordion.querySelector(".accordion-trigger");

        accordionTrigger.addEventListener("click", (e) => {
          accordion.classList.toggle("active");

          // scrollEvent();
        });
      });
    }
  });
})();
