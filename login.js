const emailInput = document.getElementById("Email_input");
const passwordInput = document.getElementById("Password_input");
const loginButton = document.getElementById("Login_button");
const loginError = document.getElementById("Login_error");

const correctEmail = "student@planr.co.nz";
const correctPassword = "planR2026";

loginButton.addEventListener("click", function() {

  if (
    emailInput.value === correctEmail &&
    passwordInput.value === correctPassword
  ) {
    window.location.href = "home.html";
  } else {
    loginError.textContent = "Incorrect email or password.";
  }

});