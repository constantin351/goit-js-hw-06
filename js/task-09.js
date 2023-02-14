
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanOutputText = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  spanOutputText.textContent = getRandomHexColor();
});

