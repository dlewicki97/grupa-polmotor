export default (function () {
  let collapseButton = document.querySelector("#collapse-button");

  collapseButton.addEventListener("click", () =>
    document.querySelector(".layout-nav__collapse").classList.toggle("active")
  );
})();
