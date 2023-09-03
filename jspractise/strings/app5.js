// Write a function that takes a string as argument.
// Extract the last 3 characters from the string.Return the result

function myFunction(str) {

    return str.slice(str.length - 3, str.length)
}
console.log(myFunction('sdnsdhsdsd'))

function myFunction2(a) {

    return a.slice(0, a.length - 2)
}
console.log(myFunction2('salamam'))