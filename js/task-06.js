const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
    event.currentTarget.value.length === 6 ? input.classList.add("valid") : input.classList.replace("valid", "invalid");
});