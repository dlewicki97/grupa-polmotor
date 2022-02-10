export default (function () {
  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    let customSelect = x[i];
    selElmnt = x[i].getElementsByTagName("select")[0];

    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = `<span>${
      selElmnt.options[selElmnt.selectedIndex].innerHTML
    }</span>`;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < ll; j++) {
      /* For each option in the original select element,
    create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = `${selElmnt.options[j].innerHTML}`;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,

        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerText.trim() == this.innerText.trim()) {
            s.selectedIndex = i;
            h.innerHTML = `<span>${this.innerText}</span>`;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            this.parentNode.classList.remove("active");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", toggle);

    let arrow = x[i].querySelector(".arrow");
    arrow.addEventListener("click", toggle);

    function toggle(e) {
      // e.stopPropagation();

      customSelect
        .querySelector(".select-items")
        .classList.toggle("select-hide");
      customSelect
        .querySelector(".select-selected")
        .classList.toggle("select-arrow-active");
      customSelect.classList.toggle("active");
      closeAllSelect(customSelect);
    }
  }

  function closeAllSelect(currentCustomSelect) {
    if (currentCustomSelect.constructor === PointerEvent) {
      if (
        currentCustomSelect.path.find((el) =>
          el.classList?.contains("custom-select")
        )
      )
        return;
    }
    let customSelects = [...x];
    let currentIndex = customSelects.indexOf(currentCustomSelect);

    customSelects.forEach((customSelect) => {
      let customSelectIndex = customSelects.indexOf(customSelect);
      if (customSelectIndex === currentIndex) return;
      customSelect.querySelector(".select-items").classList.add("select-hide");
      customSelect
        .querySelector(".select-selected")
        .classList.remove("select-arrow-active");
      customSelect.classList.remove("active");
    });
  }

  /* If the user clicks anywhere outside the select box,
then close all select boxes: */
  document.addEventListener("click", closeAllSelect);
})();
