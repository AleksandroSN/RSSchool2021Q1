const burgerMenu = document.querySelector('.burger');
const headernav = document.querySelector('.header-nav');

burgerMenu.addEventListener('click', () => {
    headernav.classList.toggle('active');
})

const slider = document.querySelector('.articles-slider');
const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.articles-slider__item');
const sliderButtonLeft = document.querySelector('.slider__button--left');
const sliderButtonRight = document.querySelector('.slider__button--right');
let arr = [...Array(sliderItems.length).keys()];
let screenWidth = window.innerWidth;

// let currentSlider = 0;

// window.addEventListener('resize', function () {
//     screenWidth = window.innerWidth;
//     if (screenWidth > 1279) {
//         arr = [...Array(sliderItems.length).keys()];
//     } else if (screenWidth <= 1200 && screenWidth > 769) {
//         arr = [...Array(sliderItems.length - 1).keys()];
//     } else if (screenWidth <= 768) {
//         arr = [...Array(sliderItems.length - 2).keys()];
//     }
// })

function moveLeft() {
    const itemWidth = Math.floor(window.getComputedStyle(sliderItems[0]).width.replace(/([a-z])\w+/g, ""));
    const gap = Math.floor(window.getComputedStyle(slider).gap.replace(/([a-z])\w+/g, ""));
    // sliderItems[arr[1]].style.display = "none";
    // sliderItems[arr[2]].style.display = "block";


    // currentSlider = (currentSlider + 1) % sliderItems.length;
    arr.unshift(arr.pop());
    for (let i = 0; i < arr.length; i++) {
        let x = i - arr[i];
        // console.log(`arr -> ${arr[i]}`);
        // console.log(`x -> ${x}`);
        // if (i === arr.length - 1) {
        //     sliderItems[arr[i]].style.left = `-${i * (itemWidth + gap)}px`
        // } else {
        sliderItems[arr[i]].style.left = `${(itemWidth + gap) * x}px`;
        // }
    }



    // console.log('work');
}

function moveRight() {
    const itemWidth = Math.floor(window.getComputedStyle(sliderItems[0]).width.replace(/([a-z])\w+/g, ""));
    const gap = Math.floor(window.getComputedStyle(slider).gap.replace(/([a-z])\w+/g, ""));
    // sliderItems[arr[1]].style.display = "none";
    // sliderItems[arr[2]].style.display = "block";


    // currentSlider = (currentSlider + 1) % sliderItems.length;
    arr.push(arr.shift());
    for (let i = 0; i < arr.length; i++) {
        let x = i - arr[i];
        // console.log(`arr -> ${arr[i]}`);
        // console.log(`x -> ${x}`);
        // if (i === arr.length - 1) {
        //     sliderItems[arr[i]].style.left = `-${i * (itemWidth + gap)}px`
        // } else {
        sliderItems[arr[i]].style.left = `${(itemWidth + gap) * x}px`;
        // }
    }



    // console.log('work');
}

sliderButtonRight.addEventListener('click', function () {
    moveLeft();
});

sliderButtonLeft.addEventListener('click', function () {
    moveRight();
});