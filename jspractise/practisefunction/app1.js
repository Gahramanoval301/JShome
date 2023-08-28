// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Did parents allow you?');
//     }
// }


// Using a question mark operator ?
//TODO let result = (condition) ? true : false
function getCheckAge(age) {
    let result = (age > 18) ? true : confirm("Did parents allow you?")
    return result;
}
let netice1 = getCheckAge(9)
let netice2 = getCheckAge(19)

console.log(netice1)
console.log(netice2)

//     Using OR ||
function getCheckAge(age) {
    return (age > 18) || confirm("Did parents allow you?")
}
let netice = getCheckAge(20)
console.log(netice)