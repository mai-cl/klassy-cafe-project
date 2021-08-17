const slider = document.getElementById("menu-slider")
const items = Array.from(slider.querySelectorAll(".cake-card-item"))
const prevBtn = document.getElementById("our-menu-slider-prev-btn")
const nextBtn = document.getElementById("our-menu-slider-next-btn")
let infSliderCounter = 0
const numberItemsOnScreen = 5
let moveToRight = null
    
function getItemWidthOnScreen() {
    return items[0].clientWidth
}

function getMarginRight() {
    return parseInt(window.getComputedStyle(items[0]).marginRight.replace("px", ""), 10)
}

function calcOffset() {
    return 100 / numberItemsOnScreen
}

function init() {
    slider.style.transform = `translateX(-100%)`
}

init()

nextBtn.addEventListener("click", e => {
    if (infSliderCounter === 0 || infSliderCounter === numberItemsOnScreen - 1) slider.classList.add("transition")
    moveToRight = true
    slider.style.transform = `translateX(-${100 + (calcOffset() * (infSliderCounter + 1))}%)`
})

prevBtn.addEventListener("click", e => {
    if (infSliderCounter === 0 || infSliderCounter === numberItemsOnScreen - 1) slider.classList.add("transition")
    moveToRight = false
    slider.style.transform = `translateX(-${100 + (calcOffset() * (infSliderCounter - 1))}%)`
})

slider.addEventListener("transitionend", e => {
    if (e.target !== slider) return
    if (moveToRight) {
        infSliderCounter++
    } else {
        infSliderCounter--
    }

    console.log("counter", infSliderCounter)

    if (infSliderCounter === items.length - (2 * numberItemsOnScreen)) {
        slider.classList.remove("transition")
        slider.style.transform = `translateX(-100%)`
        infSliderCounter = 0
    }

    if (infSliderCounter === (numberItemsOnScreen * -1)) {
        slider.classList.remove("transition")
        slider.style.transform = `translateX(-${100 + (calcOffset() * (items.length - (3 * numberItemsOnScreen)))}%)`
        infSliderCounter = numberItemsOnScreen - 1
    }

})


