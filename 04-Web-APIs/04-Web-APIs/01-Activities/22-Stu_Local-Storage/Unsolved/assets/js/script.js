var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var lastRegisteredUser = JSON.parse(localStorage.getItem("lastRegisteredUser"));
  if (lastRegisteredUser) {
    userEmailSpan.textContent = lastRegisteredUser.email;
    userPasswordSpan.textContent = lastRegisteredUser.password;
  }
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = emailInput.value;
  var password = passwordInput.value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    // Save email and password to localStorage
    var lastRegisteredUser = { email: email, password: password };
    localStorage.setItem("lastRegisteredUser", JSON.stringify(lastRegisteredUser));

    // Render the last registered user
    renderLastRegistered();
  }
});

