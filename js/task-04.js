



const btnDecrease = document.querySelector('[data-action = "decrement"]');
const btnIncrease = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

console.log(btnIncrease);

btnDecrease.addEventListener('click', onBtnDecreaseClick);
btnIncrease.addEventListener('click', onBtnIncreaseClick);


let counterValue = 0;

function onBtnDecreaseClick () {
    counterValue--;
   value.textContent = counterValue;
}

function onBtnIncreaseClick () {
    counterValue++;
    value.textContent = counterValue;
}

