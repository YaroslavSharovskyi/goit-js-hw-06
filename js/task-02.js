const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const itemEl = document.createElement(`li`);
// itemEl.textContent = ingredients;
// itemEl.classList.add(`item`);


// console.log(itemEl);


const makeIngredients = ingredients => {
  const itemIngredients = [];
  for (const ingredient of ingredients) {
  const itemEl = document.createElement(`li`);
  itemEl.textContent = ingredient;
  itemEl.classList.add(`item`);
  return itemEl;
  }

  return itemIngredients.push(itemEl);
}


console.log(makeIngredients(ingredients));


