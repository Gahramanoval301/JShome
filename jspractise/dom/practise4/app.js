// 2. Write a JavaScript function to get the values of First and Last names of
// the following form.
// Sample HTML file:
const inputs = document.querySelectorAll('input')
console.log(inputs);

function getFormvalue() {
    for (let input of inputs) {
        if (input.value != 'Submit')
            console.log(input.value);
    }

}
// function getFormvalue() {
//     var x = document.getElementById("form1");
//     for (var i = 0; i < x.length; i++) {
//         if (x.elements[i].value != 'Submit') {
//             console.log(x.elements[i].value);
//         }
//     }
// }