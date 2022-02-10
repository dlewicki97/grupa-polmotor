function setSaloonsTitlesHeight() {
  let titles = document.querySelectorAll(".saloons-title");
  let max = 0;
  let heights = [];
  titles.forEach((title, i) => {
    if (title.offsetHeight > max) max = title.offsetHeight;
    heights[i] = title.offsetHeight;
  });

  titles.forEach((title) => (title.style.minHeight = max + "px"));
}
window.addEventListener("resize", () => {
  if (window.innerWidth <= 992) return;
  setSaloonsTitlesHeight();
});
