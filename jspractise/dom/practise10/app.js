//* Write a JavaScript program to display a random image(clicking on a button)
//* from the following list.

//* "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"
//* "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"
//* "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"

const div = document.querySelector('div')
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');


function display_random_image() {
    img1.setAttribute('src', "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg")
    img1.setAttribute('style', "width: 240 heigth: 160")
    img2.setAttribute('src', "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg")
    img2.setAttribute('style', " width: 320, height: 195")
    img3.setAttribute('src', "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg")
    img3.setAttribute('style', "width: 500 heigth: 343")
    div.append(img1, img2, img3)
}
