export default (function () {
  let aside = document.querySelector("aside");
  document.querySelectorAll(".aside-button").forEach((button) =>
    button.addEventListener("click", () => {
      aside.classList.toggle("show");
    })
  );
})();
