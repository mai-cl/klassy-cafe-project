const mainSlider = document.getElementById('main-slider');
const mainSliderPrevBtn = document.getElementById('main-slider-prev-btn');
const mainSliderNextBtn = document.getElementById('main-slider-next-btn');
const imgs = mainSlider.getElementsByTagName('img');
/* const autoSlideInterval = setInterval(() => {
    nextImgCounter();
    moveAllImgs();
}, 5000); */
let counter = 0;

function onNextBtnClick() {
    nextImgCounter();
    moveAllImgs();
    //resetInterval()
}

function onPrevBtnClick() {
    prevImgCounter();
    moveAllImgs();
    //resetInterval();
}

/* function resetInterval() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        nextImgCounter();
        moveAllImgs();
    },5000);
} */

function nextImgCounter() {
    if (counter === imgs.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
}

function prevImgCounter() {
    if (counter === 0) {
        counter = imgs.length - 1;
    } else {
        counter--;
    }
}

function moveAllImgs() {
    for(let img of imgs) {
        img.style.transform = `translateX(-${100 * counter}%)`;
    }
}

mainSliderNextBtn.addEventListener('click', onNextBtnClick);
mainSliderPrevBtn.addEventListener('click', onPrevBtnClick);