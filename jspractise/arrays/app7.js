function myFunction(arr) {
    let result = arr.every((element, index) => element === element[index])
    return result
}
console.log(myFunction([2, 3, 34, 34, 3, 3]));
function myFunction2(a, b) {
    let result = a.concat(b);
    return result.sort((a, b) => a - b)
}

console.log(myFunction2([2, 3, 34, 34, 3, 3], [2, 3, 4, 5, 4, 6,]));
function myFunction3(a) {
    return a.reduce((a, b) => {
        return (a.length > b.length ? a : b)
    })

}
//Write a function that takes an array of strings as argument. Return the longest string.

console.log(myFunction3(['help', 'me']))