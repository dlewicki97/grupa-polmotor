export default function sliderInit(options) {
  var slideIndex = 1;
  var timer = setInterval(() => plusSlides(1), 6000);
  let parent = document.querySelector(`.${options.containerClass}`);
  let dots = parent.querySelectorAll(".dot");
  let left = parent.querySelector(".left");
  let right = parent.querySelector(".right");

  left?.addEventListener("click", () => plusSlides(-1));
  right?.addEventListener("click", () => plusSlides(1));

  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => currentSlide(i + 1))
  );

  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = parent.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";

    clearInterval(timer);
    timer = setInterval(() => plusSlides(1), 6000);
  }
}
