const linkText = document.querySelector('#linkModify');

linkText.addEventListener('click', (event) => {
    event.preventDefault();
    linkText.textContent = prompt('Введите текст ссылки:');
})