const inputText = document.querySelector('#inputText');
const duplicateField = document.querySelector('#duplicateField');
const consoleButton = document.querySelector('#consoleButton');

inputText.addEventListener('input', (event) => {
    duplicateField.textContent = event.target.value;
})

consoleButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(inputText.value);
    inputText.value = '';
    duplicateField.textContent = '';
})
