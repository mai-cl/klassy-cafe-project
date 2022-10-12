export function init(targetSlider) {
  targetSlider.element.style.transform = `translateX(-100%)`
}

export function onClickNextBtn(targetSlider) {
  targetSlider.element.classList.add('transition')
  targetSlider.moveToRight = true
  targetSlider.element.style.transform = `translateX(-${
    100 +
    (100 / targetSlider.numberItemsOnScreen) * (targetSlider.stepCounter + 1)
  }%)`
}

export function onClickPrevBtn(targetSlider) {
  targetSlider.element.classList.add('transition')
  targetSlider.moveToRight = false
  targetSlider.element.style.transform = `translateX(-${
    100 +
    (100 / targetSlider.numberItemsOnScreen) * (targetSlider.stepCounter - 1)
  }%)`
}

export function onTransitionEnd(targetSlider) {
  targetSlider.moveToRight
    ? targetSlider.stepCounter++
    : targetSlider.stepCounter--

  if (
    targetSlider.stepCounter ===
    targetSlider.items.length - 2 * targetSlider.numberItemsOnScreen
  ) {
    //To start
    targetSlider.element.classList.remove('transition')
    targetSlider.element.style.transform = `translateX(-100%)`
    targetSlider.stepCounter = 0
  }

  if (targetSlider.stepCounter === targetSlider.numberItemsOnScreen * -1) {
    //To end
    targetSlider.element.classList.remove('transition')
    targetSlider.element.style.transform = `translateX(-${
      100 +
      (100 / targetSlider.numberItemsOnScreen) *
        (targetSlider.items.length - 3 * targetSlider.numberItemsOnScreen)
    }%)`
    targetSlider.stepCounter =
      targetSlider.items.length - 3 * targetSlider.numberItemsOnScreen
  }
}
