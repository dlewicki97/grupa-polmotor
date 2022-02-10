export default function carouselInit(options) {
  let carouselContainer = document.querySelector(`.${options.containerClass}`);
  let carousel = carouselContainer.querySelector(`.carousel`);
  let arrows = carouselContainer.querySelectorAll(".carousel-arrow-container");
  let carouselItems = carousel.querySelectorAll(".item");
  let itemPaddingRight = +getComputedStyle(
    carouselItems[0]
  ).paddingRight.replace("px", "");
  let itemWidth = carouselItems[0].getBoundingClientRect().width;
  let carouselWidth = 0;
  let visibleItems = 0;
  let pos = { top: 0, left: 0, x: 0, y: 0 };
  let oldScrollLeft = 0;
  let move = false;
  let currentIndex = 0;

  setValues();
  hideArrows();

  function setValues() {
    setItemWidth();
    setCarouselWidth();
    setVisibleItems();
    setItemPaddingRight();
  }

  function setItemWidth() {
    if (options?.items === undefined) return;

    let items = options.items;

    let currentScreenWidth = Object.keys(items).reduce((t, i) => {
      if (+i > t && +i <= window.innerWidth) t = +i;
      return t;
    }, 0);

    let itemsInRow = items[currentScreenWidth];

    itemWidth = carousel.offsetWidth / itemsInRow;
    // itemWidth -= itemWidth * 0.05;

    carouselItems.forEach((item) => (item.style.width = itemWidth + "px"));
  }

  function setCarouselWidth() {
    carouselWidth = carousel.offsetWidth;
  }

  function setVisibleItems() {
    visibleItems = Math.ceil(carouselWidth / itemWidth) - 1;
    if (options.items) visibleItems++;
  }

  function setItemPaddingRight() {
    if (options.items === undefined) return;
    let visibleItemsWidth = visibleItems * itemWidth;
    let itemPaddingRight = carouselWidth - visibleItemsWidth;
    carouselItems.forEach((item, i) => {
      // item.style.paddingRight =
      //   i + 1 === visibleItems
      //     ? 0 * itemPaddingRight + "px"
      //     : itemPaddingRight + "px";
    });
  }

  window.addEventListener("resize", () => {
    setValues();
  });

  let mouseDownHandler = (e) => {
    move = true;
    carousel.style.cursor = "grabbing";
    carousel.style.userSelect = "none";
    pos = {
      left: carousel.scrollLeft,
      top: carousel.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };
    oldScrollLeft = carousel.scrollLeft;

    carousel.addEventListener("mousemove", mouseMoveHandler);
    carousel.addEventListener("touchmove", mouseMoveHandler);
    carousel.addEventListener("mouseup", mouseUpHandler);
    carousel.addEventListener("touchend", mouseUpHandler);
  };
  let mouseMoveHandler = (e) => {
    if (!move) return;
    const dx = e.clientX - pos.x;
    let scroll = pos.left - dx;
    if (e.type === "mousemove") carousel.scrollLeft = scroll;
    let newItemValue = parseInt(carousel.scrollLeft / itemWidth) << 0;
    if (newItemValue < 0 || newItemValue > carouselItems.length - visibleItems)
      return;
    currentIndex = newItemValue;
    hideArrows();
  };
  let mouseUpHandler = (e) => {
    carousel.style.cursor = "grab";
    carousel.style.removeProperty("user-select");
    move = false;
    let parent = e.target.parentElement;
    let link = e.path.find((el) => el.nodeName === "A");

    if (link && carousel.scrollLeft != oldScrollLeft) {
      function captureClick(clickEvent) {
        clickEvent.preventDefault();
        parent.removeEventListener("click", captureClick, true);
      }
      parent.addEventListener("click", captureClick, true);
    }
  };

  carousel.addEventListener("mousedown", mouseDownHandler);
  carousel.addEventListener("touchstart", mouseDownHandler);

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      let newItemValue =
        currentIndex + (arrow.dataset.direction == "right" ? 1 : -1);
      if (
        newItemValue < 0 ||
        newItemValue > carouselItems.length - visibleItems
      )
        return;
      currentIndex = newItemValue;

      hideArrows();

      carousel.scrollTo({
        left: currentIndex * itemWidth,
        behavior: "smooth",
      });
    });
  });

  function hideArrows() {
    if (options?.firstItemHideLeftArrow) firstItemHideLeftArrow();
    if (options?.lastItemHideRightArrow) lastItemHideRightArrow();
  }

  function firstItemHideLeftArrow() {
    arrows[0].classList[currentIndex === 0 ? "add" : "remove"]("hide");
  }
  function lastItemHideRightArrow() {
    arrows[1].classList[
      currentIndex === carouselItems.length - visibleItems ? "add" : "remove"
    ]("hide");
  }
}
