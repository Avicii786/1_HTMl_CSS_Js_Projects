// Retrieving HTML Elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Utility functions

// 1) error function
function showError(input, message) {
  //get the parent element of input field (.form-control)
  const formControl = input.parentElement;
  // override the class
  formControl.className = "form-control error";
  // display the error message
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// 2) success function
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// 3) function to validate email
function CheckEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Please provide a valide email');
  }
}

// 4) Function to check all the fields if they are not empty
function checkRequired(inputArray) {
  inputArray.forEach(function(input) {
    if (input.value === "") {
      showError(input, `${getFieldId(input)} is required`);
    }
    else {
      showSuccess(input);
    }
  });
}

// 5) function to get the id of the input field
function getFieldId(input) {
  return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// 6) function to check the length of input fields
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldId(input)} must be at least ${min} characters`);
  } 
  else if (input.value.length > max) {
    showError(input, `${getFieldId(input)} must be less than ${max} characters`);
  }
  else {
    showSuccess(input);
  }}

// function to confirm password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
} else if (input1.value === input2.value && input2.value !== "") {
  showSuccess(input2);
}}



//EVENT LISTENERS
// creating event listner for submit button
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // checking to see if all the input fields are filled

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkLength(password2, 6, 25);
  CheckEmail(email);
  checkPasswordMatch(password, password2);
});
