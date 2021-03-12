const burgerMenu = document.querySelector('.burger');
const headernav = document.querySelector('.header-nav');

burgerMenu.addEventListener('click', () => {
    headernav.classList.toggle('active');
})