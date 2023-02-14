const input = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");


const handleInput = event => {
       spanOutput.textContent = event.currentTarget.value !== "" ? event.currentTarget.value : "Anonymous"; 
};


input.addEventListener("input", handleInput);