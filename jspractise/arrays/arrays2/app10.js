// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//     /* your code */
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert(unique(strings)); // Hare, Krishna, :-O

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i]))
            newArray.push(arr[i])
    }
    return newArray;

}

console.log(unique(strings));