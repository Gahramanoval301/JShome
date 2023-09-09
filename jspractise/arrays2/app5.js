// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

//     First, implement the method calculate(str) that takes a string like "1 + 2" in
//     the format “NUMBER operator NUMBER” (space - delimited) and returns the result.
//         Should understand plus + and minus -.

// Usage example:

// let calc = new Calculator;

// alert(calc.calculate("3 + 7")); // 10


// Then add the method addMethod(name, func) that teaches the calculator a new operation.
// It takes the operator name and the two - argument function func(a, b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert(result); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.

function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    }

    this.calculate = (str) => {
        str = str.split(' ');
        let number1 = +str[0];
        let number2 = +str[2];
        let operator = str[1];
        let result = this.methods[operator](number1, number2)
        return result;
    }

    this.addMethod = (name, func) => {
        this.methods[name] = func;
    }
}
const calculator1 = new Calculator();
const calculator2 = new Calculator();
console.log(calculator1.calculate('1 - 2'))
calculator2.addMethod('*', (a, b) => a * b)
console.log(calculator2.calculate('3 * 2'))
