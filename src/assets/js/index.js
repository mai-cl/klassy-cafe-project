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

const menuSlider = {
  element: elements.menuSlider,
  items: elements.menuSliderItems,
  infSliderCounter: 0,
  numberItemsOnScreen: 5,
  moveToRight: null,
};

//TODO: Agregar los dummy items desde JS, no a mano desde HTML
window.addEventListener("load", () => {
  infinitySlider.init(mainSlider);
  infinitySlider.init(menuSlider);
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

elements.menuSlider.addEventListener("transitionend", (e) => {
  if (e.target !== elements.menuSlider) return;
  infinitySlider.onTransitionEnd(menuSlider);
});
elements.menuPrevBtn.addEventListener("click", (e) =>
  infinitySlider.onClickPrevBtn(menuSlider)
);
elements.menuNextBtn.addEventListener("click", (e) =>
  infinitySlider.onClickNextBtn(menuSlider)
);

elements.navToggleBtn.addEventListener("click", () => {
  elements.navMenu.classList.toggle("show");
});
