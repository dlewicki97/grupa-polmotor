export default (function () {
  let aside = document.querySelector("aside");
  let footer = document.querySelector("footer");
  let app = document.querySelector(".app");
  let footerHeight = footer.getBoundingClientRect().height;
  let maxScrollHeight = 0;
  let scrollYBreakpoint = 0;
  setInitValues();
  function setAppMarginBottom() {
    app.style.marginBottom = footerHeight + "px";
  }
  function setFooterHeight() {
    footerHeight = footer.getBoundingClientRect().height;
  }
  function setMaxScrollHeight() {
    maxScrollHeight = app.scrollHeight - window.innerHeight;
  }
  function setScrollYBreakpoint() {
    scrollYBreakpoint = maxScrollHeight - footerHeight;
  }
  function setInitValues() {
    setFooterHeight();
    setMaxScrollHeight();
    setScrollYBreakpoint();
    setAppMarginBottom();
  }

  function scrollEvent() {
    setInitValues();
    if (window.innerWidth <= 992) return;

    if (window.scrollY >= maxScrollHeight) {
      aside.style.position = "absolute";
      aside.style.bottom = 0;
      aside.style.top = "unset";
    } else {
      aside.style.position = "fixed";
      aside.style.top = 0;
      aside.style.bottom = "";
    }
  }

  window.addEventListener("scroll", () => {
    scrollEvent();
  });
})();
