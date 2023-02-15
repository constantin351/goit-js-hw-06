const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const insertIngredient = ingredients.map(element => {
  const listItem = document.createElement("li");
  listItem.textContent = element;
  listItem.classList.add('item');
  return listItem;
});

list.append(...insertIngredient);

console.log(document.querySelector('#ingredients'));

// for (const ingredient of ingredients) { 
//   const listItem = document.createElement('li');
//   // console.log(listItem);

//   listItem.textContent = ingredient;
//   listItem.classList.add('item');

//   document.querySelector('#ingredients').append(listItem);
// }

// console.log(document.querySelector('#ingredients'));