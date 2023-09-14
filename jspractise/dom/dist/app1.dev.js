"use strict";

//TODO  variables are defined
var container = document.querySelector('.container');
var startGame = document.querySelector('h3');
var cow = document.querySelector('img');
var goCow = document.querySelector('#go');
var stopCow = document.querySelector('#stop');
var jumpCow = document.querySelector('#jump');
var pos = 0;

startGame.onclick = function () {
  alert('then go to the control panel!');
};

function moveCow() {
  goCow.onclick = function () {
    var id = setInterval(function () {
      pos += 10;
      cow.style.left = pos + 'px';
    }, 200);

    stopCow.onclick = function () {
      clearInterval(id);
    };
  };
} //TODO  special variables for jumpingCow


var posUp = 0;

function jumpingCow() {
  jumpCow.onclick = function () {
    posUp += 10;
    cow.style.top = pos + 'px';
  };
}

moveCow();
jumpingCow();