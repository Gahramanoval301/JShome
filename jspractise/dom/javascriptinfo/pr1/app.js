const p = document.getElementById('text')
const btn = document.querySelector('button')

function hideText() {
    p.remove()
}
btn.addEventListener('click', hideText)

//* Create a button that hides itself on click.
const btnHideMe = document.getElementById('hideme')
btnHideMe.onclick = (e) => {
    e.target.remove();
}