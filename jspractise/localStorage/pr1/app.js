const btn = document.querySelector('#btn')
const age = document.querySelector('#age');
let ageValue = age.value;
btn.onclick = Read


function Read() {
    localStorage.setItem('number', age.value);
    setTimeout(() => {
        age.remove();
    }, 500);
    if (localStorage.getItem('number') >= 18)
        alert("You can accses to this page!")
    else
        alert("This page isn't fit your age!!!!")
}
