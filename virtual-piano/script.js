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
            pianoKeys.forEach(key => {
                key.classList.remove('letters');
                key.classList.add('notes')
            })
            break;
        case 'Letters':
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

fullscreenBtn.addEventListener("click", () => {
    toggleFullScreen();
});

const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

const startSound = (e) => {
    e.target.classList.add('piano-key-active-pseudo', 'piano-key-active');
    playNotes(e);
}

const stopSound = (e) => {
    e.target.classList.remove('piano-key-active-pseudo', 'piano-key-active');
}

const play = (evt) => {
    startSound(evt);
    piano.addEventListener('mouseover', startSound);
    piano.addEventListener('mouseout', stopSound);
}

const stop = (evt) => {
    stopSound(evt);
    piano.removeEventListener('mouseover', startSound);
    piano.removeEventListener('mouseout', stopSound);
}

piano.addEventListener('mousedown', (e) => {
    play(e);
}, false)

window.addEventListener('mouseup', (e) => {
    stop(e);
})

const designKey = (key) => {
    pianoKeys.forEach(el => {
        let elemAttribute = el.getAttribute('data-letter');
        if (elemAttribute == key.code.slice(-1) && key.type === 'keydown') {
            el.classList.add('piano-key-active-pseudo', 'piano-key-active');
        } else el.classList.remove('piano-key-active-pseudo', 'piano-key-active');
    })
}

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    designKey(e);
    playNotes(e);
})

document.addEventListener('keyup', (e) => {
    designKey(e);
})

const playNotes = (key) => {
    let sound = new Audio();
    let keySound;

    if (key.type == 'mousedown' || key.type == 'mouseover') {
        keySound = key.target.getAttribute('data-letter');
        keyNote = key.target.getAttribute('data-note');
        sound = new Audio(`./assets/audio/${keyNote}.mp3`);
    } else if (key.type == 'keydown') {
        keySound = key.code.slice(-1);
        pianoKeys.forEach(el => {
            let elemAttribute = el.getAttribute('data-letter');
            let note = el.getAttribute('data-note');
            if (elemAttribute == keySound) {
                sound = new Audio(`./assets/audio/${note}.mp3`);
            }
        })
    };
    sound.currentTime = 0;
    sound.play();
}