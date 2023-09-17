//*  Write a JavaScript program that creates a button and add a click event
//*  listener to log a message when it's clicked.

const button = document.createElement('button');
document.body.appendChild(button);
button.textContent = 'click me!';


button.addEventListener('click', () => {
    console.log('button is clicked!')
})
