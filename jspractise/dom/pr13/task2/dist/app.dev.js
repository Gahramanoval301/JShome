"use strict";

//* 2. Write a JavaScript program to create a dropdown menu
//*  that shows and hides its options when clicked.
var dropdownBtn = document.querySelector('.dropdownbtn');
var dropdownMenu = document.querySelector('.dropdown-menu');
dropdownBtn.addEventListener('click', openDropdown);

function openDropdown(e) {
  dropdownMenu.classList.toggle('open');
}