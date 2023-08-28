// Write afunction min(a, b) which returns the least of two numbers a and b.

function min(a, b) {
    if (a > b)
        return b;
    else
        return a;
}
console.log(min(12, 5))
console.log(min('Z', 'z'))
console.log(min('Z', 'A'))
console.log(min('Z', 'a'))
console.log(min('salam', 'Asalam'))
console.log(min('salam', 3))