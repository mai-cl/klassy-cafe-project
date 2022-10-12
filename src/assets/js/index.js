import '../css/style.css'
import { elements } from './base'
import tabSelector from './tabSelector'
import { smoothScrolling } from './smoothScrolling'
import * as infinitySlider from './infinitySlider'

/* Slider */

const mainSlider = {
  element: elements.mainSlider,
  items: elements.mainSliderItems,
  stepCounter: 0,
  numberItemsOnScreen: 1,
  moveToRight: null,
}

window.addEventListener('load', () => {
  infinitySlider.init(mainSlider)
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

/* Tab selector */

elements.selectors.forEach(selector => {
  selector.addEventListener('click', e => {
    const clickedBtnSelector = e.target.closest('.btn-tab-selector')
    tabSelector(clickedBtnSelector)
  })
})

/* Toggle nav menu */

elements.navToggleBtn.addEventListener('click', () => {
  elements.navMenu.classList.toggle('show')
})

elements.navMenu.addEventListener('click', e => {
  if (e.target.matches('.nav a')) {
    elements.navMenu.classList.remove('show')
  }
})

/* Smooth scrolling */

smoothScrolling(elements.linkToHome, elements.homeSection)
smoothScrolling(elements.linkToNosotros, elements.nosotrosSection)
smoothScrolling(elements.linkToPlatos, elements.platosSection)
smoothScrolling(elements.linkToChefs, elements.chefsSection)
smoothScrolling(elements.linkToMenu, elements.menuSection)
smoothScrolling(elements.linkToContacto, elements.contactoSection)

/* Highlight active section link */

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

/* Sticky nav */

const headerHeight = elements.header.getBoundingClientRect().height

const stickyNav = function (entries, observer) {
  const entry = entries[0]
  if (entry.isIntersecting) {
    elements.header.classList.remove('sticky')
  } else {
    elements.header.classList.add('sticky')
  }
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
})

headerObserver.observe(elements.homeSection)

/* Scroll reveal */

const hiddenSections = [...elements.allSectionHiddenContainers].filter(
  section => !section.classList.contains('hero-section')
)

const scrollReveal = function (entries, observer) {
  const entry = entries[0]

  if (!entry.isIntersecting) return

  entry.target.classList.remove('hidden-section')
  observer.unobserve(entry.target)
}

const sectionsObserver = new IntersectionObserver(scrollReveal, {
  root: null,
  threshold: 0.15,
})

hiddenSections.forEach(section => {
  section.classList.add('hidden-section')
  sectionsObserver.observe(section)
})
