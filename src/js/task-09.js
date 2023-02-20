function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const background = document.querySelector('body');
// console.log(widget);
const widgetColor = document.querySelector('.color')
const button = document.querySelector('.change-color')

const handleClick = (event) => {
  widgetColor.textContent = getRandomHexColor();
  background.style.backgroundColor = getRandomHexColor();
  }

button.addEventListener("click", handleClick);
