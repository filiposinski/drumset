window.addEventListener('keydown', playSound);

const buttonPressed = document.querySelectorAll('.drum__button');
buttonPressed.forEach(key => key.addEventListener('transitionend', removeTransition));


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    let code = `${e.keyCode}`;
    console.log(code);
    if (code == 81 || code == 87 || code == 69) {
        button.classList.add('playing__orange');

    }

    if (code == 65 || code == 83 || code == 68) {
        button.classList.add('playing__cyan');
    }

    if (code == 90 || code == 88 || code == 67) {
        button.classList.add('playing__pink');
    }
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing__orange');
    this.classList.remove('playing__cyan');
    this.classList.remove('playing__pink');
}

const buttonClick = document.querySelectorAll('.drum__button--js');
buttonClick.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.key;
        const audio = document.querySelector(`audio[data-key="${value}"]`);
        const button = document.querySelector(`button[data-key="${value}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        let code = `${value}`;
        if (code == 81 || code == 87 || code == 69) {
            button.classList.add('playing__orange');

        }

        if (code == 65 || code == 83 || code == 68) {
            button.classList.add('playing__cyan');
        }

        if (code == 90 || code == 88 || code == 67) {
            button.classList.add('playing__pink');
        }
    });
});