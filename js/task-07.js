const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');


input.addEventListener('input', onInputChange)

// console.log(input.min);

function onInputChange(event) {
    span.style.fontSize = `${event.currentTarget.value}px`;
}
