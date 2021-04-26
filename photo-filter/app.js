const fullScreenBtn = document.querySelector('.fullscreen');
const inputs = document.querySelectorAll('input[type=range]');

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
    input.value = input.defaultValue;
    input.nextElementSibling.value = input.value;
  });
  document.documentElement.style = '';
}

btnReset.addEventListener('click', reset);

const buttonLoadPicture = document.querySelector('input[type=file]');
const editor = document.querySelector('.editor');
const imageContainer = editor.lastElementChild;

function loadImg() {
  const file = buttonLoadPicture.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    imageContainer.src = reader.result;
  };
  reader.readAsDataURL(file);
  buttonLoadPicture.value = null;
}

buttonLoadPicture.addEventListener('change', loadImg);

const nextImg = document.querySelector('.btn-next');
const baseURL =
  'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
let startNumber = 0;

function newUrl() {
  imageContainer.src = '';
  const date = new Date();
  const hours = date.getHours();

  let urlResult = '';
  let urlOnTime = '';
  if (hours >= 6 && hours <= 12) {
    urlOnTime = baseURL + 'morning/';
  } else if (hours >= 12 && hours <= 18) {
    urlOnTime = baseURL + 'day/';
  } else if (hours >= 18 && hours <= 24) {
    urlOnTime = baseURL + 'evening/';
  } else urlOnTime = baseURL + 'nigth/';

  startNumber = ((startNumber + 20) % 20) + 1;
  startNumber >= 10
    ? (urlResult = urlOnTime + `${startNumber}.jpg`)
    : (urlResult = urlOnTime + `0${startNumber}.jpg`);

  imageContainer.src = urlResult;
}

nextImg.addEventListener('click', newUrl);

const savePictureBtn = document.querySelector('.btn-save');

function downloadImg() {
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = imageContainer.src;
  img.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.filter = getComputedStyle(imageContainer).filter;
    ctx.drawImage(img, 0, 0);

    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  };
}

savePictureBtn.addEventListener('click', downloadImg);
