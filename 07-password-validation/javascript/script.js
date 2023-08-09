"use strict";

const inputPassword = document.querySelector("input");
const eyeIcon = document.querySelector("i");
const listItems = document.querySelectorAll("li");
const contains = [8, /[A-Z]/g, /[0-9]/g, /[^\w ]/g];
let isVisible = false;

function checkPasswordIsValid(password) {
  contains.forEach((item, index) => {
    if (index == 0)
      password.length >= item
        ? listItems[index].classList.add("active")
        : listItems[index].classList.remove("active");
    else
      password.match(item)
        ? listItems[index].classList.add("active")
        : listItems[index].classList.remove("active");
  });
}

inputPassword.addEventListener("input", function () {
  checkPasswordIsValid(this.value);
});
eyeIcon.addEventListener("click", function () {
  isVisible = !isVisible;
  eyeIcon.className = `bi ${isVisible ? "bi-eye" : "bi-eye-slash"}`;
  inputPassword.type = `${isVisible ? "text" : "password"}`;
});
