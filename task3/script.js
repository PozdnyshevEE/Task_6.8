// Объявляем переменную с постоянным значением.

const trafficLightGreen = document.querySelector('#trafficLight');
const trafficLightYellow = document.querySelector('#trafficLight1');
const trafficLightRed = document.querySelector('#trafficLight2');

trafficLightRed.addEventListener('click', makeRed);
function makeRed() {
    
    // Меняем цвет Div-ов

    trafficLightRed.style.background = ('red');
    trafficLightYellow.style.background = ('black');
    trafficLightGreen.style.background = ('black');

    // Удаляем обработчик события, который был ранее зарегистрирован

    trafficLightGreen.removeEventListener('click', makeRed);
    trafficLightYellow.removeEventListener('click', makeRed);
    trafficLightRed.removeEventListener('click', makeRed);

    // Регистрируем обработчик события

    trafficLightGreen.addEventListener('click', makeGreen);
    trafficLightYellow.addEventListener('click', makeGreen);
    trafficLightRed.addEventListener('click', makeGreen);
}

trafficLightYellow.addEventListener('click', makeYellow);
function makeYellow() {

    // Меняем цвет Div-ов

    trafficLightYellow.style.background = ('yellow');
    trafficLightGreen.style.background = ('black');
    trafficLightRed.style.background = ('black');

    // Удаляем обработчик события, который был ранее зарегистрирован

    trafficLightGreen.removeEventListener('click', makeYellow);
    trafficLightYellow.removeEventListener('click', makeYellow);
    trafficLightRed.removeEventListener('click', makeYellow);

    // Регистрируем обработчик события

    trafficLightGreen.addEventListener('click', makeRed);
    trafficLightYellow.addEventListener('click', makeRed);
    trafficLightRed.addEventListener('click', makeRed);
}

trafficLightGreen.addEventListener('click', makeGreen);
function makeGreen() {

    // Меняем цвет Div-ов

    trafficLightGreen.style.background = ('green');
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('black');

    // Удаляем обработчик события, который был ранее зарегистрирован

    trafficLightGreen.removeEventListener('click', makeGreen);
    trafficLightYellow.removeEventListener('click', makeGreen);
    trafficLightRed.removeEventListener('click', makeGreen);

    // Регистрируем обработчик события

    trafficLightGreen.addEventListener('click', makeYellow);
    trafficLightYellow.addEventListener('click', makeYellow);
    trafficLightRed.addEventListener('click', makeYellow);
}