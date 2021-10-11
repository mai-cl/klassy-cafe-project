export const elements = {
  selectors: Array.from(document.querySelectorAll('.btn-tab-selector')),
  sections: Array.from(document.querySelectorAll('.menu-items-container')),

  mainSlider: document.getElementById('nosotros-slider'),
  mainSliderItems: Array.from(
    document.querySelectorAll('.nosotros-slider-item')
  ),
  mainSliderPrevBtn: document.getElementById('nosotros-slider-prev-btn'),
  mainSliderNextBtn: document.getElementById('nosotros-slider-next-btn'),

  navToggleBtn: document.getElementById('nav-toggle-btn'),
  navMenu: document.getElementById('nav-menu'),
  header: document.getElementById('header'),

  linkToHome: document.getElementById('link-to-home'),
  linkToNosotros: document.getElementById('link-to-nosotros'),
  linkToPlatos: document.getElementById('link-to-platos'),
  linkToChefs: document.getElementById('link-to-chefs'),
  linkToMenu: document.getElementById('link-to-menu'),
  linkToContacto: document.getElementById('link-to-contacto'),

  homeSection: document.getElementById('home'),
  nosotrosSection: document.getElementById('nosotros'),
  platosSection: document.getElementById('platos'),
  chefsSection: document.getElementById('chefs'),
  menuSection: document.getElementById('menu'),
  contactoSection: document.getElementById('contacto'),

  allSectionHiddenContainers: document.querySelectorAll(
    'body > section .container, .platos-gallery'
  ),
}
