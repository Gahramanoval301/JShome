// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties
// with names a and b respectively.
//     sum() returns the sum of saved values.
//     mul() multiplies saved values and returns the result.


let calculator = {
    num1: undefined,
    num2: undefined,
    read() {
        this.num1 = +prompt('enter the first number: ');
        this.num2 = +prompt('enter the second number: ');
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());