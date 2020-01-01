const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours(), 
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    const currentTime = `
    ${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10 ? `0${seconds}` : seconds}`;
    clockTitle.innerHTML = currentTime;
}

function init() {
    getTime();
}

init();