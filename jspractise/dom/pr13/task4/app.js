//* . Write a JavaScript program that implements a "form"
//* validation that displays an error message if a required field is left empty
//* when submitting the form.
//* Click me to see the solution

const form = document.querySelector('form');
const submit = document.getElementById('submit');
const inputs = document.querySelectorAll('input[required]')


submit.addEventListener("click", sendfunc)

function sendfunc() {
    inputs.forEach((input) => {
        if (input.value === '' || input.value === null || input.value === ' ')
            alert(`You got errorMessages! for ${input.name} `)
    })
}
