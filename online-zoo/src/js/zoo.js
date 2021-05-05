const accordionBtns = document.querySelectorAll('.facts-accordion__btn');
const accordionBtnsMinus = document.querySelectorAll('.facts-accordion__btn-minus');
const accordionBtnsPlus = document.querySelectorAll('.facts-accordion__btn-plus');
const accordionItems = document.querySelectorAll('.facts-accordion__item');
const accordionPanels = document.querySelectorAll('.facts-accordion__panel');

accordionItems.forEach((x, i) => {
  x.firstElementChild.addEventListener('click', () => {
    accordionItems[i].classList.toggle('facts-accordion__item--active');
    accordionBtns[i].classList.toggle('facts-accordion__btn--active');
    accordionBtnsMinus[i].classList.toggle('facts-accordion__btn-minus--active');
    accordionBtnsPlus[i].classList.toggle('facts-accordion__btn-plus--active');
    accordionPanels[i].classList.toggle('facts-accordion__panel--active');
  });
});

const otherCamsList = document.querySelector('.other-cams__list');
const mainCamVideoIframe = document.querySelector('.main-cam__video').children[0];

otherCamsList.addEventListener('click', (evt) => {
  if (evt.target.tagName === 'BUTTON') {
    const otherCamsListIframe = evt.target.parentNode.previousElementSibling;
    const srcIframeSrc = otherCamsListIframe.getAttribute('src');
    const mainCamVideoIframeSrc = mainCamVideoIframe.getAttribute('src');
    mainCamVideoIframe.setAttribute('src', `${srcIframeSrc}`);
    otherCamsListIframe.setAttribute('src', `${mainCamVideoIframeSrc}`);
  }
});
