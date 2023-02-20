const fontSizeControl = document.querySelector('#font-size-control');
console.log(fontSizeControl);
const textToChange = document.querySelector('#text');
console.log(textToChange);

fontSizeControl.addEventListener("input", (event) => {
  textToChange.style.fontSize = event.currentTarget.value + 'px';
});