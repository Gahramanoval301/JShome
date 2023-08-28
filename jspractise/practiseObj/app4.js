//! before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//* if the values of property is number, then find the multiplication of this number by 2
// multiplyNumeric(menu);

//! after the call
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

let menu = {
    number1: 30,
    number2: 60,
    word: 'salam'
}
console.log(menu)
let multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] == 'number')
            obj[key] *= 2
    }
}
multiplyNumeric(menu)
console.log(menu)