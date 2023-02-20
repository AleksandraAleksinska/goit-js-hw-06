const textInput = document.querySelector('#validation-input');
console.log(textInput);
const wantedTextInputLength = Number(textInput.getAttribute('data-length'));
console.log(wantedTextInputLength)
 textInput.addEventListener("blur", (event) => {
   if (event.currentTarget.value.length === wantedTextInputLength) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
   } 
   else {
    textInput.classList.add('invalid');
   };
 })