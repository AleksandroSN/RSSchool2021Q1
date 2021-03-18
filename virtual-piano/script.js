const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const btn = document.querySelectorAll('.btn');
const btnContainer = document.querySelector('.btn-container');

const removeAtiveBtn = () => {
    btn.forEach(elem => {
        elem.classList.remove('btn-active');
    })
}
btnContainer.addEventListener('click', (e) => {
    removeAtiveBtn();
    e.target.classList.add('btn-active');

    switch (e.target.innerText) {
        case 'Notes':
            console.log(e.target.innerText);
            pianoKeys.forEach(key => {
                key.classList.remove('letters');
                key.classList.add('notes')
            })
            break;
        case 'Letters':
            console.log(e.target.innerText);
            pianoKeys.forEach(key => {
                key.classList.remove('notes');
                key.classList.add('letters')
            })
            break;

        default:
            break;
    }
})

const fullscreenBtn = document.querySelector('.fullscreen');

fullscreenBtn.addEventListener("click", (e) => {
    toggleFullScreen();

}, false);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

piano.addEventListener('click', (e) => {
    console.log(e.target);
})