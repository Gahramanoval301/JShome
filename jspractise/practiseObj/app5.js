// Write the
// function isEmpty(obj) which returns true
// if the object has no properties, false otherwise.

let user = {
    name: 'leman'
}
let isEmpty = (obj) => {
    for (let key in obj) {
        return true;
    }
    return false;
}
console.log(isEmpty(user))
//! false form -> undefined
// let isEmpty = (obj) => {
//     for (let key in obj) {
//         if (key in obj)
//             return true;
//         else {
//             return false;
//         }
//     }
// }

