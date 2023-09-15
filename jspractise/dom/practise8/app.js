// * Write a JavaScript program to count and display dropdown list items in an alert window.


const select = document.getElementById('mySelect');
const options = select.children
function getOptions() {
    for (let child of options) {
        alert(child.value);
    }
    alert(options.length);


}