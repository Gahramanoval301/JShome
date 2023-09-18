"use strict";

//*  Write a JavaScript function that changes the background color of an element when
//*   a mouse enters it.
var element = document.getElementById('element');
var color = ['white', 'red', 'greeen', 'yellow', 'pink', 'navy', 'orange', 'blue', 'black', 'gray'];

function changeColor(e) {
  var randomIndex = Math.floor(Math.random() * 10);
  e.target.style.backgroundColor = color[randomIndex];
  e.target.style.backgroundColor === 'black' ? e.target.style.color = 'white' : e.target.style.color = 'black';
}

element.addEventListener('mouseover', changeColor); //todo 2ci yol
// element.addEventListener('mouseenter', changeColor)
// function changeColor(e) {
//     const color = prompt("Which color do you want your button be?");
//     e.target.style.backgroundColor = color;
// }