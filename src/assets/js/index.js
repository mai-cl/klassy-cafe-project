import '../css/style.css'
import { elements } from './base'
import tabSelector from './tabSelector'
import { smoothScrolling } from './smoothScrolling'
import * as infinitySlider from './infinitySlider'

const mainSlider = {
  element: elements.mainSlider,
  items: elements.mainSliderItems,
  infSliderCounter: 0,
  numberItemsOnScreen: 1,
  moveToRight: null,
}

window.addEventListener('load', () => {
  infinitySlider.init(mainSlider)
})

elements.selectors.forEach(selector => {
  selector.addEventListener('click', e => {
    const clickedBtnSelector = e.target.closest('.btn-tab-selector')
    tabSelector(clickedBtnSelector)
  })
})

elements.mainSlider.addEventListener('transitionend', e => {
  if (e.target !== elements.mainSlider) return
  infinitySlider.onTransitionEnd(mainSlider)
})
elements.mainSliderPrevBtn.addEventListener('click', e =>
  infinitySlider.onClickPrevBtn(mainSlider)
)
elements.mainSliderNextBtn.addEventListener('click', e =>
  infinitySlider.onClickNextBtn(mainSlider)
)

elements.navToggleBtn.addEventListener('click', () => {
  elements.navMenu.classList.toggle('show')
})

elements.navMenu.addEventListener('click', e => {
  if (e.target.matches('.nav a')) {
    elements.navMenu.classList.remove('show')
  }
})

ScrollReveal().reveal('#header', {
  duration: 2000,
  origin: 'bottom',
  distance: '-85px',
})
ScrollReveal().reveal('#nosotros, #chefs, .contacto-content', {
  duration: 2000,
  origin: 'right',
  distance: '120px',
})
ScrollReveal().reveal('.platos-text-content, .platos-gallery, .menu-content', {
  duration: 2000,
  origin: 'left',
  distance: '120px',
})

smoothScrolling(elements.linkToHome, elements.homeSection)
smoothScrolling(elements.linkToNosotros, elements.nosotrosSection)
smoothScrolling(elements.linkToPlatos, elements.platosSection)
smoothScrolling(elements.linkToChefs, elements.chefsSection)
smoothScrolling(elements.linkToMenu, elements.menuSection)
smoothScrolling(elements.linkToContacto, elements.contactoSection)

const allSections = [
  elements.homeSection,
  elements.nosotrosSection,
  elements.platosSection,
  elements.chefsSection,
  elements.menuSection,
  elements.contactoSection,
]

const allNavLinks = [
  elements.linkToHome,
  elements.linkToNosotros,
  elements.linkToPlatos,
  elements.linkToChefs,
  elements.linkToMenu,
  elements.linkToContacto,
]

window.addEventListener('scroll', e => {
  let currentSectionId = null
  allSections.forEach(section => {
    if (window.pageYOffset >= section.offsetTop - section.clientHeight / 4)
      currentSectionId = section.id
  })
  allNavLinks.forEach(link => link.classList.remove('active'))
  allNavLinks
    .find(link => link.dataset.forSection === currentSectionId)
    .classList.add('active')
})
