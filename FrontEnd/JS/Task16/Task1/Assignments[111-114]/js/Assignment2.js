let nameInput = document.getElementById("username");
let emailInput = document.getElementById("email");
let passInput = document.getElementById("password");
let departmentInput = document.getElementById("department");


if (sessionStorage.getItem("username")) {
    nameInput.value = sessionStorage.getItem("username");
}
if (sessionStorage.getItem("email")) {
    emailInput.value = sessionStorage.getItem("email");
}
if (sessionStorage.getItem("password")) {
    passInput.value = sessionStorage.getItem("password");
}
if (sessionStorage.getItem("department")) {
    departmentInput.value = sessionStorage.getItem("department");
}

username.addEventListener("input", () => {
    window.sessionStorage.setItem("username", nameInput.value);
});
email.addEventListener("input", () => {
    window.sessionStorage.setItem("email", emailInput.value);
});
password.addEventListener("input", () => {
    window.sessionStorage.setItem("password", passInput.value);
});
department.addEventListener("change", () => {
    window.sessionStorage.setItem("department", departmentInput.value);
});