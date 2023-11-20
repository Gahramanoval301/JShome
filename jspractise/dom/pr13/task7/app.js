const scrollBar = document.querySelector('.scroll-bar');
const thumb = document.querySelector('.scroll-thumb');

console.log(scrollBar, thumb);

scrollBar.addEventListener('click', changeFunc)
// thumb.addEventListener('click', changeFunc)

function changeFunc() {
    scrollBar.classList.toggle('right')
    thumb.style.transition = 'all 350ms'
}
//! Rule:
// 1. If you want to click on forward thing but you want also the same action can be enabled
// on backward item then add click action to backward item and this also affect to the 
// forward item, because this event is bubbling