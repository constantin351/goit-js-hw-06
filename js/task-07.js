
const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
spanText.style.fontSize = "48px";

input.addEventListener("input", (event) => {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
});



