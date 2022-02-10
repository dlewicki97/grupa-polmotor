export default (function () {
  window.addEventListener("load", () => {
    let other = document.querySelector('select[name="other"]').parentElement;
    let saloon = document.querySelector('select[name="saloon"]').parentElement;
    let service = document.querySelector(
      'select[name="service"]'
    ).parentElement;
    let customSelects = [other, saloon, service];

    customSelects.forEach((customSelect, i) => {
      let selectItemsDivs = customSelect.querySelectorAll(".select-items div");
      let select = customSelect.querySelector("select");
      selectItemsDivs.forEach((div, j) =>
        div.addEventListener("click", () => {
          customSelects.forEach((innerSelect, k) => {
            innerSelect.classList.add("disabled");
            if (k === i || select.value === "")
              innerSelect.classList.remove("disabled");
          });
        })
      );
    });
  });
})();
