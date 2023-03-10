const loginForm = document.querySelector('.login-form');
// console.log(loginForm);

function handleSubmit(event) {
  event.preventDefault();
  const {elements: {email, password}} = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert(`Field cannot be empty!`);
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

loginForm.addEventListener("submit", handleSubmit);