const scrollBar = document.querySelector('.scroll-bar');
const thumb = document.querySelector('.scroll-thumb');
console.log(scrollBar, thumb);
scrollBar.addEventListener('click', changeFunc)
thumb.addEventListener('click', changeFunc)
function changeFunc() {
    scrollBar.classList.toggle('right')
    thumb.style.transition = 'all 350ms'
}