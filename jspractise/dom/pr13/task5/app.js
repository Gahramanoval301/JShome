//*  Write a JavaScript program to create a slideshow that changes the displayed imag
//*   when a next or previous button is clicked.

const img = document.getElementById('img');
const forward = document.getElementById('forward');
const backward = document.getElementById('backward');
const sources = ['./images/photo1.jpg', './images/photo2.jpg', './images/photo3.jpg',
    './images/photo4.jpg', './images/photo6.jpg', './images/photo7.jpeg',
    './images/photo8.avif', './images/photo9.jpeg'];
img.src = './images/photo1.jpg';
let currentIndex = 0;

forward.addEventListener("click", forwardFunc)
function forwardFunc(e) {
    currentIndex = (currentIndex + 1) % sources.length;
    img.src = sources[currentIndex]
    let id = setTimeout(() => {
        img.style.transform = 'scale(1.02)'
        img.style.boxShadow = '0 0 50px yellow'
    }, 1);
    setTimeout(() => {
        img.style.transform = 'scale(1)'
        img.style.boxShadow = '0 0 0'
    }, 500);

    // for (let i = 0; i < sources.length - 1; i++) {
    //     if (img.src = sources[i]) {
    //         img.src = sources[i + 1];
    //         return;
    //     }
    //     console.log(img.src)
    // }

}
backward.addEventListener("click", backwardFunc);
function backwardFunc(e) {
    currentIndex = (currentIndex - 1 + sources.length) % sources.length;//1, 1-1+9 %9
    img.src = sources[currentIndex];
    let id = setTimeout(() => {
        img.style.transform = 'scale(1.02)'
        img.style.boxShadow = '0 0 50px yellow'
    }, 1);
    setTimeout(() => {
        img.style.transform = 'scale(1)'
        img.style.boxShadow = '0 0 0'
    }, 500);
    //     for (let i = 0; i < sources.length - 1; i++) {
    //         if (img.src = sources[i]) {
    //             img.src = sources[i - 1];
    //             return;
    //         }
    // console.log(img.src)
}

