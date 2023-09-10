// Write a function that takes an array of numbers as argument.
// Return the number of negative values in the array.

function myFunction1(array) {
    let count = 0;
    array.forEach((element) => {
        if (element < 0)
            count++;
    })

    return `the total number of negative values inside of array is ${count}`
}

console.log(myFunction1([23, 34, 56, -6, -7, 8, -2, -3, 40]));

// Write a function that takes an array of numbers as argument.
// It should return the sum of the numbers.

function myFunction2(array) {
    let sum = 0
    array.forEach((element) => { sum += element })
    return `the sum of the elements of ${array} is ${sum}`
}
console.log(myFunction2([2, 43, 24, 61, 7, 9, 203]));

// Write a function that takes an array of numbers as argument.
// It should return the average of the numbers.
function myFunction3(numbers) {
    let sum = 0;
    let average = 0;
    numbers.forEach((number) => {
        sum += number;
    })
    average = sum / numbers.length;
    return `the average of numbers inside of ${numbers} is ${average}`
}
console.log(myFunction3([2, 3, 4, 1, 10]));

