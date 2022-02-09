const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const ListEl = document.querySelector(`ul`);


const makeIngredients = (ingredients) => {

return ingredients.map(ingredient => {
  const itemEl = document.createElement(`li`);
  itemEl.textContent = ingredient;
  itemEl.classList.add(`item`);
  return itemEl;
})
}

const product = makeIngredients(ingredients);

ListEl.append(...product);

console.log(ListEl);



