// Write a function that takes an array as argument.
// It should return true if all elements in the array are equal.
// It should return false otherwise.

function myFunction4(elements) {
    const validation = elements.every((element) => {
        return element === elements[0]
    })
    return validation;

}
console.log(myFunction4(['test', 'salam', 'men']));
console.log(myFunction4(['test', 'test', 'test']));
console.log(myFunction4([0, 0, 0]));
console.log('----------------------------------------------')

// Write a function that takes an array of objects as argument.
// Sort the array by property b in ascending order.
// Return the sorted array

function myFunction2(objects) {
    return objects.sort((a, b) => a.b - b.b)

}
console.log(myFunction2([{ a: 1, b: 10 }, { a: 5, b: 4 }]));