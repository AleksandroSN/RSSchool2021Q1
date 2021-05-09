import { createAnimalCard } from './utils/newAnimal';

const tooltipIndex = document.querySelector('.sixth-screen__tooltip-container');
const mapIndex = document.querySelector('.sixth-screen__map');
const animalPins = document.querySelectorAll('.sixth-screen__map-pin');
const mapSlider = document.querySelector('.sixth-screen__slider');

mapIndex.addEventListener('click', (evt) => {
  if (evt.target.id || evt.target.tagName === 'use') {
    animalPins.forEach((pin) => pin.classList.remove('active'));
    const topParent = evt.path.find((el) => el.classList.contains('sixth-screen__map-pin'));
    const animal = topParent.id;
    tooltipIndex.innerHTML = '';
    createAnimalCard(tooltipIndex, animal);
    topParent.classList.add('active');
  }
});

mapSlider.addEventListener('click', (evt) => {
  if (evt.target.id || evt.target.tagName === 'use') {
    const topParent = evt.path.find((el) => el.classList.contains('sixth-screen__slider-item'));
    const animal = topParent.id;
    tooltipIndex.innerHTML = '';
    createAnimalCard(tooltipIndex, animal);
  }
});

const feedbackBtn = document.querySelector('.thifth-screen__testimonials-btn');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const feedbackWrapper = document.querySelector('.feedback');
const feedbackForm = document.querySelector('#feedback-form');
const inputName = document.querySelector('#feedback-name__input');
const inputEmail = document.querySelector('#feedback-email__input');
const inputText = document.querySelector('#feedback-text__input');
const inputSubmit = document.querySelector('.feedback-btn');

const checkValidity = () => {
  if (
    inputName.validity.valid &&
    inputEmail.validity.valid &&
    inputText.textLength !== 0 &&
    inputText.textLength <= 280
  ) {
    inputSubmit.classList.add('feedback-btn--success');
  } else {
    inputSubmit.classList.remove('feedback-btn--success');
  }
};

const closePopup = () => {
  overlay.classList.remove('overlay-show');
  feedbackWrapper.classList.remove('feedback-show');
  body.classList.remove('scroll-block');
  inputSubmit.classList.remove('feedback-btn--success');
  feedbackForm.reset();
};

inputName.addEventListener('input', () => {
  checkValidity();
});
inputEmail.addEventListener('input', () => {
  checkValidity();
});
inputText.addEventListener('input', () => {
  checkValidity();
});

feedbackBtn.addEventListener('click', () => {
  overlay.classList.add('overlay-show');
  feedbackWrapper.classList.add('feedback-show');
  body.classList.add('scroll-block');
});

overlay.addEventListener('click', closePopup);

feedbackForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  alert(`Thanks for your feedback, ${inputName.value}`);
  closePopup();
});

const burgerMenu = document.querySelector('.header-burger__svg');
const headerNav = document.querySelector('.header-nav');

burgerMenu.addEventListener('click', () => {
  headerNav.classList.toggle('header-nav--show');
  body.classList.toggle('scroll-block');
});

const navSlider = document.querySelector('.third-screen__navigation');
const sliderContainer = document.querySelector('.third-screen__carousel');
const navItems = document.querySelectorAll('.carousel-card');

navItems.forEach((card) => {
  const item = card;
  item.style.transform = 'translateX(0)';
});
let step = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function cloneSliderItem(container) {
  const navItemsTemp = Array(...navItems);
  shuffle(navItemsTemp);
  const fragment = document.createDocumentFragment();
  navItemsTemp.forEach((x) => {
    const clone = x.cloneNode(true);
    fragment.appendChild(clone);
  });
  container.append(fragment);
}
// function cloneSliderItemInTheBegin(container) {
//   const navItemsTemp = Array(...navItems);
//   shuffle(navItemsTemp);
//   const fragment = document.createDocumentFragment();
//   navItemsTemp.forEach((x) => {
//     const clone = x.cloneNode(true);
//     fragment.appendChild(clone);
//   });
//   container.prepend(fragment);
// }

for (let i = 0; i < 3; i += 1) {
  cloneSliderItem(sliderContainer);
}

const navItemsModify = document.querySelectorAll('.carousel-card');
// sliderContainer.style.width = `${17 * 328}px`; // width for 30 slide-items
// 368px -> width slider item + gap
navSlider.addEventListener('click', (evt) => {
  const navArrow = evt.target.closest('.navigation-arrow');
  if (navArrow.classList.contains('arrow--left')) {
    if (step >= 0) {
      step = -15;
      navItemsModify.forEach((card) => {
        const item = card;
        item.style.transform = 'translateX(0px)';
      });
    }
    console.log(step);
    step += 3;
    navItemsModify.forEach((card) => {
      const item = card;
      item.style.transform = `translateX(${368 * step}px)`;
    });
  } else if (navArrow.classList.contains('arrow--right')) {
    console.log(step);
    step -= 3;
    navItemsModify.forEach((card) => {
      const item = card;
      item.style.transform = `translateX(${368 * step}px)`;
    });
    if (step <= -15) {
      step = 0;
      navItemsModify.forEach((card) => {
        const item = card;
        item.style.transform = 'translateX(0px)';
      });
    }
  }
});

let startPos = 0;
const navTimeoutSlideContainer = document.querySelector('.thifth-screen__reviews-slider');
const navTimeoutSlideBtnsCon = document.querySelector('.thifth-screen__reviews-slider-nav');
const navTimeoutSlideItems = document.querySelectorAll('.thifth-screen__reviews-slider__item');
const navTimeoutSliderBtns = document.querySelectorAll('#thifth-screen__reviews-slider-btn');
const navTimeoutSlideItemsWidth = document.querySelector('.thifth-screen__reviews-slider__item')
  .offsetWidth;
const gap = 40;

const widthMovedItem = navTimeoutSlideItemsWidth + gap;

function moveItem(item, pos) {
  item.style.transform = `translateX(${widthMovedItem * pos}px)`;
}

function nextSlide() {
  startPos -= 1;
  if (startPos <= -4) {
    startPos = 0;
  }
  moveItem(navTimeoutSlideContainer, startPos);
}

navTimeoutSlideBtnsCon.addEventListener('click', (evt) => {
  const navArrow = evt.target.closest('.navigation-arrow');
  if (navArrow.classList.contains('arrow--left')) {
    console.log(startPos);
    startPos += 1;
    if (startPos >= 0) {
      startPos = 0;
    }
    moveItem(navTimeoutSlideContainer, startPos);
  } else if (navArrow.classList.contains('arrow--right')) {
    console.log(startPos);
    nextSlide();
  }
});

let autoInterval = null;
function startSlider() {
  clearInterval(autoInterval);
  autoInterval = setInterval(nextSlide, 10000);
}
startSlider();

function pauseSlider(items, pause = 10000) {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      clearInterval(autoInterval);
      setTimeout(startSlider, pause);
    });
  });
}

pauseSlider(navTimeoutSlideItems);
pauseSlider(navTimeoutSliderBtns);
