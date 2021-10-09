let passwordField = document.getElementById("pass");

// get validations fields
let emailValidation = document.getElementById("email-validations");
let passwordValidation = document.getElementById("password-validations");
let emailField = document.getElementById("emailField");
let form = document.getElementById("Form");
let emailPlaceholder = document.getElementById("emailPlaceholder");
let passPlaceholder = document.getElementById("passPlaceholder");
let submitbtn = document.getElementById("submitBtn");
let pattern = /\S+@\S+\.\S+/;

// show/hide password
let showHide = () => {
  let show = document.getElementsByClassName("invisible")[0];

  show.classList.toggle("visible");

  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
};

// email and password validations
// form.addEventListener('submit', (e) => {
//     let emailErrors= [];
//     let passwordErrors = [];

//     if(emailField.value === '' || emailField.value == null){
//         emailErrors.push('Email field is required')
//     }

//     if(passwordField.value === '' || passwordField.value == null){
//         passwordErrors.push('Password is required')
//     }

//     if( passwordField.value.length > 0 && passwordField.value.length <6){
//         passwordErrors.push('Password lenght is less than 6 characters')
//     }

//     if (emailErrors.length > 0 || passwordErrors > 0){
//         e.preventDefault()
//         emailValidation.innerText = emailErrors.join(', ')
//         passwordValidation.innerText = passwordErrors.join(', ')
//     }
// });

submitbtn.addEventListener("click", () => {
  if (emailField.value.match(pattern)) {
    emailValidation.innerText = "Your email is valid";
    emailField.style.borderColor = "#F5B118";
  } else {
    emailPlaceholder.style.color = "red";
    emailField.style.borderColor = "red";
    emailValidation.innerText = "Invalid Email Format";

    if (passwordField.value === "" || passwordField.value == null) {
      passwordValidation.innerText = "Password cannot be empty";
    } else if (
      passwordField.value.length > 0 &&
      passwordField.value.length < 6
    ) {
      passwordValidation.innerText =
        "Password lenght is less than 6 characters";
    } else {
      return true;
    }
  }
});

console.log(emailValidation);
console.log(passwordValidation);
console.log(emailField);
console.log(pass);
console.log(form);
