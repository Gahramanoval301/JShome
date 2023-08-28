// function pow(x, n) that returns x in power n.Or, in other words,
// multiplies x by itself n times and returns the result.
// Create a web - page that prompts
// for x and n, and then shows the result of pow(x, n).
// function should support only natural values of n: integers up from 1.
function pow(x, n) {
    if (x < 1)
        console.log("x cannot be less than the 1, it must be only natural values")
    if (x >= 1) {
        console.log(Math.pow(x, n))
    }
}
pow(prompt("Enter the base value of the expression"), prompt("Enter the exponent value of the expression"))
// pow(2, 3)