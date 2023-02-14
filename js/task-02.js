const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const ingredient of ingredients) { 
  const listItem = document.createElement('li');
  // console.log(listItem);

  listItem.textContent = ingredient;
  listItem.classList.add('item');

  document.querySelector('#ingredients').append(listItem);
}

console.log(document.querySelector('#ingredients'));