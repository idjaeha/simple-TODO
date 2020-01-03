const body = document.querySelector("body");

const IMAGE_NUM = 3;

function paintImage(randomNum) {
    const image = new Image();
    image.src = `public/images/${randomNum}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    return Math.ceil(Math.random() * IMAGE_NUM);
}

function init() {
    const randomNum = genRandom();
    paintImage(randomNum);
}

init();