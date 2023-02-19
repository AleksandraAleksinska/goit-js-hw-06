
let counterValue = 0;

const shownCounterValue = document.querySelector('#value'); 

const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

const decrement = () => {
  return counterValue = counterValue - 1,
  // console.log(counterValue),
  shownCounterValue.textContent = counterValue;
  
};
decrBtn.addEventListener("click", decrement);

const increment = () => {
  return counterValue = counterValue + 1, 
  // console.log(counterValue),
  shownCounterValue.textContent = counterValue;
};
incrBtn.addEventListener("click", increment);








