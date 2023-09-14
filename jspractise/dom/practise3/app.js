// *   Clicking on the button the font, font size,
// *   and color of the paragraph text will be changed.
const btn = document.querySelector('#jsstyle');
const p = document.querySelector('#text');
btn.addEventListener('click', () => {
    p.style.color = 'pink';
    p.style.fontSize = '20px';
    p.style.fontFamily = 'sans-serif';

})
//* Write a JavaScript program to set paragraph background color.
const color = prompt('Enter color what you want for your background');
document.body.style.backgroundColor = color;