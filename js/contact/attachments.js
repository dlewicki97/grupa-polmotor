export default (function () {
  let attachmentContainers = document.querySelectorAll(".attachment-container");
  attachmentContainers.forEach((attachmentContainer) => {
    let icon = attachmentContainer.querySelector(".attachment-icon");
    let fileInput = attachmentContainer.querySelector("input");
    let text = attachmentContainer.querySelector(".text");
    let label = attachmentContainer.querySelector(".form-label");

    [icon, label].forEach((el) =>
      el.addEventListener("click", () => {
        fileInput.click();
      })
    );

    fileInput.addEventListener("change", () => {
      let files = [...fileInput.files];
      text.innerHTML = [...fileInput.files]
        .map((file) => `<i>${file.name}</i>`)
        .join(", ");
      if (files.length > 0) {
        text.innerHTML = "<span>Załączono pliki:</span> " + text.innerHTML;
        text.style.marginTop = "1rem";
      } else text.style.marginTop = "";
    });
  });
})();
