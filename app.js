const dino   = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');

document.addEventListener('keydown', (event) => {
    jump();
});

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    } 
    setTimeout( function() {
        dino.classList.remove('jump');
    }, 400);
}

let isAlive = setInterval ( function() {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    let cactusRight = parseInt(window.getComputedStyle(cactus).getPropertyValue('right'));

    if (cactusRight > 660 && cactusRight < 700 && dinoBottom <= 30) {
        alert('GAME OVER!!!');
        window.getComputedStyle(cactus).setProperty('right', 10);
    }
}, 10);