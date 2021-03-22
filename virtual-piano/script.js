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
        let = elemAttribute = el.getAttribute('data-letter');
        console.log(key.type);
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
    } else if (key.type == 'keydown') {
        keySound = key.code.slice(-1)
    };

    switch (keySound) {
        case 'D':
            sound = new Audio('./assets/audio/c.mp3')
            break;
        case 'F':
            sound = new Audio('./assets/audio/d.mp3')
            break;
        case 'G':
            sound = new Audio('./assets/audio/e.mp3')
            break;
        case 'H':
            sound = new Audio('./assets/audio/f.mp3')
            break;
        case 'J':
            sound = new Audio('./assets/audio/g.mp3')
            break;
        case 'K':
            sound = new Audio('./assets/audio/a.mp3')
            break;
        case 'L':
            sound = new Audio('./assets/audio/b.mp3')
            break;
        case 'R':
            sound = new Audio('./assets/audio/c♯.mp3')
            break;
        case 'T':
            sound = new Audio('./assets/audio/d♯.mp3')
            break;
        case 'U':
            sound = new Audio('./assets/audio/f♯.mp3')
            break;
        case 'I':
            sound = new Audio('./assets/audio/g♯.mp3')
            break;
        case 'O':
            sound = new Audio('./assets/audio/a♯.mp3')
            break;
        default:
            break;
    }
    sound.currentTime = 0;
    sound.play();
}