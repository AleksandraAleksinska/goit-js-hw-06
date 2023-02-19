const categories = document.querySelectorAll('li.item');
// console.log(categories);
const numberOfCategories = [...categories].length;
console.log(`Number of categories: ${numberOfCategories}`);

categories.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`),
  console.log(`Elements: ${category.lastElementChild.children.length}`)
});
