const inputText = document.querySelector('#inputText');
const duplicateField = document.querySelector('#duplicateField');
const consoleButton = document.querySelector('#consoleButton');

inputText.addEventListener('input', (event) => {
    
    duplicateField.textContent = event.target.value;
})

consoleButton.addEventListener('click', (event) => {
    let textConsole = event.target.value;
    console.log(textConsole);
    inputText.value = '';
    duplicateField.textContent = '';
})