function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('button.change-color');
const spanEl = document.querySelector('span.color');
btnEl.addEventListener('click', onButtonClickChangeColor);



function onButtonClickChangeColor () {
const color = getRandomHexColor();
document.body.setAttribute('style', `background-color: ${color}`);
spanEl.textContent = color;
};