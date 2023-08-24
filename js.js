const error = document.querySelector(".error");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm_password");
const createAccountBtn = document.querySelector(".btn");
const showPasswordBtn = document.querySelector("#show-password-checkbox")
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
function showPassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
    } else {
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";

    }
}
createAccountBtn.addEventListener('click', checkPassword);
showPasswordBtn.addEventListener('click', showPassword);