import { elements } from './base'

function smoothScrollTo(targetElement) {
  const topCoord = targetElement.getBoundingClientRect().top
  window.scrollTo({
    left: 0,
    top: topCoord + window.pageYOffset - elements.header.clientHeight,
    behavior: 'smooth',
  })
}

export function smoothScrolling(triggerElement, targetElement) {
  triggerElement.addEventListener('click', e => {
    e.preventDefault()
    smoothScrollTo(targetElement)
  })
}
