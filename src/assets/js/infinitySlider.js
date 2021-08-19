export function init(targetSlider) {
  targetSlider.element.style.transform = `translateX(-100%)`;
}

export function onClickNextBtn(targetSlider) {
  targetSlider.element.classList.add("transition");
  targetSlider.moveToRight = true;
  targetSlider.element.style.transform = `translateX(-${
    100 +
    (100 / targetSlider.numberItemsOnScreen) *
      (targetSlider.infSliderCounter + 1)
  }%)`;
}

export function onClickPrevBtn(targetSlider) {
  targetSlider.element.classList.add("transition");
  targetSlider.moveToRight = false;
  targetSlider.element.style.transform = `translateX(-${
    100 +
    (100 / targetSlider.numberItemsOnScreen) *
      (targetSlider.infSliderCounter - 1)
  }%)`;
}

export function onTransitionEnd(targetSlider) {
  if (targetSlider.moveToRight) {
    targetSlider.infSliderCounter++;
  } else {
    targetSlider.infSliderCounter--;
  }

  if (
    targetSlider.infSliderCounter ===
    targetSlider.items.length - 2 * targetSlider.numberItemsOnScreen
  ) {
    targetSlider.element.classList.remove("transition");
    targetSlider.element.style.transform = `translateX(-100%)`;
    targetSlider.infSliderCounter = 0;
  }

  if (targetSlider.infSliderCounter === targetSlider.numberItemsOnScreen * -1) {
    targetSlider.element.classList.remove("transition");
    targetSlider.element.style.transform = `translateX(-${
      100 +
      (100 / targetSlider.numberItemsOnScreen) *
        (targetSlider.items.length - 3 * targetSlider.numberItemsOnScreen)
    }%)`;
    targetSlider.infSliderCounter =
      targetSlider.items.length - 3 * targetSlider.numberItemsOnScreen;
  }
}
