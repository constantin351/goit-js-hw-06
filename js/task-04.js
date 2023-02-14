let counterValue = 0;

const counterValueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const decrementClick = () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementClick);


const incrementClick = () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
};

incrementBtn.addEventListener("click", incrementClick);


