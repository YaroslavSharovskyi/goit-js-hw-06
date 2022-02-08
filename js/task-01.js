const amountItemEl = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${amountItemEl.length}`);



const itemEl = document.querySelectorAll(`.item`);
const firstItemEl = itemEl[0].firstElementChild;
const firstTitleTextEl = firstItemEl.textContent;

const firstListEl = firstItemEl.nextElementSibling;
const amountFirstItemEl = firstListEl.children.length;

console.log(`Category: ${firstTitleTextEl}`);
console.log(`Elements: ${amountFirstItemEl}`);


const secondItemEl = itemEl[1].firstElementChild;
const secondTitleTextEl = secondItemEl.textContent;

const secondListEl = secondItemEl.nextElementSibling;
const amountSecondItemEl = secondListEl.children.length;

console.log(`Category: ${secondTitleTextEl}`);
console.log(`Elements: ${amountSecondItemEl}`);

const thirdItemEl = itemEl[2].firstElementChild;
const thirdTitleTextEl = thirdItemEl.textContent;

const thirdListEl = thirdItemEl.nextElementSibling;
const amountthirdItemEl = thirdListEl.children.length;

console.log(`Category: ${thirdTitleTextEl}`);
console.log(`Elements: ${amountthirdItemEl}`);