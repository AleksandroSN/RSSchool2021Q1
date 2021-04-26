const fullScreenBtn = document.querySelector('.fullscreen');
const main = document.querySelector('main');
const fragment = document.createDocumentFragment();
const inputs = document.querySelectorAll('input[type=range]');
const outputs = document.querySelectorAll('output');

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

fullScreenBtn.addEventListener('click', toggleFullScreen);

function inputValue() {
  console.log(this.value);
  console.log(this.nextElementSibling);
  this.nextElementSibling.value = this.value;
}

inputs.forEach((input) => input.addEventListener('input', inputValue));

const btnReset = document.querySelector('.btn-reset');

function reset() {
  inputs.forEach((input) => {
    if (input.name === 'saturate') {
      input.value = 100;
      input.nextElementSibling.value = input.value;
    } else {
      input.value = 0;
      input.nextElementSibling.value = input.value;
    }
  });
}

btnReset.addEventListener('click', reset);

// function renderCanvas() {
//   const canvas = document.createElement('canvas');
//   canvas.id = 'img';
//   const ctx = canvas.getContext('2d');
//   ctx.fillStyle = 'green';
//   ctx.fillRect(10, 10, 100, 100);
//   fragment.appendChild(canvas);
//   main.appendChild(fragment);
// }

// renderCanvas();
