const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Fill into all the fields");
    } else { 
        console.log({ email: email.value, password: password.value });
    }

    event.currentTarget.reset();
});
