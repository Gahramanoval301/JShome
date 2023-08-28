// Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties
// with names a and b respectively.
//     sum() returns the sum of these properties.
//         mul() returns the multiplication product of these properties.

function Calculator() {
    this.num1 = undefined;
    this.num2 = undefined;
    this.read = () => {
        this.num1 = +prompt('Enter the first number: ');
        this.num2 = +prompt('Enter the second number: ');
    }
    this.sum = () => {
        return this.num1 + this.num2;
    }
    this.mul = () => {
        return this.num1 * this.num2;

    }
}
const calc1 = new Calculator();
calc1.read();
console.log(calc1.sum());
console.log(calc1.mul());