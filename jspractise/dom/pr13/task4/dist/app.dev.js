"use strict";

//* . Write a JavaScript program that implements a "form"
//* validation that displays an error message if a required field is left empty
//* when submitting the form.
//* Click me to see the solution
var form = document.querySelector('form');
var submit = document.getElementById('submit');
var inputs = document.querySelectorAll('input[required]');
submit.addEventListener("click", sendfunc);

function sendfunc() {
  inputs.forEach(function (input) {
    if (input.value === '' || input.value === null || input.value === ' ') alert("You got errorMessages! for ".concat(input.name, " "));
  });
}