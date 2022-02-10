export default (function () {
  let elements = document.querySelectorAll("*[data-lightbox]");

  if (elements.length > 0) {
    let style = document.createElement("style");
    style.innerHTML = `[data-lightbox] {
      cursor: pointer;
    }`;
    document.head.appendChild(style);

    let lightboxDiv = document.createElement("div");
    lightboxDiv.setAttribute("class", "lightbox");
    lightboxDiv.innerHTML = `<div class="lightbox-overlay"></div><div class="lightbox-content"><img width="80%" height="auto" class="lightbox-img" src="" /></div>`;
    document.body.appendChild(lightboxDiv);
  }
  let lightbox = document.querySelector(".lightbox");
  let lightboxImg = lightbox?.querySelector(".lightbox-img");
  let lightboxOverlay = lightbox?.querySelector(".lightbox-overlay");

  lightboxOverlay.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });

  elements.forEach((el) => {
    el.addEventListener("click", (e) => {
      lightboxImg.src = el.dataset.href;
      lightbox?.classList.add("show");
    });
  });
})();
