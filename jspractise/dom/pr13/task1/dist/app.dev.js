"use strict";

//*  Write a JavaScript program that creates a button and add a click event
//*  listener to log a message when it's clicked.
var button = document.createElement('button');
document.body.appendChild(button);
button.textContent = 'click me!';
button.addEventListener('click', function () {
  console.log('button is clicked!');
});