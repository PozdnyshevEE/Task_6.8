const consoleLog = document.querySelector('#consoleLog');
const alertLog = document.querySelector('#alert');
const promptLog = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль');
});

alertLog.addEventListener('click', () => {
    alert('Метод показывает диалоговое окно с опциональным сообщением и кнопкой OK');
});

promptLog.addEventListener('click', () => {
    alert('Метод отображает диалоговое окно с необязательным запросом на ввод текста');
});