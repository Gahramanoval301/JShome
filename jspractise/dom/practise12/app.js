//* Write a JavaScript program to get the window width and height
//*     (any time the window is resized).
div = document.getElementById('wh');
console.dir(document.documentElement)
function getSize() {
    const width = document.documentElement.clientWidth
    const height = document.documentElement.clientHeight
    div.innerHTML = `<h1>width: ${width} heigth: ${height}</h1>`


}