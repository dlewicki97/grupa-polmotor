export default (function () {
  let carouselItems = document.querySelectorAll(".details-carousel .item");
  let mainPhoto = document.querySelector(".main-photo");

  carouselItems.forEach((item) => {
    let carouselPhoto = item.querySelector(".carousel-photo");
    carouselPhoto.addEventListener("click", () => {
      mainPhoto.style.backgroundImage = `url('${carouselPhoto.dataset.bg}')`;
    });
  });
})();
