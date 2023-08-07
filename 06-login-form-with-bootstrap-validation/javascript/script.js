"use strict";

const chooseBtn = document.querySelectorAll(".choose-btn");
const forms = document.querySelectorAll(".needs-validation");

function changeActiveBtn(indexBtn) {
  chooseBtn.forEach((button, index) => {
    if (index !== indexBtn) button.classList.toggle("active");
    if (index === indexBtn) button.classList.toggle("active");
  });
  forms.forEach((form) => {
    form.classList.toggle("d-none");
  });
}

chooseBtn.forEach((button, index) => {
  button.addEventListener("click", function () {
    changeActiveBtn(index);
  });
});
Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});
