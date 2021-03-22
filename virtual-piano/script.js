const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const btnContainer = document.querySelector('.btn-container');
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
class Piano {
    constructor(keys, piano, btnContainer) {
        this.keys = keys;
        this.pianoBoard = piano;
        this.btnContainer = btnContainer;
        this.isPressed = false;
    }

    removeActiveBtn() {
        const btn = document.querySelectorAll('.btn');
        btn.forEach(elem => {
            elem.classList.remove('btn-active');
        })
    }

    changeNotesLettes(text) {
        this.removeActiveBtn();
        text.target.classList.add('btn-active');
        const btnText = text.target.innerText;

        switch (btnText) {
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
    }

    playNotes(key) {
        let sound = new Audio();
        let keySound;
        let keyNote;

        if (key.type == 'mousedown' || key.type == 'mouseover') {
            keySound = key.target.getAttribute('data-letter');
            keyNote = key.target.getAttribute('data-note');
            if (!keyNote) return;
            sound = new Audio(`./assets/audio/${keyNote}.mp3`);
        } else if (key.type == 'keydown') {
            keySound = key.code.slice(-1);
            this.keys.forEach(el => {
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

    addClassActive(key) {
        key.target.classList.add('piano-key-active-pseudo', 'piano-key-active');
    }

    removeClassActive(key) {
        key.target.classList.remove('piano-key-active-pseudo', 'piano-key-active');
    }

    designKey(key) {
        this.keys.forEach(el => {
            let elemAttribute = el.getAttribute('data-letter');
            if (elemAttribute == key.code.slice(-1) && key.type === 'keydown') {
                el.classList.add('piano-key-active-pseudo', 'piano-key-active');
            } else el.classList.remove('piano-key-active-pseudo', 'piano-key-active');
        })
    }

    startMouseDown(evt) {
        this.addClassActive(evt);
        this.isPressed = true;
        this.playNotes(evt);
    }

    startMouseOver(evt) {
        if (this.isPressed) {
            this.playNotes(evt);
            this.addClassActive(evt);
        }
    }

    init() {
        this.btnContainer.addEventListener('click', (evt) => {
            this.changeNotesLettes(evt);
        });
        document.addEventListener('keydown', (evt) => {
            if (evt.repeat) return;
            this.designKey(evt);
            this.playNotes(evt);
        });
        document.addEventListener('keyup', (evt) => {
            this.designKey(evt);
        });
        this.pianoBoard.addEventListener('mousedown', (evt) => {
            this.startMouseDown(evt);
        }, false);
        this.pianoBoard.addEventListener('mouseup', (evt) => {
            this.removeClassActive(evt);
        });
        this.pianoBoard.addEventListener('mouseover', (evt) => {
            this.startMouseOver(evt);
        });
        this.pianoBoard.addEventListener('mouseout', (evt) => {
            this.removeClassActive(evt);
        });
        window.onmouseup = () => {
            this.isPressed = false;
        }
    }
}

const pianoActive = new Piano(pianoKeys, piano, btnContainer);
pianoActive.init();