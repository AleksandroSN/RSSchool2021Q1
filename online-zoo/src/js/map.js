import { createAnimalCard } from './utils/newAnimal';

const tooltip = document.querySelector('.map-mode');
const tooltipContainer = document.querySelector('.sixth-screen__tooltip-container');
const main = document.querySelector('.main');
const pins = document.querySelectorAll('.map-mode__pin');

main.addEventListener('click', (evt) => {
  if (!evt.target.id) {
    tooltipContainer.style.opacity = '0';
    tooltip.style.zIndex = '-10';
    tooltipContainer.id = '';
    pins.forEach((pin) => pin.classList.remove('active'));
  }
  if (evt.target.id || evt.target.tagName === 'use') {
    if (tooltipContainer.id === evt.target.id) return;
    pins.forEach((pin) => pin.classList.remove('active'));
    // find width top parent(pin's)
    const topParent = evt.path.find((el) => el.classList.contains('map-mode__pin'));
    topParent.classList.add('active');
    // find offset and coords top parent(pin's)
    const widthTopParent = topParent.offsetWidth;
    const heigthTopParent = topParent.offsetHeight;
    const topCoordsTopParent = topParent.offsetTop;
    const LeftCoordsTopParent = topParent.offsetLeft;
    // find coords tooltip
    const tooltipWidth = tooltipContainer.offsetWidth;
    // find click coords
    const clickX = evt.clientX;
    if (clickX >= 900) {
      tooltip.style.left = `${LeftCoordsTopParent - tooltipWidth - widthTopParent / 2}px`;
      tooltip.style.top = `${topCoordsTopParent - heigthTopParent}px`;
    } else if (clickX < 900) {
      if (clickX < 60) {
        // 90px width aside and heigth header
        tooltip.style.left = `${LeftCoordsTopParent + widthTopParent + 90}px`;
        tooltip.style.top = `${topCoordsTopParent - heigthTopParent + 90}px`;
      } else {
        tooltip.style.left = `${LeftCoordsTopParent + widthTopParent}px`;
        tooltip.style.top = `${topCoordsTopParent - heigthTopParent}px`;
      }
    }
    tooltipContainer.style.opacity = '1';
    tooltip.style.zIndex = '10';
    const animal = topParent.id;
    //
    tooltipContainer.id = animal;
    tooltipContainer.innerHTML = '';

    createAnimalCard(tooltipContainer, animal);
  }
});
