import "../css/style.css";
import { elements } from "./base";
import tabSelector from "./tabSelector";
import * as infinitySlider from "./infinitySlider";

const mainSlider = {
  element: elements.mainSlider,
  items: elements.mainSliderItems,
  infSliderCounter: 0,
  numberItemsOnScreen: 1,
  moveToRight: null,
};

window.addEventListener("load", () => {
  infinitySlider.init(mainSlider);
});

elements.selectors.forEach((selector) => {
  selector.addEventListener("click", (e) => {
    const clickedBtnSelector = e.target.closest(".btn-tab-selector");
    tabSelector(clickedBtnSelector);
  });
});

elements.mainSlider.addEventListener("transitionend", (e) => {
  if (e.target !== elements.mainSlider) return;
  infinitySlider.onTransitionEnd(mainSlider);
});
elements.mainSliderPrevBtn.addEventListener("click", (e) =>
  infinitySlider.onClickPrevBtn(mainSlider)
);
elements.mainSliderNextBtn.addEventListener("click", (e) =>
  infinitySlider.onClickNextBtn(mainSlider)
);

elements.navToggleBtn.addEventListener("click", () => {
  elements.navMenu.classList.toggle("show");
});

elements.navMenu.addEventListener("click", (e) => {
  if (e.target.matches(".nav a")) {
    elements.navMenu.classList.remove("show");
  }
});

ScrollReveal().reveal("#header", {
  duration: 2000,
  origin: "bottom",
  distance: "-85px",
});
ScrollReveal().reveal("#nosotros", {
  duration: 2000,
  origin: "right",
  distance: "120px",
});
ScrollReveal().reveal("#platos", {
  duration: 2000,
  origin: "left",
  distance: "120px",
});
ScrollReveal().reveal("#chefs, #menu, #contacto", {
  duration: 2000,
  origin: "bottom",
  distance: "120px",
});
