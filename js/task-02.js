const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
// console.log(ingredientsList);

for (const ingredient of ingredients) {
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  listElement.classList.add("item");
  ingredientsList.append(listElement);
  
}

console.log(ingredientsList);