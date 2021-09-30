export const elements = {
  selectors: Array.from(document.querySelectorAll(".btn-tab-selector")),
  sections: Array.from(document.querySelectorAll(".menu-items-container")),

  mainSlider: document.getElementById("nosotros-slider"),
  mainSliderItems: Array.from(
    document.querySelectorAll(".nosotros-slider-item")
  ),
  mainSliderPrevBtn: document.getElementById("nosotros-slider-prev-btn"),
  mainSliderNextBtn: document.getElementById("nosotros-slider-next-btn"),

  navToggleBtn: document.getElementById("nav-toggle-btn"),
  navMenu: document.getElementById("nav-menu"),
};
