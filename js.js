const error = document.querySelector(".error");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm_password");
const createAccountBtn = document.querySelector(".btn");

if (passwordInput.value === "" && confirmPasswordInput.value === "") {
    error.innerHTML = "*Please enter the password";
}

function checkPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === "" && confirmPassword === "") {
        error.innerHTML = "*Please enter the password";
    } else if (password === confirmPassword) {
        error.innerHTML = "";
    } else {
        error.innerHTML = "*Passwords do not match";
    }
}

createAccountBtn.addEventListener('click', checkPassword);
