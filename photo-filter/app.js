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
  console.log(this.dataset);
  this.nextElementSibling.value = this.value;
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${this.dataset.sizing}`
  );
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
  document.documentElement.style = '';
}

btnReset.addEventListener('click', reset);

const buttonLoadPicture = document.querySelector('input[type=file]');
const editor = document.querySelector('.editor');
const imageContainer = editor.children[1];

function loadImg() {
  const file = buttonLoadPicture.files[0];
  const reader = new FileReader();
  // console.log(buttonLoadPicture.files);
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    editor.replaceChild(img, imageContainer);
    editor.append(img);
  };
  reader.readAsDataURL(file);
}

buttonLoadPicture.addEventListener('change', loadImg);

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
