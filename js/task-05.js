const input = document.querySelector('#name-input');
const head = document.querySelector('#name-output');


input.addEventListener('input', onInputChange);


function onInputChange(input) {
    if (!input.currentTarget.value) {
    return head.textContent = 'Anonymous';
    }
    
    head.textContent = input.currentTarget.value;
}