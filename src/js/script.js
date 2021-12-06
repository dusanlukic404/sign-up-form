"use strict";

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const btn = document.querySelector(".btn");
const inputFields = document.getElementsByClassName("inputFields");
const email = document.getElementById("email");
const errorMessages = document.getElementsByClassName("error-message");
const errorIcons = document.getElementsByClassName("error-icon");
const forms = document.querySelector(".forms");

const validateEmail = function (emailValue) {
  return emailPattern.test(emailValue);
};

const submitForm = function () {
  for (let i = 0; i < errorMessages.length; i++) {
    if (inputFields[i].value === "") {
      errorMessages[i].classList.add("show");
      errorIcons[i].classList.add("show");
      inputFields[i].style.outline = "2px solid hsl(0, 100%, 74%)";
    } else {
      errorMessages[i].classList.remove("show");
      errorIcons[i].classList.remove("show");
      inputFields[i].style.outline = "1px solid hsl(247, 10%, 83%)";
    }
  }
  if (email.value === "") {
    email.value = "email@example/com";
    email.style.color = "hsl(0, 100%, 74%)";
  } else if (validateEmail(email.value) === false) {
    errorMessages[2].classList.add("show");
    errorIcons[2].classList.add("show");
    inputFields[2].style.outline = "2px solid hsl(0, 100%, 74%)";
    email.value = "email@example/com";
    email.style.color = "hsl(0, 100%, 74%)"; // error crvena boja
  } else {
    errorMessages[2].classList.remove("show");
    errorIcons[2].classList.remove("show");
    email.style.color = "rgb(88, 83, 83)"; // input crna boja
    inputFields[2].style.outline = "1px solid hsl(247, 10%, 83%)";
  }
};

btn.addEventListener("click", function () {
  submitForm();
});

for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("keypress", function () {
    // moze da se koristi bilo koji key event!
    errorMessages[i].classList.remove("show");
    errorIcons[i].classList.remove("show");
    inputFields[i].style.outline = "1px solid hsl(247, 10%, 83%)";

    //za promenu boje u crno kada korisnik krene opet da kuca mejl
    inputFields[i].style.color = "rgb(88,83,83)";
  });
}

// submitovanje forme preko entera
document.addEventListener("keydown", function (e) {
  if (e.code === 13) {
    submitForm();
  }
});
