export const elements = {
  selectors: Array.from(document.querySelectorAll(".btn-tab-selector")),
  sections: Array.from(document.querySelectorAll(".meals-content")),

  menuSlider: document.getElementById("menu-slider"),
  menuSliderItems: Array.from(document.querySelectorAll(".cake-card-item")),
  menuPrevBtn: document.getElementById("our-menu-slider-prev-btn"),
  menuNextBtn: document.getElementById("our-menu-slider-next-btn"),

  mainSlider: document.getElementById("main-slider"),
  mainSliderItems: Array.from(document.querySelectorAll(".main-slider-item")),
  mainSliderPrevBtn: document.getElementById("main-slider-prev-btn"),
  mainSliderNextBtn: document.getElementById("main-slider-next-btn"),
};
