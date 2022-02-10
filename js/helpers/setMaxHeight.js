export default function setMaxHeight(query) {
  window.addEventListener("load", () => {
    setHeight();
    function setHeight() {
      if (window.innerWidth <= 992) return;
      let titles = document.querySelectorAll(query);
      let max = 0;
      let min = 99999999;
      let heights = [];
      titles.forEach((title, i) => {
        if (title.offsetHeight > max) max = title.offsetHeight;
        if (title.offsetHeight < min) min = title.offsetHeight;
        heights[i] = title.offsetHeight;
      });
      let isDefault = heights.every((height) => height == min);

      titles.forEach((_, i) => {
        titles[i].style.height = isDefault ? "" : max + "px";
      });
    }
    window.addEventListener("resize", () => {
      setHeight();
    });
  });
}
